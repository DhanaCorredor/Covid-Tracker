export const FilterBar = ({ children, rightSlot }) => (
  <div className="flex flex-col gap-md md:flex-row justify-between items-center border-b border-neutral-200 pb-md">
    {children}
    {rightSlot}
  </div>
)
