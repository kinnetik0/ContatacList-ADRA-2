import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal } from "./Modal.jsx"; // Asegúrate de importar el componente Modal

const ContactCard = ({ contact, onDelete, onUpdate }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(contact.id);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    const handleUpdateClick = () => {
        onUpdate(contact);
    };

    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    {/* <img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" /> */}
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className=" float-right">
                        <i
                            className="fas fa-pencil-alt mr-3"
                            style={{ cursor: "pointer" }}
                            onClick={handleUpdateClick}
                        />
                        <i
                            className="fas fa-trash-alt"
                            style={{ cursor: "pointer" }}
                            onClick={handleDeleteClick}
                        />
                    </div>
                    <label className="name lead">{contact.name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{contact.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" />
                    <span className="text-muted small">{contact.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" />
                    <span className="text-muted small">{contact.email}</span>
                </div>
            </div>
            <Modal
                show={showModal}
                title="Confirm Delete"
                message={`Are you sure you want to delete ${contact.name}?`}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </li>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default ContactCard;
