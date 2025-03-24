import React from "react";

const Table = ({title}) =>{ 
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
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                        <th className="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex px-2 py-1">
                                <div>
                                    <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6"/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                    <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">Programator</p>
                                <p className="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td className="align-middle">
                                <div class="dropdown">
                                    <a class="dropdown-toggle text-secondary font-weight-bold text-xs " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex px-2 py-1">
                                <div>
                                    <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6"/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                    <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">Programator</p>
                                <p className="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td className="align-middle">
                                <div class="dropdown">
                                    <a class="dropdown-toggle text-secondary font-weight-bold text-xs " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex px-2 py-1">
                                <div>
                                    <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6"/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                    <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">Programator</p>
                                <p className="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-warning">Offline</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td className="align-middle">
                                <div class="dropdown">
                                    <a class="dropdown-toggle text-secondary font-weight-bold text-xs " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex px-2 py-1">
                                <div>
                                    <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6"/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                    <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">Programator</p>
                                <p className="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-success">Offline</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td className="align-middle">
                                <div class="dropdown">
                                    <a class="dropdown-toggle text-secondary font-weight-bold text-xs " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
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