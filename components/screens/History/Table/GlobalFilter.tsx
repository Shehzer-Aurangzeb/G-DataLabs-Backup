import React from 'react';

interface IProps {
  filter: any;
  setFilter: any;
}
function GlobalFilter({ filter, setFilter }: IProps) {
  return (
    <div className="flex justify-between items-center my-4 float-right">
      <span>
        Search: <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} className="py-2 px-2 mx-2" />
      </span>
    </div>
  );
}

export default GlobalFilter;
