import { Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/dashboard';
const RouterComp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
} 

export default RouterComp;