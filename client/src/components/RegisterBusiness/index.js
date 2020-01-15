import React from "react";

function RegisterBusiness() {
    return (

        <div className="create_business_registration">
            <h1>Register Your Business</h1>
            <form>
                {/* <div className="form-group">
                    <label>
                        First Name:
                <input type="text" name="fname" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Last Name:
                <input type="text" name="lname" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Title:
                    <input type="text" name="title" />
                    </label>
                </div> */}

                <div className="form-group">
                    <label>
                        Email:
                <input type="email" name="email" />
                    </label>
                </div>


                {/* <div className="form-group">
                    <label>
                        Phone Number:
                <input type="text" name="phoneNumber" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Company Name:
                <input type="text" name="companyName" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Company Website:
                     <input type="text" name="companyWebsite" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Vendor ID:
                    <input type="text" name="vendorID" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        EIN:
                <input type="text" name="ein" />
                    </label>
                </div> */}
                
                <div className="form-group">
                    <label>
                        Password:
                <input type="password" name="lname" />
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form >
        </div>
    );
}
export default RegisterBusiness;
