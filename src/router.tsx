import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/startPage"

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
