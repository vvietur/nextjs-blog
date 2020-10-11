import React from 'react';

export default function footer() {
  return (
    <>
      <div className="footer">Powered by WieTur &copy; 2020. All right reserved.</div>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
