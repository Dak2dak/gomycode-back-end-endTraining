import '../stylesheets/connexionSheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const connexion = () => {
    
    const handleSubmit = async(event) => {
        event.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button 
                    type="button" 
                    className="btn btn-primary btn-block mb-4">
                        Sign in
                </button>
                <div className="text-center">
                    <p>Not a member yet? <Link to ="/signin">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default connexion; 