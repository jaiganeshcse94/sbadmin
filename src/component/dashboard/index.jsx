import React from "react";
import Card from "./card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { findIndex } from "../../utitlity/arrayindex";
import { useNavigate } from 'react-router-dom';

function Dashboard({ data, setData }) {
  let cardData = [
    {
      title: "Earnings Monthly",
      value: "$ 40,000",
      color: "primary",
      icon: "calendar",
      isProgress: false,
    },
    {
      title: "Earnings Annual",
      value: "$ 215,000",
      color: "success",
      icon: "dollar-sign",
      isProgress: false,
    },
    {
      title: "Task",
      value: "50",
      color: "info",
      icon: "clipboard-list",
      isProgress: true,
    },
    {
      title: "Pending Requests",
      value: "18",
      color: "warning",
      icon: "comments",
      isProgress: false,
    },
  ];
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
