import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleCreateNewContact = () => {
        navigate("/add-contact");
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2" to="/">
                    Contact List
                </Link>
                <div className="ml-auto">
                    <button
                        className="btn btn-primary"
                        onClick={handleCreateNewContact}
                    >
                        Create New Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};
