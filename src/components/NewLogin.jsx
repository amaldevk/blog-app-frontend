import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewLogin = () => {
    const navigate = useNavigate()
    const [input,setInput] = new useState(
        {
            Email:"",
            Password:""
        }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "invalid user") {
                    alert("invalid email")
                    setInput(
                        {
                            Email:"",
                            Password:""
                        }
                    )
                } else if(response.data.status == "invalid password"){
                    alert("invalid password")
                    setInput(
                        {
                            Email:"",
                            Password:""
                        }
                    )
                }
                else{
                    alert("success")
                    console.log(response.data.userData._id)
                    sessionStorage.setItem("userId",response.data.userData._id)
                    navigate("/add")
                }
            }
        )
    }
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input type="email" className="form-control" name='Email' value={input.Email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password" className="form-control" name='Password' value={input.Password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <Link to='/signup'>New users click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewLogin