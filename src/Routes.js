import React from "react";
import { Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/dashboard';
import Posts from './pages/posts';
import CreateNewPost from './pages/posts/create-new';
import Settings from './pages/settings';
const RouterComp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route exact path="/:prefix?/create-new" element={<CreateNewPost />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
} 

export default RouterComp;