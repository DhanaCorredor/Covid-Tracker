import { Icon } from '@iconify/react'

export const ErrorState = ({ message, onRetry, className = '' }) => {
  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center gap-md p-lg rounded-lg border border-border-default bg-neutral-0 text-center ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-status-cases-bg">
        <Icon
          icon="mdi:alert-circle-outline"
          width={24}
          height={24}
          className="text-status-cases"
        />
      </div>
      <p className="text-body-md text-text-primary">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-xs px-md py-sm rounded-md bg-purple-700 text-neutral-0 text-label-md font-semibold hover:bg-purple-900 transition-colors cursor-pointer"
        >
          <Icon icon="mdi:refresh" width={16} height={16} />
          Retry
        </button>
      )}
    </div>
  )
}
