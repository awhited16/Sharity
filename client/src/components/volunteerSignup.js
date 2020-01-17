<form className="form">
<h2>Contact Information</h2>
    <label>
        First Name:
        <input type="text" name="firstName" value=""/>
    </label>
            
    <label>
        Last Name:
        <input type="text" name="lastName" value=""/>
    </label>
    <label>
        Email:
        <input type="text" name="email" value="" />
    </label>
            
    <label>
        Phone Number:
        <input type="text" name="phoneNumber" value="" />
    </label>

    <label>
        Address:
        <input type="text" name="street" value="" />
        <input type="text" name="city" value="" />
        <input type="text" name="state" value="" />
        <input type="text" name="zip" value="" />
        <input type="text" name="country" value="" />
    </label>
    
    <h3>Volunteer Information</h3>      
    <label>
        What is the name of the organization you are affiliated with? ex.
        <select>
        <option value="nonprofit">Nonprofit</option>
        <option value="university">School or University</option>
        <option value="church">Church or Religious Organization</option>
        <option value="business">Business</option>
        <option value="other"></option>
        </select>
    </label>
    <label>
        Organization Name:
        <input type="text" name="organizationName" value=""/>

    </label>
    <label>
        Organization Address:
        <input type="text" name="organizationStreet" value="" />
        <input type="text" name="organizationCity" value="" />
        <input type="text" name="organizationState" value="" />
        <input type="text" name="organizationZip" value="" />
        <input type="text" name="organizationCountry" value="" />
    </label>
    
    <label>
        What type of vehicle will you use to donate food?
        <select>
        <option value="car">Car</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="van">Van</option>
        <option value="truck">Truck or Suburban</option>
        </select>
    </label>
    
    <label>
        What time of day are you available to deliver?
        <select>
        <option value="morning">Morning (5am to 11am) </option>
        <option value="afternoon">Afternoon (11am to 5pm)</option>
        <option value="evening">Evening (5pm to 12am)</option>
        </select>
    </label>
    <label>
        Can vendor and/or nonprofit contact you to schedule pick up?
        <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
    </label>
        
</form>