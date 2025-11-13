import { useState, useEffect } from "react";
import "./App.css";
import api from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUserId) {
        await api.put(`/api/users/${editingUserId}`, formData);
        setEditingUserId(null);
      } else {
        await api.post("/api/users", formData);
      }
      setFormData({ name: "", email: "", password: "", age: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      age: user.age,
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`/api/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">CRUD Fullstack App</h1>

        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required={!editingUserId}
          />
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
            required
          />
          <button type="submit" className="btn">
            {editingUserId ? "Update User" : "Add User"}
          </button>
        </form>

        <h2 className="subtitle">All Users</h2>

        <div className="user-section">
          {users.length === 0 ? (
            <p className="no-users">No users available.</p>
          ) : (
            <ul className="user-list">
              {users.map((u) => (
                <li key={u._id} className="user-item">
                  <div className="user-info">
                    <strong>{u.name}</strong> — {u.email} — Age: {u.age}
                  </div>
                  <div className="user-actions">
                    <button
                      onClick={() => handleEdit(u)}
                      className="btn edit-btn"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(u._id)}
                      className="btn delete-btn"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
