import React,{useContext} from "react";
import Card from "./card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { findIndex } from "../../utitlity/arrayindex";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";
import { DashboardContext } from "../../context/DashboardContextComponent";
function Dashboard() {
  let {data,setData}=useContext(UserContext);//use the data using object destructuring
  // console.log(context);
  let {cardData}=useContext(DashboardContext);
  let navigate = useNavigate();
  const handlerDelete=(id)=>{
    let index=findIndex(data,id);
    console.log(index);
    if(index!=-1){
        let newArray=[...data];
        newArray.splice(index,1);
        setData(newArray);
    }
  }
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">
              {cardData.map((e, i) => {
                return <Card data={e} key={i} />;
              })}
            </div>
            <div className="row">
                <div className="col-xl-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  data.map((e,i) => {
                    return <tr key={i}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.mobile}</td>
                      <td>{e.batch}</td>
                      <td>
                        <Button variant="primary" onClick={()=>navigate(`/view-user/${e.id}`)}>Edit</Button>
                        &nbsp;&nbsp;
                        <Button variant="danger" onClick={()=>handlerDelete(e.id)}>Delete</Button>
                      </td>
                    </tr>;
                  })}
                </tbody>
              </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
