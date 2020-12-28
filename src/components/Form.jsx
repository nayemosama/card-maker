export default function Form({
  companyName,
  setCompanyName,
  name,
  setName,
  title,
  setTitle,
  mobile,
  setMobile,
  email,
  setEmail,
}) {
  return (
    <form style={{ padding: "30px" }}>
      {/* <div className="formInput">
        <label htmlFor="companyName">company name:</label>
        <input
          type="text"
          name="companyName"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />
      </div> */}
      <div className="formInput">
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="formInput">
        <label htmlFor="title">title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="formInput">
        <label htmlFor="email">email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="formInput">
        <label htmlFor="mobile">mobile:</label>
        <input
          type="text"
          name="mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
      </div>
    </form>
  );
}
