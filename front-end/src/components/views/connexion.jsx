import React from 'react';
import '../stylesheets/connexionSheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const connexion = () => {
    
    return (
        <div>
            <form>
                    {/* Email input  */}
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>
                    {/* Password input  */}
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />
                </div>
                    {/* Submit button  */}
                <button 
                    type="button" 
                    className="btn btn-primary btn-block mb-4">
                        Sign in
                </button>
                    {/* Register buttons */}
                <div className="text-center">
                    <p>Not a member yet? <a href="#!">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default connexion;