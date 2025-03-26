import React from "react";

const Table = ({title , tableData , coloumns}) =>{ 
    console.log(tableData);
    return (
        <div className="row">
            <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">{title}</h6>
                </div>
                </div>
                <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                        <thead>
                            <tr>
                                {coloumns && coloumns.length > 0 && 
                                    coloumns.map((coloumn , index) => {
                                        return(
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{coloumn.title}</th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                    <tbody>
                        {tableData &&  tableData.length > 0 ? 
                            (
                                tableData.map((data ,rowIndex) => {
                                    return (
                                        <tr key={rowIndex}>
                                            {coloumns &&  coloumns.length > 0 && 
                                                coloumns.map((coloumn , coloumnIndex) => {
                                                    return (
                                                        <td key={coloumnIndex} className="align-middle text-center">
                                                            {data[coloumn.field] || "N/A"}
                                                        </td>
                                                    );
                                                })
                                            }
                                        </tr>
                                    );
                                })
                            ):
                            (
                                <tr>
                                    <td className="text-center">
                                        No Data Available
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }

    export default Table;