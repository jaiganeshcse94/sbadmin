import React, { useState } from "react";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/dashboard";
import AddUser from "./component/addUser";
import ViewUser from "./component/viewUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  let [data,setData]=useState([
    {
      id:1,
      name:"jai",
      email:"jai@gmail.com",
      mobile:"9484484321",
      batch:""
    },
    {
      id:2,
      name:"raj",
      email:"raj@gmail.com",
      mobile:"9488884321",
      batch:""
    },
    {
      id:3,
      name:"vijay",
      email:"vijay@gmail.com",
      mobile:"9444484321",
      batch:""
    },
    {
      id:4,
      name:"ajith",
      email:"ajith@gmail.com",
      mobile:"9410484321",
      batch:""
    }

  ]);
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard data={data} setData={setData}/>}></Route>
            <Route path="/add-user" element={<AddUser data={data} setData={setData}/>}></Route>
            <Route path="/view-user/:id" element={<ViewUser data={data} setData={setData}/>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
