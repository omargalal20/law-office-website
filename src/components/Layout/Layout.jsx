import { Outlet } from "react-router-dom"
import Footer from "./Footer/footer"
import { Suspense } from "react"

export default function Layout() {
    return (
        <>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}