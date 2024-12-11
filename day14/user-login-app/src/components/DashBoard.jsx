import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const DashBoard = ({ regDash }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Header Section */}
        <div
          className="col-12 text-center py-4 mb-4"
          style={{
            backgroundColor: "#f8b3d0", // Soft pink
            color: "#4f2c7f", // Purple text
            borderRadius: "8px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Dashboard</h1>
        </div>

        {/* Logout Button */}
        <div className="col-sm-4 mb-3">
          <div
            className="card shadow-sm text-center"
            style={{
              backgroundColor: "black",
              color: "wheat",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <h3>
              <Link
                to="/logout"
                style={{
                  color: "wheat",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Logout
              </Link>
            </h3>
          </div>
        </div>

        {/* Welcome Section */}
        <div
          className="col-12 text-center py-4 mb-4"
          style={{
            backgroundColor: "#f0e68c", // Soft yellow
            color: "#2a5d84", // Teal text
            borderRadius: "8px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Welcome, {regDash.name || "Guest"}
          </h2>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
            Email: {regDash.email || "Not provided"}
          </h3>
        </div>

        {/* User Profile Section */}
        <div className="col-12 mb-4">
          <div
            className="card border-0 shadow-lg"
            style={{
              backgroundColor: "#ffddc1", // Light peach color
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.6rem", color: "#ff6f61" }}>
                User Profile
              </h5>
              <p className="card-text" style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                <strong>Name:</strong> {regDash.name || "Not provided"}<br />
                <strong>Email:</strong> {regDash.email || "Not provided"}<br />
                <strong>Role:</strong> {regDash.role || "User"}
              </p>
              <button
                className="btn btn-outline-primary btn-lg"
                style={{
                  borderRadius: "20px",
                  padding: "8px 25px",
                  fontSize: "1.1rem",
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats and Quick Actions Section */}
        <div className="col-12 mb-4">
          <div className="row">
            {/* Stats Card */}
            <div className="col-12 col-md-6 mb-4">
              <div
                className="card border-0 shadow-lg"
                style={{
                  backgroundColor: "#ffddc1", // Light peach color
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.6rem", color: "#ff6f61" }}>
                    Dashboard Stats
                  </h5>
                  <ul style={{ fontSize: "1.2rem" }}>
                    <li>Active Users: 350</li>
                    <li>Total Orders: 1,200</li>
                    <li>Pending Tasks: 18</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-5 mb-4">
              <div
                className="card border-0 shadow-lg"
                style={{
                  backgroundColor: "#f0e68c", // Soft yellow
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.6rem", color: "#2a5d84" }}>
                    Quick Links
                  </h5>
                  <ul style={{ fontSize: "1.2rem" }}>
                    <li>
                      <a href="#" style={{ color: "#2a5d84", textDecoration: "none" }}>
                        Manage Account
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#2a5d84", textDecoration: "none" }}>
                        View Reports
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "#2a5d84", textDecoration: "none" }}>
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="col-12 text-center py-4">
          <button
            className="btn btn-lg btn-outline-success"
            style={{
              borderRadius: "20px",
              fontSize: "1.3rem",
              padding: "12px 30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            Perform Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
