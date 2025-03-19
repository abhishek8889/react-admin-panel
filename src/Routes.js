import { Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/dashboard';
import Posts from './pages/posts';
const RouterComp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    )
} 

export default RouterComp;