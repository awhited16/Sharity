
import React, { Component } from 'react'



export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
} 

export function TextArea(props) {
    return (
        <div className="form-group">
        <textarea className="form-control" rows="4" {...props} />
        </div>
    );
}

export function Select(props) {
    return (
        <div className="form-group">
        <select className="form-control" {...props}>
            <option value="Storage Requirements">Storage Requirements</option>
            <option value="Frozen">Frozen</option>
            <option value="no">Refrigerator</option>
            <option value="no">Dry</option>
            <option value="no">Canned</option>
            <option value="no">Fresh Produce</option>
            <option value="no">Prepared Food</option>
        </select>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
        </button>
    );
}

 class DonationSubmissionForm extends Component {
    render() {
        return (
             <div className="donationSubmission">
                <h1>Tell Us About Your Donation</h1>
                    <form>
                    <div className="form-group">
                     <label>
                             Food Item Description:
                         <input type="text" name="foodDescription" />                         </label>
                   </div>

                     <div className="form-group">
                         <label>
                             Amount:
                             <input type="text" name="amount" />
                         </label>
                     </div>

                    <div className="form-group">
                         <label>
                             Any comments about this donation?:
                         <input type="text" name="comments" />
                         </label>
                  </div>

                     <div className="form-group">
                         <label>
                             Storage Requirements:
                             <select>
                                <option value="yes">Freezer</option>
                                 <option value="no">Refrigerator</option>
                                 <option value="no">Dry</option>
                                 <option value="no">Canned</option>
                                <option value="no">Fresh Produce</option>
                                 <option value="no">Prepared Food</option>
                             </select>
                         </label>
                     </div>

                     <div className="form-group">
                         <label>
                             Dollar  Value:
                     <input type="text" name="value" />
                         </label>
                    </div>

                     <div className="form-group">
                         <label>
                             Deadline for Pickup:
                     <input type="text" name="deadline" />
                         </label>
                     </div>

                     <button type="submit" class="btn btn-primary">Submit</button>
               </form >

             </div>
         );
     }
 }
export default DonationSubmissionForm;
