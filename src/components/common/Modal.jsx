import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'

export const Modal = ({ isOpen, onClose, title, children }) => {
  const titleId = useId()
  // Guardamos la última referencia de onClose en un ref para no re-registrar
  // el listener de teclado cada vez que el padre re-renderiza con un onClose nuevo.
  // Equivalente a useEffectEvent (aún no disponible en React 19.2 stable).
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose })

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current?.()
    }
    document.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose?.()
  }

  return createPortal(
    // El cierre por teclado del backdrop ya está cubierto por Escape (ver useEffect).
    // El div es role="dialog" — no debe ser focusable ni interpretarse como botón.
    // oxlint-disable-next-line click-events-have-key-events
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 bg-neutral-900/60 flex items-center justify-center p-lg"
    >
      <div className="bg-neutral-0 rounded-xl shadow-md max-w-130 w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between px-xl py-md border-b border-border-default">
          <h2 id={titleId} className="text-heading-lg text-text-primary">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary"
          >
            <Icon icon="mdi:close" width={22} height={22} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
