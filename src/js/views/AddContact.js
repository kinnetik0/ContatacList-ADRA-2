import React from "react";
export function AddContact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 bg-grey">
          <p>Full Name</p>
          <input type="text" className="bg-light col-12"></input>
          <p>Email</p>
          <input type="text" className="bg-light col-12"></input>
          <p>Phone</p>
          <input type="text" className="bg-light col-12"></input>
          <p>Address</p>
          <input type="text" className="bg-light col-12"></input>
          <button type="button" className="btn btn-primary mt-3 col-12">
            Custom button
          </button>
        </div>
      </div>
    </div>
  );
}