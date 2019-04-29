import React from 'react'
import DocGridItem from './DocGridItem'

export default (props) => (
  <main>
    <div className="doc-area">
      <div className="docs-status">
        <div className="docs-status-alpha"><span className="total-docs"># </span><span>Documents</span></div>
        <div className="docs-status-beta"><span className="total-size">Total size: </span><span className="amount">#</span><span className="unit">kb</span></div>
      </div>
      <ul className="doc-grid">
        <DocGridItem />
        <DocGridItem />
        <DocGridItem />
      </ul>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
        }
        .docs-status {
          display: flex;
          align-items: bottom;
          justify-content: space-between;
        }
        .docs-status-alpha {font-size: 30px;}
        .docs-status-beta {font-size: 22px;}
        
        {/* Baseline alignment of header text */}
        .docs-status > * {display: flex;}
        .docs-status > * > * {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .doc-grid {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-flow: row dense;
        }

        @media (max-width: 768px) {
          .docs-status {
            flex-direction: column;
          }
          .docs-status-alpha {
            margin-bottom: 10px;
          }
          .doc-grid { display: block; }
        }
      `}</style>
    </div>
  </main>
)