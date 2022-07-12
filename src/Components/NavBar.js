
import "../css/navbar.css";

import { FaCloudversify } from 'react-icons/fa';
import {Link} from "react-router-dom"
export default function NavBar() {
    return (
      <div className="container-fluid main_menu">
        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    <Link className="navbar-brand" to="/">MONsoon
                    <FaCloudversify className="fa-cloudversify"/>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">Weather</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    )
}