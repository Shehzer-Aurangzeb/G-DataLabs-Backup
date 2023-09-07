import React from 'react';
import { Column, useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import Image from '@/components/UI/StyledImage';
import { Columns } from '@/types';
import arrowUp from '@/public/assets/icons/arrow_upward.png';
import arrowdown from '@/public/assets/icons/arrow_down.png';
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
      <div className="flex justify-between items-center mobile:flex-col-reverse">
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
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="ml-2">entries</span>
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column: any, columnIndex: number) => (
                /* eslint-disable */
                <th
                  key={columnIndex}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans mx-auto justify-center'
                  }
                >
                  {column.render('Header')}
                  <span className="ml-2 float-right" style={{ filter: 'brightness(0) invert(1)' }}>
                    {column.isSorted ? (
                      <Image src={arrowdown} alt={'arrow_down'} className="w-5 h-5 mt-1" />
                    ) : (
                      <Image src={arrowUp} alt={'arrow_up'} className="w-5 h-5 mt-1" />
                    )}
                  </span>
                </th>
                /* eslint-enable */
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, rowIndex: number) => {
            prepareRow(row);
            return (
              /* eslint-disable */
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell: any, cellIndex: number) => (
                  <td
                    key={cellIndex}
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
      {rows.length !== 0 && (
        <div className="my-2 mx-auto flex justify-center ">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-black text-white px-6 py-2 text-base disabled:bg-slate-600 mx-3 rounded-xl"
          >
            Previous
          </button>
          <span className="bg-blue text-white px-6 py-3 rounded-lg text-xl">{pageOptions.length}</span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="bg-black text-white px-6 py-2 text-base disabled:bg-slate-600 mx-3 rounded-xl"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
