import '../stylesheets/signInSheet.css';

const signIn = () => {

    
    const handleSubmit = async(event) => {
        event.preventDefault();
    }

    return (
        <div className='registration'>
            <div className="registration_container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input 
                            type="text" 
                            id="form2Example1"  
                            className="form-control" 
                            autoComplete='off' 
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input 
                            type="email" 
                            id="form2Example1" 
                            className="form-control" 
                            autoComplete='off' 
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input 
                            type="password" 
                            id="form2Example2" 
                            className="form-control" 
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input 
                            type="password" 
                            id="form2Example2" 
                            className="form-control" 
                            required
                        />
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-block mb-4">
                            Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default signIn;