import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import WalletRevert from "./Views/Home";
// import ModLogin from "./Views/Login";
// import "./WalletRevert.css";
import "./tabledata.css";



// function authUser() {
//   const [user, serUser] = useState([]);
//   useEffect(() => {
//     apiAuth();
//   }, [])
// }

// function App() {
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route exact path="/login" component={ModLogin} />
//       <Route exact path="/" component={WalletRevert}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

function WalletRevert() {
  const handleInputChange = (e) => {
    
    let target = e.target.id;
    setMCUser({...mcuser, [target]: e.target.value});
  }
  const [mcuser, setMCUser] = useState({
    totalAmount:0
    
  }); 

  const [data, getData] = useState([]);
  const URL = `https://adminapis.linkdedo.com/og-transactions?uname=`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(mcuser);
    fetch(URL + mcuser.username)
  
      .then((res) => res.json())
      
      .then((response) => {
        console.log(response);
        var totalAmount =0
        for(var i = 0; i < response.length; i++){
          totalAmount = totalAmount + response[i].amt
          response[i].totalAmount= totalAmount;
          
        }
        setMCUser({...mcuser, [`totalAmount`]: totalAmount});
        getData(response);
      //   console.log(response.amt);
      // console.log(typeof parseInt(response.amt), parseInt(response.amt))
    });
   
    
  };
  
  return (
    <>
      {/* <h1>How to display JSON data to table in React JS</h1> jaymin9900
        request body:
{
    "uname": "jaymin9900",
    "wid": "158511"
}

If clicked on single revert button
       */}
      <div className="hero">
        <div className="revert-all">
          <div>
            <input type="text" placeholder="Enter MC Username" id="username" onChange={e => handleInputChange(e)} />
            <input type="submit" value="Search" onClick={fetchData} /> 
          </div>
          <button className="revertall">Revert {mcuser.totalAmount} </button>
        </div>
        <div className="table">
          <tbody>
            <tr>
              <th>Withdrawal ID</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Done</th>
              <th>Type</th>
              <th>Total Amount</th>
              <th>Revert</th>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.wid}</td>
                <td>{item.user}</td>
                <td>{item.amt}</td>
                <td>{item.date}</td>
                <td>{item.done}</td>
                <td>{item.type}</td>
                <td>{item.totalAmount}</td>
                <td>
                  <button className="revert">Revert Tx.</button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </>
  );
}

export default WalletRevert;