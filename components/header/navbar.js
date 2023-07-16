import Link from 'next/link'
import React from 'react'
import { auth } from '../../lib/firebase'
import { useRouter } from 'next/router'

function Navbar() {
const router = useRouter();

    const signOut = () => {
        auth.signOut().then(() => {
            router.push("/");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
    
            <nav className="navbar bg-body-tertiary fixed-top dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#"> Verifile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Verifile</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/dashboard_i">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/upload">Upload</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-dark btn-md" onClick={signOut}>Sign Out</button>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar