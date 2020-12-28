import { useState, createRef } from "react";
import "./App.css";

// import Card from "./components/Card";
import Form from "./components/Form";
import ReactPdf from "react-to-pdf";

const ref = createRef();

function App() {
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div>
      <Form
        companyName={companyName}
        setCompanyName={setCompanyName}
        name={name}
        title={title}
        setName={setName}
        setTitle={setTitle}
        mobile={mobile}
        setMobile={setMobile}
        email={email}
        setEmail={setEmail}
      />

      {/* <Card
        ref={ref}
        companyName={companyName}
        name={name}
        title={title}
        mobile={mobile}
        email={email}
      /> */}

      {/* <Card> */}
      <div
        ref={ref}
        style={{
          height: "192px",
          width: "336px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          fontFamily: "Inconsolata",
          fontSize: "10px",
          display: "flex",
          flexFlow: "column-reverse",
        }}
      >
        <div style={{}}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "100",
            }}
          >
            {name || "Jhon Smith"}
          </div>
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#D1D1D1",
              margin: "10px 0",
            }}
          ></div>

          <div style={{}}>{title || "Title"}</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <p>{email || "jhonsmith@gmail.com"}</p>
            </div>

            <div
              style={{ width: "50%", display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  height: "60%",
                  width: "3px",
                  backgroundColor: "#D1D1D1",
                  margin: "0 20px",
                }}
              ></div>
              <div>
                <p>mobile:</p>
                <p>{mobile || "1234567689"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Card> */}

      <ReactPdf targetRef={ref} filename="card.pdf">
        {({ toPdf }) => {
          return (
            <button targetRef={ref} onClick={toPdf}>
              download
            </button>
          );
        }}
      </ReactPdf>
    </div>
  );
}

export default App;
