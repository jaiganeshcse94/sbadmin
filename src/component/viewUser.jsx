import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { findIndex } from '../utitlity/arrayindex';
import { useNavigate,useParams } from 'react-router-dom';

function ViewUser({data,setData}) {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [batch,setBatch] = useState("")
    let {id} = useParams()
    let navigate = useNavigate()
    //useEffect
    //1. Without dependency array - Triggers during the initial rendering and any state change happens
    // useEffect(()=>{
    //     console.log("Without Dependency Array")
    // })

    //2. With Empty Dependancy Array - Triggers only during the initial rendering
    // useEffect(()=>{
    //     console.log("With Empty Dependency Array")
    // },[])    

    //3. With Dependency Array - Triggers during initial rendering and changes of specified state
    // useEffect(()=>{
    //     console.log("With Dependency Array")
    // },[email,batch]) 
    const getData = (id)=>{
        let index = findIndex(data,Number(id))
        if(index!==-1)
        {
            setName(data[index].name)
            setEmail(data[index].email)
            setMobile(data[index].mobile)
            setBatch(data[index].batch)
        }
        else
        {
            console.error(`Invalid Id: ${id}`)
            navigate('/dashboard')
        }
    }
    useEffect(()=>{
        if(id)
        {
            getData(id)
        }
    },[])
    const handleSubmit = ()=>{
        let index = findIndex(data,Number(id))
        let editedData = {id:data[index].id,name,email,mobile,batch}//forming the object

        let newArray = [...data]//deep copy
        newArray.splice(index,1,editedData)//replace the old data with edited data
        setData(newArray)

        navigate('/')

    }
  return <>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
          <h1 className="h3 mb-0 text-gray-800">View User</h1>
        </div>
        <div className='row'>
          <Form>
                 <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
                </Form.Group>
               
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
          </div>
      </div>
    </div>
  </div>
</>
}

export default ViewUser