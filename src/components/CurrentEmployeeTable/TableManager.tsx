import { Input } from "../ui/input";
import type { Table } from "@tanstack/react-table";

interface TableManagerProps<TData> {
  table: Table<TData>;
}

const TableManager = <TData,>({ table }: TableManagerProps<TData>) => {
  return (
    <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-2 sm:gap-0 px-2 sm:mx-8 overflow-x-auto">
      <div className="flex items-center py-2 sm:py-4 w-full sm:w-1/2">
        <label htmlFor="global-search" className="sr-only">
          Search all columns
        </label>
        <Input
          id="global-search"
          placeholder="Search all columns..."
          value={table.getState().globalFilter ?? ""}
          onChange={(event) =>
            table.setGlobalFilter(String(event.target.value))
          }
          aria-label="Search all columns"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          aria-label="Go to first page"
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Go to previous page"
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Go to next page"
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          aria-label="Go to last page"
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <span id="pagination-label" className="sr-only">
            Current page
          </span>
          <div aria-labelledby="pagination-label">Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          <label htmlFor="goto-page" className="sr-only">
            Go to page
          </label>
          | Go to page:
          <input
            id="goto-page"
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
            aria-label="Go to page number"
          />
        </span>
        <label htmlFor="page-size" className="sr-only">
          Rows per page
        </label>
        <select
          id="page-size"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          aria-label="Rows per page"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableManager;
