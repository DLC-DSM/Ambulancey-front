import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/startPage"
import LoginPage from "./pages/loginPage"

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
