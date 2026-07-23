import { Navbar } from "./component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}