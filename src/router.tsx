import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/startPage"
import LoginPage from "./pages/loginPage"
import SignupPage from "./pages/signupPage"
import ScrollTop from "./scroll"
import MainPage from "./pages/mainPage"

function Router() {
    return (
        <>
            <BrowserRouter>
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
