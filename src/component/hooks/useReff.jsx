import React, { useEffect, useRef, useState } from 'react'

function UseReff() {
    let count = useRef(0);
    let ref1=useRef();
    let ref2=useRef();
    let ref3=useRef();
    let ref4=useRef();
    let[input,setInput]=useState("");
    useEffect(()=>{
      ref1.current.focus();
      count.current+=1;
    })
    const handleSubmit=()=>{

    }
    const verify=(key)=>{
      if(key>='0' && key<="9"){
        return true;
      }
      else{
        return false;
      }
    }
  return <>
  <div className="container">
    <div className="row">
        <label>Name</label>
        <input type="text" maxLength="1" className='col-4' onChange={(e)=>setInput(e.target.value)}/>
    </div>
    <div className="row">
        <p>The enter Input is {input}</p>
        <p>The component render count {count.current}</p>
    </div>
    <div className="row">
      <input type="number" maxLength="1" className="col-3" ref={ref1} onKeyUp={(e)=>{
        if(verify(e.key))
          ref2.current.focus();
      }}/>
      <input type="number" maxLength="1" className="col-3" ref={ref2} onKeyUp={(e)=>{
        if(verify(e.key))
          ref3.current.focus();
      }} onKeyDown={(e)=>{
        if(ref2.current.value==="" && e.key=="Backspace"){
          ref1.current.focus();
          }}
        }/>
      <input type="number" maxLength="1" className="col-3" ref={ref3} onKeyUp={(e)=>{
        if(verify(e.key))
          ref4.current.focus();
      }} onKeyDown={(e)=>{
        if(ref3.current.value==="" && e.key=="Backspace"){
          ref2.current.focus();
          }}
        }/>
      <input type="number" maxLength="1" className="col-3" ref={ref4} onKeyUp={()=>handleSubmit()} onKeyDown={(e)=>{
      if(ref4.current.value==="" && e.key=="Backspace"){
        ref3.current.focus();
        }}
      }/>
    </div>
  </div>
  </>
}

export default UseReff