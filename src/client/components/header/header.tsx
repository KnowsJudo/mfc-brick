import React from 'react';
import { pageList } from '../../utils/page-list';

export const BBHeader: React.FC<{ pageNo: number }> = (props) => {
  return (
    <div
      style={{
        background: 'grey',
        height: '6rem',
        display: 'flex',
      }}
    >
      <h1
        style={{
          fontFamily: 'Encode Sans SC, sans-serif',
          color: 'white',
          padding: 10,
          margin: 'auto',
        }}
      >
        {pageList[props.pageNo].title}
      </h1>
    </div>
  );
};
