import React from "react";
import AdminLayout from './AdminLayout';
import { ToastContainer } from 'react-toastify';

const PageLayout = ({ title , subTitle ,breadcrumbs,children }) => {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <div className="row">
                <div className="ms-3">
                    <h3 className="mb-0 h4 font-weight-bolder">{ title }</h3>
                    <p className="mb-4">
                    {subTitle}
                    </p>
                </div>
                {/* Render the passed content */}
                {children}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </AdminLayout>
    );
}

export default PageLayout;