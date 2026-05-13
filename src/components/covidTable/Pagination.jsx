

export const Pagination = ({ table }) => {
    const { pageIndex, pageSize } = table.getState().pagination;
    const totalRows = table.getFilteredRowModel().rows.length;
    const totalPages = table.getPageCount();
    const current = pageIndex + 1;

    const from = pageIndex * pageSize + 1;
    const to = Math.min((pageIndex + 1) * pageSize, totalRows);

    const getPages = () => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (current <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
        if (current >= totalPages - 3) return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        return [1, "...", current - 1, current, current + 1, "...", totalPages];
    };

    const btnBase = "flex items-center justify-center min-w-10 h-8 px-2 text-body-sm cursor-pointer transition-colors ";

    return (
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between w-full mt-4 gap-2">
            <h3 className="text-body-sm text-neutral-500">
                Showing {from} to {to} of {totalRows} entries
            </h3>

            <div className="flex items-center text-neutral-500 gap-1">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={`${btnBase} px-3 disabled:cursor-not-allowed hover:bg-neutral-100`}
                >
                    Previous
                </button>

                {getPages().map((page, i) =>
                    page === "..." ? (
                        <span key={`ellipsis-${i}`} className="flex items-center justify-center w-8 h-8">
                            …
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => table.setPageIndex(page - 1)}
                            className={`${btnBase} ${page === current
                                    ? "bg-status-death-cases text-neutral-0 font-bold"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={`${btnBase} px-3 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};