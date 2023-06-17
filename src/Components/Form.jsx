import "../App.css";
import { useState ,useEffect} from "react";

function Form() {
  const [userData, setUserData] = useState({
    Name: '',
    File: '',
    Technology: ''
  });
  const [tech, setTech] = useState([]);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(()=>{

  },[tech,userData])
  // which is to take input text values
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // which is to take input CheckBox values
  const onChangeBox = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked == true) {
      setTech([...tech,value]);
    } else {
      setTech(tech.filter((e) => e !== value));//am checking not checked values from checked values
    }
  };
  //onsubmitting form getting to the next section
  const onSubmit = (e) => {
    e.preventDefault();
    const one=new Set(tech)
    console.log(one)
    const newObj = {
      Name: userData.Name,
      File: userData.File,
      Technology:one
    };
    setData([...data, newObj]);
    setToggle(false);
    console.log(data);
  };

  return (
    <div id="body">
      {toggle ? (
        <div id="head">
          <div id="form">
            <div id="title">STAFFING SYSTEM</div>
            <form
              onSubmit={onSubmit}
              className="hidden"
              encType="multipart/form-data"
            >
              <div className="each-input">
                <label htmlFor="Name">Full Name </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Enter Name"
                  onChange={onChange}
                  className="input"
                  required
                />
              </div>
              <div className="each-input">
                <label>Resume Upload </label>
                <input type="file" name="File" onChange={onChange} required />
              </div>
              <div className="each-input">
                <div>Technology</div>
                <div className="head1">
                  <label htmlFor="HTML">
                    <input
                      type="checkbox"
                      value="HTML"
                      onChange={onChangeBox}
                    />
                    HTML
                  </label>
                  <label htmlFor="CSS">
                    <input type="checkbox" value="CSS" onChange={onChangeBox} />
                    CSS
                  </label>
                  <label htmlFor="REACT-JS">
                    <input
                      type="checkbox"
                      value="REACT-JS"
                      onChange={onChangeBox}
                    />
                    REACT-JS
                  </label>
                  <label htmlFor="NODE-JS">
                    <input
                      type="checkbox"
                      value="NODE-JS"
                      onChange={onChangeBox}
                    />
                    NODE-JS
                  </label>
                </div>
              </div>
              <div className="head">
                <button type="submit">Submit</button>
                <button type="reset">Clear</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div id="body">
          <div id="title">STAFFING SYSTEM UPLOADED LIST</div>
          <table border="2" width="80%" bgcolor="black">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Full-Name</th>
                <th>Uploaded File</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody align="center">
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>
                      <a href={item.File}>{item.File}</a>
                    </td>
                    <td>{item.Technology}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={() => setToggle(true)} className="back-btn">
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
