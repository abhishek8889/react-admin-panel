import React from "react";
import AdminLayout from './AdminLayout';

const PageLayout = ({ title , subTitle , children }) => {
    return (
        <AdminLayout>
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
        </AdminLayout>
    );
}

export default PageLayout;