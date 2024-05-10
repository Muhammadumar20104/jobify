import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { selectLoginCheck } from "../feature/LoginSlice";

function PrivateRoute() {
  const navigate = useNavigate();
  const isLogedIn = useSelector(selectLoginCheck);
 return (
    <>
    {isLogedIn ? <Outlet/> : <Navigate to={'/signin'}/>}
    </>
    
 )
}

export default PrivateRoute;
