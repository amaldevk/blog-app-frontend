import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [input,setInput] = new useState(
        {
            Name:"",
            Age:"",
            Mobile:"",
            Address:"",
            Pincode:"",
            Email:"",
            Password:""
        }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("").then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("registration successful")
                    navigate("/")
                } else {
                    alert("something went wrong...")
                    setInput(
                        {
                            Name:"",
                            Age:"",
                            Mobile:"",
                            Address:"",
                            Pincode:"",
                            Email:"",
                            Password:""
                        }
                    )
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="Age" value={input.Age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phone</label>
                            <input type="text" className="form-control" name="Mobile" value={input.Mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="Address" value={input.Address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" name="Pincode" value={input.Pincode} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" value={input.Email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <Link to='/'>Back to login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp