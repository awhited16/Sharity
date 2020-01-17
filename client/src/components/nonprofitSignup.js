function registerNonprofit() {
    return (
            <div className="create_business_registration">
               <div className="card-header bg-primary text-white">
            <h1><strong>Create account</strong></h1>

            <form> 
            <h2>Contact Information</h2>
               <label>
                   First Name:
                   <input type="text" name="firstName" value=""/>
               </label>
               
               <label>
                   Last Name:
                   <input type="text" name="lastName" value={this.state.lastName}/>
               </label>
               
               <label>
                   Title:
               <input type="text" name="title" value=""/>
               </label>
               
               <label>
                   Email:
                   <input type="text" name="email" value=""/>
               </label>
               
               <label>
                   Phone Number:
                   <input type="text" name="phoneNumber" value=""/>
               </label>
              
              <h3> Nonprofit Information</h3>
               <label>
                   Company Name:
                   <input type="text" name="companyName" value=""/>
               </label>
               
               <label>
                   Company Website:
               <input type="text" name="companyWebsite" value="" />
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
                   Do you have anyone on your team that can pickup the food order?
                   <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                   </select>
               </label>
               <div>
                   What types of food do you need for your orgainzation?
                   
                    <input type="checkbox" id="produce" name="produce"><label for="produce">Produce</label></input>
                    <input type="checkbox" id="dairy" name="dairy"><label for="dairy">Dairy</label></input>
                    <input type="checkbox" id="meat" name="meat"><label for="meat">Meat</label></input>
                    <input type="checkbox" id="grain" name="grain"><label for="grain">Grain</label></input>
                    <input type="checkbox" id="cannedItems" name="cannedItems"><label for="cannedItems">Canned Items</label></input>
                    <input type="checkbox" id="boxedItems" name="boxedItems"><label for="boxedItems">Boxed Items</label></input>
                    <input type="checkbox" id="other" name="other"><label for="other">Other</label></input>
               </div>
               
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