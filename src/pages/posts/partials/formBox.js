import React, { useState } from "react";


const FormBox = ({title}) => {

    const [formData, setFormData] = useState({
       
        email: '',
        password: '',
        address : ''
    });

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value, 
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
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
                        <form class="p-4"  onSubmit={handleSubmit}>
                            <input type="hidden" name="url" value="http://localhost:3000/submit-form"/>
                            <div class="form-row ">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={handleOnChange} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" name="address" placeholder="1234 Main St" onChange={handleOnChange} />
                            </div>
                            <button type="submit"  class="btn bg-dark text-white mt-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormBox;