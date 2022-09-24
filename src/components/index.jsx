import React from 'react';

const Parent = () => (
  <>
    <style jsx>
      {`
        .content {
          width: 1200px;
          margin: 0 auto;
        }
      `}
    </style>
    <div>
      <div className='content'>
        <p>Hello world!</p>
      </div>
    </div>
  </>
);

export default Parent;