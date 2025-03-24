import React from "react";

const DashboardCard = ({title , subTitle , icon , cardFooter , cardFooterText}) => {
    return (
        <>
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-header p-2 ps-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            {subTitle && <p className="text-sm mb-0 text-capitalize">{subTitle}</p>}
                            {title && <h4 className="mb-0">{title}</h4>}
                        </div>
                        {icon && (
                           <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                            {icon}
                            </div>
                        )}
                    </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-2 ps-3">
                    {cardFooter && (
                        <p className="mb-0 text-sm">
                            {cardFooter}
                            {cardFooterText}
                        </p>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default DashboardCard;