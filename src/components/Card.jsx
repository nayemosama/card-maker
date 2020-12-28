export default function Card({ companyName, name, title, email, mobile, ref }) {
  return (
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

          <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
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
  );
}
