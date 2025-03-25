import React, { useState } from "react";
import {submitForm} from "../../../utils/formHandling";

const FormBox = ({title}) => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address : '',
        image : ''
    });

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value, 
        }));
    }

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.files[0], 
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiObj  = {
            url: `${process.env.REACT_APP_API_ENDPOINT}check-first`,
            method: 'post',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            successBox: '#successBox',
            data: formData
        }
        submitForm(apiObj);
    }

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
                        <form class="p-4" onSubmit={handleSubmit}>
                            <div class="form-row ">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={handleOnChange} />
                                     <div class="text text-danger text-sm my-2 error-message" style={{display: "none"}}></div>
                                </div>
                                <div class="form-group col-md-6 mt-3">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" onChange={handleOnChange} />
                                    <div class="text text-danger text-sm my-2 error-message" style={{display:"none"}}></div>
                                </div>
                            </div>
                            <div class="form-group col-md-6 mt-3">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" name="address" placeholder="1234 Main St" onChange={handleOnChange} />
                                <div class="text text-danger my-2 text-sm error-message" style={{display:"none"}}></div>
                            </div>

                            <div class="form-group col-md-6 mt-3">
                                <label for="inputImg">Upload Image</label>
                                <input type="file" class="form-control" id="inputImg" name="image"  onChange={handleFileChange} />
                                <div class="text text-danger my-2 text-sm error-message" style={{display:"none"}}></div>
                            </div>

                            <button type="submit"  class="btn bg-dark text-white mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormBox;