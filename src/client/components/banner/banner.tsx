import React from 'react';
import { IImagepath } from '../../types/banner';
import { imagePath } from '../../utils/imagepath';

export const Banner: React.FC<IImagepath> = (props) => {
  return (
    <div
      style={{
        height: '14rem',
        display: 'flex',
      }}
    >
      <section>
        <img
          src={imagePath + props.imagePath}
          alt={props.imagePath}
          style={{
            opacity: '0.7',
            height: '100%',
            width: '100vw',
            objectFit: 'cover',
          }}
        />
      </section>
    </div>
  );
};
