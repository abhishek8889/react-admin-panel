import React from "react";

const TableHeader = ({ coloumns }) => {
    return (
        <>
        <thead>
            <tr>
                {coloumns.map((coloumn) => {
                    return (
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{coloumn}</th>
                    )
                })}
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                <th className="text-secondary opacity-7"></th>
            </tr>
        </thead>
        </>
    );
}

export default TableHeader;