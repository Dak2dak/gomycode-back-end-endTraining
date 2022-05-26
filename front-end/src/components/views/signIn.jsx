import React from 'react'

const signIn = () => {

    return (
        <div>
            <h6>Register</h6>
            <form>
                    {/* Name input  */}
                <div className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control" />
                    <label className="form-label" for="form2Example1">Name</label>
                </div>
                    {/* Email input  */}
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" for="form2Example1">Email address</label>
                </div>
                    {/* Password input  */}
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>
                    {/* Confirm Password */}
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>
                    {/* Submit button  */}
                <button 
                    type="button" 
                    className="btn btn-primary btn-block mb-4">
                        Sign up
                </button>
                    {/* column grid layout for inline styling */}
                <div className="row mb-4">
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                    {/* Register buttons */}
                <div className="text-center">
                    <p>Wanna sign up in a different way? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button 
                        type="button" 
                        className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default signIn