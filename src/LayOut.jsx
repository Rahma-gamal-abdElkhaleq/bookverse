import { Navbar } from "./component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
export function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}