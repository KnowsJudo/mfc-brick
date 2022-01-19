import React from 'react';
import { pageList } from '../../utils/page-list';

export const BBHeader: React.FC<{ pageNo: number }> = (props) => {
  return (
    <div
      style={{
        background: 'grey',
        display: 'flex',
      }}
    >
      <h1
        style={{
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
