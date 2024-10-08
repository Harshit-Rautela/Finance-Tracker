import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { Link, useNavigate } from "react-router-dom";
import getUserDetails from "../services/HomeApi";
const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
        }
        const userData = await g22ztUserDetails(token);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate("/login");
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="home">
      <div className="container">
        {user ? (
          <>
            <h1>Welcome, {user.name}</h1>
            <p>Your email is: {user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <Link to="/payment-details">
          <button>Want to pay</button>
        </Link>
      </div>
      <div className="table-div">
        <table className="table">
          <caption>Sample Table</caption>
          <thead className="thead">
            <tr>
              <th className="th">Header 1</th>
              <th className="th">Header 2</th>
              <th className="th">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">Row 1, Cell 1</td>
              <td className="td">Row 1, Cell 2</td>
              <td className="td">Row 1, Cell 3</td>
            </tr>
            <tr>
              <td className="td">Row 2, Cell 1</td>
              <td className="td">Row 2, Cell 2</td>
              <td className="td">Row 2, Cell 3</td>
            </tr>
            <tr>
              <td className="td">Row 3, Cell 1</td>
              <td className="td">Row 3, Cell 2</td>
              <td className="td">Row 3, Cell 3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Footer content</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
