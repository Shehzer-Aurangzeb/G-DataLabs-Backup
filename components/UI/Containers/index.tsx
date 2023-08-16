import React from 'react';
import Main from './Main';
import Side from './Side';

interface IProps {
  children: React.ReactNode;
  type: 'main' | 'side';
  className?: string;
}

function Container({ children, type, className }: IProps) {
  return (
    <>
      {type === 'main' && <Main className={className}>{children}</Main>}
      {type === 'side' && <Side className={className}>{children}</Side>}
    </>
  );
}

Container.defaultProps = {
  className: '',
};
export default Container;
