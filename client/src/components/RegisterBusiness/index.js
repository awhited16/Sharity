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
                        Business Tax ID(EIN or SS#):
                    <input type="text" name="EIN" />
                    </label>
                </div>
                
                <div className="form-group">
                    <label>
                        Business Tax ID(EIN or SS#):
                    <input type="text" name="EIN" />
                    </label>
                </div>
                
                <div className="form-group">
                    <label>
                        Type of Business:
                    <input type="text" name="businessType" />
                    </label>
                        <select name="businessType">
                            <option value="restaurant">Restaurant</option>
                            <option value="caterer">Caterer</option>
                            <option value="farmer">Farmer</option>
                            <option value="event">Events</option>
                        </select>
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
