import { createRef } from "react";

import ReactPdf from "react-to-pdf";

const ref = createRef();

export default function PDF() {
  return (
    <div>
      <div ref={ref}>
        <p>bla</p>
      </div>
      <ReactPdf targetRef={ref} filename="card.pdf">
        {({ toPdf }) => {
          return (
            <button targetRef={ref} onClick={toPdf}>
              bla
            </button>
          );
        }}
      </ReactPdf>
    </div>
  );
}
