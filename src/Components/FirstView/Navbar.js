import React from 'react'

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg pt-4">
                <div className="container">
                    <a className="navbar-brand" href="www.google.ro">PitWolf</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"><i class="fas fa-chevron-circle-down"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.google.ro">FAQ</a>
                            </li> 
                            <li className="nav-item active">
                                <a className="nav-link" href="www.google.ro">Community</a>
                            </li> 
                            <li className="nav-item active">
                                <a className="nav-link" href="www.google.ro">About Pitwolf</a>
                            </li>   
                            <li className="nav-item active">
                                <a className="nav-link nav-login" href="www.google.ro">Login</a>
                            </li>       
                            <li className="nav-item active">
                                <a className="nav-link nav-register" href="www.google.ro">Register now</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
