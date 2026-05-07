import { Icon } from '@iconify/react'

const normalizeOption = (opt) =>
  typeof opt === 'object' && opt !== null
    ? opt
    : { value: opt, label: String(opt) }

export const Select = ({ value, onChange, options, ariaLabel }) => {
  const normalized = options.map(normalizeOption)

  const handleChange = (e) => {
    const original = normalized.find((o) => String(o.value) === e.target.value)
    onChange(original?.value ?? e.target.value)
  }

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        className="appearance-none bg-white border border-border-default rounded-md text-body-md text-text-primary pl-md pr-2xl py-sm cursor-pointer focus:outline-none"
      >
        {normalized.map(({ value: v, label }) => (
          <option key={String(v)} value={String(v)}>
            {label}
          </option>
        ))}
      </select>
      <Icon
        icon="mdi:chevron-down"
        className="absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary"
      />
    </div>
  )
}
