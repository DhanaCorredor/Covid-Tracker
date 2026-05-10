import { useMemo, useState } from 'react'
import { Icon } from '@iconify/react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'

const DEFAULT_FILL = 'var(--color-status-death-cases)'
const HOVER_FILL = 'var(--color-hover-map1)'
const STROKE = 'var(--color-neutral-0)'

const MIN_ZOOM = 1
const MAX_ZOOM = 8
const ZOOM_STEP = 1.5

export const WorldMap = ({
  data = [],
  getFill,
  onCountryClick,
  onCountryHover,
  tooltipContent,
  enableZoom = true,
  geoUrl = '/geo/countries-110m.json',
}) => {
  const [zoom, setZoom] = useState(1)
  const [hovered, setHovered] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const lookup = useMemo(() => {
    const m = new Map()
    for (const c of data) {
      const id = c?.countryInfo?._id
      if (id != null) m.set(String(id), c)
    }
    return m
  }, [data])

  const handleEnter = (datum, e) => {
    setHovered(datum ?? null)
    setCursor({ x: e.clientX, y: e.clientY })
    onCountryHover?.(datum ?? null)
  }
  const handleMove = (e) => setCursor({ x: e.clientX, y: e.clientY })
  const handleLeave = () => {
    setHovered(null)
    onCountryHover?.(null)
  }
  const handleClick = (datum) => {
    if (!datum) return
    onCountryClick?.(datum)
  }

  const zoomIn = () => setZoom((z) => Math.min(z * ZOOM_STEP, MAX_ZOOM))
  const zoomOut = () => setZoom((z) => Math.max(z / ZOOM_STEP, MIN_ZOOM))

  const renderGeographies = (geographies) =>
    geographies.map((geo) => {
      const datum = lookup.get(String(geo.id))
      const fill = getFill?.(geo, datum) ?? DEFAULT_FILL
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill={fill}
          stroke={STROKE}
          strokeWidth={0.5}
          onMouseEnter={(e) => handleEnter(datum, e)}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onClick={() => handleClick(datum)}
          style={{
            default: { outline: 'none', cursor: datum ? 'pointer' : 'default' },
            hover: { outline: 'none', fill: HOVER_FILL, cursor: datum ? 'pointer' : 'default' },
            pressed: { outline: 'none', fill: HOVER_FILL },
          }}
        />
      )
    })

  return (
    <div className="relative w-full h-full bg-neutral-0 rounded-sm overflow-hidden">
      {enableZoom && (
        <div className="absolute top-sm left-sm flex flex-col gap-xs z-10">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={zoomIn}
            className="bg-status-death-cases hover:bg-hover-map1 text-neutral-0 rounded-md shadow-sm w-8 h-8 flex items-center justify-center"
          >
            <Icon icon="mdi:plus" width={18} height={18} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={zoomOut}
            className="bg-status-death-cases hover:bg-hover-map1 text-neutral-0 rounded-md shadow-sm w-8 h-8 flex items-center justify-center"
          >
            <Icon icon="mdi:minus" width={18} height={18} />
          </button>
        </div>
      )}

      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
        {enableZoom ? (
          <ZoomableGroup zoom={zoom} center={[0, 45]} minZoom={MIN_ZOOM} maxZoom={MAX_ZOOM}>
            <Geographies geography={geoUrl}>
              {({ geographies }) => renderGeographies(geographies)}
            </Geographies>
          </ZoomableGroup>
        ) : (
          <Geographies geography={geoUrl}>
            {({ geographies }) => renderGeographies(geographies)}
          </Geographies>
        )}
      </ComposableMap>

      {tooltipContent && hovered && (
        <div
          className="fixed z-20 pointer-events-none bg-neutral-900 text-neutral-0 text-label-sm px-sm py-xs rounded-md shadow-md"
          style={{ left: cursor.x + 12, top: cursor.y + 12 }}
        >
          {tooltipContent(hovered)}
        </div>
      )}
    </div>
  )
}
