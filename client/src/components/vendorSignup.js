function registerBusiness() {
 return (
        <div className="create_business_registration">
            <div className="card-header bg-primary text-white">
          <h1>Create account</h1>

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
                Title:
            <input type="text" name="title" value="" />
            </label>
            
            <label>
                Email:
                <input type="text" name="email" value="" />
            </label>
            
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" value="" />
            </label>
            
            <h3> Nonprofit Information</h3>
            <label>
                Company Name:
                <input type="text" name="companyName" value="" />
            </label>
            
            <label>
                Company Website:
            <input type="text" name="companyWebsite" value="" />
            </label>
            
            <label>
                Vendor ID:
                <input type="text" name="vendorID" value="" />
            </label>
            
            <label>
                Password:
                <input type="text" name="password" value="" />
            </label>

            <label>
                EIN:
                <input type="text" name="ein" value="" />
            </label>

            <label>
                   Company Address:
                   <input type="text" name="street" value="" />
                   <input type="text" name="city" value="" />
                   <input type="text" name="state" value="" />
                   <input type="text" name="zip" value="" />
                   <input type="text" name="country" value="" />
               </label>
               
               <label>
                   Will any items require refigeration?
                   <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                   </select>
               </label>
               
               <div>
                   What catagory of food will you be donating?
                   
                    <input type="checkbox" id="produce" name="produce"><label for="produce">Produce</label></input>
                    <input type="checkbox" id="dairy" name="dairy"><label for="dairy">Dairy</label></input>
                    <input type="checkbox" id="meat" name="meat"><label for="meat">Meat</label></input>
                    <input type="checkbox" id="grain" name="grain"><label for="grain">Grain</label></input>
                    <input type="checkbox" id="cannedItems" name="cannedItems"><label for="cannedItems">Canned Items</label></input>
                    <input type="checkbox" id="boxedItems" name="boxedItems"><label for="boxedItems">Boxed Items</label></input>
                    <input type="checkbox" id="other" name="other"><label for="other">Other</label></input>
               </div>

               <label>
                   Do you have anyone on your team that can dropoff the food order?
                   <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                   </select>
               </label>

        </form>  
            <button 
              type="submit" 
              className="button button_wide">
              CREATE ACCOUNT
            </button>
      
        </div> 
        </div>
      );
    
}

  
  export default Form;
      