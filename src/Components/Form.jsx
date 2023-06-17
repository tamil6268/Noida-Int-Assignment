import "../App.css";
import { useState} from "react";
import {useContext} from 'react';
import { DataContext } from "../App";
import {useNavigate} from 'react-router-dom';
function Form() {
    const context=useContext(DataContext);
    const navigate=useNavigate();
    const [inputData, setInputdata] = useState({
        FullName: "",
        File:"",
        Technology:[]
    });
  const [inputStore,setInputstore] =useState([]);
  const [tech,setTech] =useState([]);
  // which is to take input text values
  const changeHandle = (e) => {
      setInputdata({ ...inputData, [e.target.name]: e.target.value })
  }
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
  inputData.Technology=tech;//adiing the technologies
  let {FullName,File,Technology}=inputData;
  //onsubmitting form getting to the next section
    const onSubmit = () => {
        setInputstore([...inputStore,{FullName,File,Technology}])
        console.log(inputData)
        setInputdata({FullName:"",File:"",Technology:[]})
            context.entries.push(inputData)
            navigate('/data')
    }
  return (
    <div id="body">
        <div id="head">
        <div id="form">
          <div id="title">STAFFING SYSTEM</div>
          <form
            className="hidden"
            encType="multipart/form-data"
          >
            <div className="each-input">
              <label htmlFor="FullName">Full Name </label>
              <input
                type="text"
                name="FullName"
                id="FullName"
                placeholder="Enter FullName"
                onChange={changeHandle}
                className="input"
                required
              />
            </div>
            <div className="each-input">
              <label>Resume Upload </label>
              <input type="file" name="File" onChange={changeHandle} required />
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
              <button type="submit" onClick={onSubmit}>Submit</button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
        </div> 
    </div>
  );
}

export default Form;
