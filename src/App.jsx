import React, { useReducer} from "react";
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
//getting reducer function and initial state from reducer file
import reducer,{initalValue} from "./utitlity/reducer";
function App() {
 let [data,dispatch]=useReducer(reducer,initalValue)
  return  <>
      {/* <!-- Page Wrapper --> */}

      <div id="wrapper">
      <UserContext.Provider value={{ data, dispatch }}>
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
