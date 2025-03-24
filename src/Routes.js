import React from "react";
import { Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/dashboard';
import Posts from './pages/posts/index';
import CreateNewPost from './pages/createnewpost';
import Settings from './pages/settings';
const RouterComp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route exact path="/:prefix?/create-post" element={<CreateNewPost />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
} 

export default RouterComp;