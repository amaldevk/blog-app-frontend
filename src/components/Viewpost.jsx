import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBlog from "./NavBlog";

const Viewpost = () => {
    const [data,setData] = new useState([])

    const getData = ()=>{
        axios.get("http://localhost:3001/api/post/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavBlog/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
             {
                data.map(
                    (value,index)=>{
                        return  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                          <div class="card-header">BLOG</div>
                          <div class="card-body">
                            <blockquote class="blockquote mb-0">
                              <p>
                                {value.post}
                              </p>
                              <footer class="blockquote-footer">
                               {value.userId.Name}
                              </footer>
                            </blockquote>
                            <p className="card-text">last updated at {value.postdate}</p>
                          </div>
                        </div>
                      </div>
                    }
                )
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewpost;
