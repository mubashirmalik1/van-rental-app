import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
export default function Layout() {
    /**
     * Challenge: get the Header working again
     * outlet is same as section or yield in laravel
     */
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}