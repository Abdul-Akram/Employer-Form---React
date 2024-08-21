import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    middleName: "",
    lastname: "",
    birthdate: "",
    email: "",
    ph: "",
    gender: "",
    stime: "",
    etime: "",
    jobposition: "",
    seleTeam: "",
    selectDesignation: "",
    BillableHours: "",
    isBillable: false,
  });

  const [db, setDb] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.firstname || !formData.lastname || !formData.email) {
      window.alert("Please fill in all required fields.");
      return;
    }

    const newDb = [...db, formData];
    setDb(newDb);
    console.log(newDb); // Log updated db

    setFormData({
      firstname: "",
      middleName: "",
      lastname: "",
      birthdate: "",
      email: "",
      ph: "",
      gender: "",
      stime: "",
      etime: "",
      jobposition: "",
      seleTeam: "",
      selectDesignation: "",
      BillableHours: "",
      isBillable: false,
    });

    window.alert("Form Filled Successfully");
    // Handle form submission, e.g., send the data to a server
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="n-group">
        <label>First Name:</label>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
      </div>

      <div className="n-group">
        <label>Middle Name:</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>Last Name:</label>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
      </div>

      <div className="n-group">
        <label>Birthdate:</label>
        <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="n-group">
        <label>Phone:</label>
        <input type="tel" name="ph" value={formData.ph} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="n-group">
        <label>Start Time:</label>
        <input type="time" name="stime" value={formData.stime} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>End Time:</label>
        <input type="time" name="etime" value={formData.etime} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>Job Position:</label>
        <input type="text" name="jobposition" value={formData.jobposition} onChange={handleChange} />
      </div>

      <div className="n-group">
        <label>Select Team:</label>
        <select name="seleTeam" value={formData.seleTeam} onChange={handleChange}>
          <option value="">Select Team</option>
          <option value="teamA">Team A</option>
          <option value="teamB">Team B</option>
          <option value="teamC">Team C</option>
        </select>
      </div>

      <div className="n-group">
        <label>Select Designation:</label>
        <select name="selectDesignation" value={formData.selectDesignation} onChange={handleChange}>
          <option value="">Select Designation</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      <div className="n-group">
        <label>Billable Hours:</label>
        <input type="number" name="BillableHours" value={formData.BillableHours} onChange={handleChange} />
      </div>

      <div className="n-group check">
        <label>Is Billable:</label>
        <input type="checkbox" name="isBillable" checked={formData.isBillable} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
