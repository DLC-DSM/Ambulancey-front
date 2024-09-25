import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/startPage"
import LoginPage from "./pages/loginPage"
import SignupPage from "./pages/signupPage"
import ScrollTop from "./scroll"

function Router() {
    return (
        <>
            <BrowserRouter>
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
