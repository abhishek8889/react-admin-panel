import React from "react";
import { Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/dashboard';
import Posts from './pages/posts';
import CreateNewPost from './pages/posts/create-new';
import Settings from './pages/settings';
import Users from "./pages/users";

const RouterComp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route exact path="/:prefix?/create-new" element={<CreateNewPost />} />
            {/* Users */}
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default RouterComp;