import { memo, useCallback, useMemo, useState } from 'react'
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

const EMPTY_DATA = []

const STYLE_WITH_DATUM = {
  default: { outline: 'none', cursor: 'pointer' },
  hover:   { outline: 'none', fill: HOVER_FILL, cursor: 'pointer' },
  pressed: { outline: 'none', fill: HOVER_FILL },
}
const STYLE_NO_DATUM = {
  default: { outline: 'none', cursor: 'default' },
  hover:   { outline: 'none', fill: HOVER_FILL, cursor: 'default' },
  pressed: { outline: 'none', fill: HOVER_FILL },
}

const CountryShape = memo(function CountryShape({
  geo,
  datum,
  fill,
  onEnter,
  onMove,
  onLeave,
  onClick,
}) {
  return (
    <Geography
      geography={geo}
      fill={fill}
      stroke={STROKE}
      strokeWidth={0.5}
      onMouseEnter={(e) => onEnter(datum, e)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onClick(datum)}
      style={datum ? STYLE_WITH_DATUM : STYLE_NO_DATUM}
    />
  )
})

export const WorldMap = ({
  data = EMPTY_DATA,
  getFill,
  onCountryClick,
  onCountryHover,
  tooltipContent,
  enableZoom = true,
  geoUrl = '/geo/countries-110m.json',
  zoomButtonClassName = 'bg-status-death-cases hover:bg-hover-map1 text-neutral-0',
}) => {
  const [zoom, setZoom] = useState(1)
  const [hovered, setHovered] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const lookup = useMemo(() => {
    const m = new Map()
    for (const c of data) {
      const id = c?.countryInfo?._id
      if (id != null) m.set(String(id).padStart(3, '0'), c)
    }
    return m
  }, [data])

  const handleEnter = useCallback(
    (datum, e) => {
      setHovered(datum ?? null)
      setCursor({ x: e.clientX, y: e.clientY })
      onCountryHover?.(datum ?? null)
    },
    [onCountryHover],
  )

  const handleMove = useCallback((e) => setCursor({ x: e.clientX, y: e.clientY }), [])

  const handleLeave = useCallback(() => {
    setHovered(null)
    onCountryHover?.(null)
  }, [onCountryHover])

  const handleClick = useCallback(
    (datum) => {
      if (!datum) return
      onCountryClick?.(datum)
    },
    [onCountryClick],
  )

  const zoomIn  = useCallback(() => setZoom((z) => Math.min(z * ZOOM_STEP, MAX_ZOOM)), [])
  const zoomOut = useCallback(() => setZoom((z) => Math.max(z / ZOOM_STEP, MIN_ZOOM)), [])

  const renderGeographies = (geographies) =>
    geographies.map((geo) => {
      const datum = lookup.get(String(geo.id).padStart(3, '0'))
      const fill = getFill?.(geo, datum) ?? DEFAULT_FILL
      return (
        <CountryShape
          key={geo.rsmKey}
          geo={geo}
          datum={datum}
          fill={fill}
          onEnter={handleEnter}
          onMove={handleMove}
          onLeave={handleLeave}
          onClick={handleClick}
        />
      )
    })

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-neutral-0 rounded-sm overflow-hidden">
      {enableZoom && (
        <div className="absolute top-sm left-sm flex flex-col gap-xs z-10">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={zoomIn}
            className={`${zoomButtonClassName} rounded-md shadow-sm w-6 h-6 md:w-8 md:h-8 flex items-center justify-center`}
          >
            <Icon icon="mdi:plus" width={18} height={18} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={zoomOut}
            className={`${zoomButtonClassName} rounded-md shadow-sm w-6 h-6 md:w-8 md:h-8 flex items-center justify-center`}
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
