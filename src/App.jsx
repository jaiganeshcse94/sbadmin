import React, { useState } from "react";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/dashboard";
import AddUser from "./component/addUser";
import ViewUser from "./component/viewUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NestedExample from "./NestedExample";
import Profile from "./NestedExample/profile";
import Settings from "./NestedExample/settings";
import Feed from "./NestedExample/feed";
export const UserContext=React.createContext()//creating context
import DashboardContextComponent from "./context/DashboardContextComponent";
import UseReff from "./component/hooks/useReff";
import UseReducer from "./component/hooks/useReducer";
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
  return  <>
      {/* <!-- Page Wrapper --> */}

      <div id="wrapper">
      <UserContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardContextComponent><Dashboard/></DashboardContextComponent>}/>
            <Route path="/add-user" element={<AddUser />}/>
            <Route path="/view-user/:id" element={<ViewUser />}/>
            <Route path='/nested-example' element={<NestedExample/>}>
              <Route path='profile' element={<Profile/>}/> 
              <Route path='settings' element={<Settings/>}/>
              <Route path='feed' element={<Feed/>}/>
            </Route>
            <Route path="/hooks/usereff" element={<UseReff />}/>
            <Route path="/hooks/usereduce" element={<UseReducer />}/>
            {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
      </div>
    </>
}

export default App;
