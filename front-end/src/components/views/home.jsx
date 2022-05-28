import React from 'react'
import Link from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const home = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to=''>Baroland</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="form-inline my-2 my-lg-0">
                        <ul>
                            <li classNameName='nav-item'>
                                <Link to=''>
                                    {/* user_email */}
                                </Link>
                            </li>
                            <li classNameName='nav-item'>
                                <Link to=''>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}

export default home;