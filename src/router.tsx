import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/start/startPage"
import LoginPage from "./pages/start/loginPage"
import SignupPage from "./pages/start/signupPage"
import ScrollTop from "./scroll"
import MainPage from "./pages/mainPage"
import KeyPage from "./pages/start/KeyPage"

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
                    <Route path="/key" element={<KeyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
