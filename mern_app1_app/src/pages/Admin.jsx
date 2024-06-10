import React from "react";

function Admin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 card me-2">
          <div className="mt-2 fs-2">Radhe Radhe Admin</div>
          <hr />
          <div>
            <ul className="fs-4">
              <li>Admin Profile</li>
              <li>Users</li>
              <li>Queries</li>
              <li>Books</li>
            </ul>
          </div>
        </div>
        <div className="col-8 card"></div>
      </div>
    </div>
  );
}

export default Admin;
