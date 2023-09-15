import React from 'react';
import { Column, useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import Image from '@/components/UI/StyledImage';
import { Columns } from '@/types';
import arrowUp from '@/public/assets/icons/arrow_upward.png';
import arrowdown from '@/public/assets/icons/arrow_down.png';
import GlobalFilter from './GlobalFilter';
import Pagination from './Pagination';
import SelectEntries from './SelectEntries';

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
    setPageSize,
    page,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 3,
        pageIndex: 0,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const { globalFilter, pageSize, pageIndex } = state;
  return (
    <>
      <div className="flex justify-between items-center mobile:flex-col-reverse">
        <SelectEntries pageSize={pageSize} setPageSize={setPageSize} />
        <div className="my-3 mr-2">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                /* eslint-disable */
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans mx-auto justify-center'
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
          {page.map((row: any) => {
            prepareRow(row);
            return (
              /* eslint-disable */
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center"
                  >
                    {cell.column.Header === 'Image'
                      ? cell.value.length > 0
                        ? cell.value.map((image: string) => (
                            <Image
                              src={image}
                              key={uuidv4()}
                              alt={'response-image'}
                              className="my-3 w-[120px] h-[120px]"
                            />
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
        <Pagination
          canNextPage={canNextPage}
          pageIndex={pageIndex}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </>
  );
}

export default Table;
