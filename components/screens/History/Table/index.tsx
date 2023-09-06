import React from 'react';
import { Column, useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import Image from '@/components/UI/StyledImage';
import { Columns } from '@/types';
import GlobalFilter from './GlobalFilter';

interface IProps {
  data: any;
  columns: Column<Columns>[];
}

function Table({ columns, data }: IProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const { globalFilter, pageSize } = state;
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-4">
          <span className="mr-2">Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
            }}
          >
            {[10, 20, 30, 50].map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <span className="ml-2">entries</span>
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.Header === 'Answers'
                      ? 'w-[800px] border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap'
                      : 'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap'
                  }
                >
                  {column.render('Header')}
                  <span>{column.isSorted ? ' 🔽' : ' 🔼'}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              /* eslint-disable */
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap"
                  >
                    {cell.column.Header === 'Image'
                      ? cell.value.length > 0
                        ? cell.value.map((image: string, index: number) => (
                            <Image src={image} alt={`response-image-${index}`} className="my-3 w-[120px] h-[120px]" />
                          ))
                        : '-'
                      : cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="float-right my-2 mx-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-black text-white px-4 py-2 text-base disabled:bg-main"
        >
          Previous
        </button>
        <span className="bg-blue text-white px-4 py-[10px] text-base">{pageOptions.length}</span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-black text-white px-4 py-2 text-base disabled:bg-main"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Table;
