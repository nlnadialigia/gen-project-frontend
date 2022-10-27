import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormSignUp } from "./pages/FormSignUp";
import { FormLogin } from "./pages/FormLogin";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormLogin />}/>
                <Route path="/singup" element = {<FormSignUp />} />
            </Routes>
        </BrowserRouter>
    )
}