import { useContext } from "react";
import { DataContext } from '../App.jsx';
import {useNavigate} from 'react-router-dom';
const Data=()=>{
    const context=useContext(DataContext)
    const navigate=useNavigate()
    return(
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
            {context.entries.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.FullName}</td>
                  <td>
                    <a href={item.File}>{item.File}</a>
                  </td>
                  <td>{item.Technology+','}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={()=>navigate(-1)} className="back-btn">
          Back
        </button>
      </div>
    )
}
export default Data;