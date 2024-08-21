import { useState } from 'react'
import './App.css'

function App() {

  const [FormData, setFormData] = useState({
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
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...FormData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
    })
    window.alert("Form Filled Successfully");
    // Here, you can handle the form submission, e.g., send the data to a server
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className="n-group">
          <label>First Name:</label>
          <input type="text" name="firstname" value={FormData.firstname} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Middle Name:</label>
          <input type="text" name="middleName" value={FormData.middleName} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Last Name:</label>
          <input type="text" name="lastname" value={FormData.lastname} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Birthdate:</label>
          <input type="date" name="birthdate" value={FormData.birthdate} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Email:</label>
          <input type="email" name="email" value={FormData.email} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Phone:</label>
          <input type="tel" name="ph" value={FormData.ph} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Gender:</label>
          <select name="gender" value={FormData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="n-group">
          <label>Start Time:</label>
          <input type="time" name="stime" value={FormData.stime} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>End Time:</label>
          <input type="time" name="etime" value={FormData.etime} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Job Position:</label>
          <input type="text" name="jobposition" value={FormData.jobposition} onChange={handleChange} />
        </div>

        <div className="n-group">
          <label>Select Team:</label>
          <select name="seleTeam" value={FormData.seleTeam} onChange={handleChange}>
            <option value="">Select Team</option>
            <option value="teamA">Team A</option>
            <option value="teamB">Team B</option>
            <option value="teamC">Team C</option>
          </select>
        </div>

        <div className="n-group">
          <label>Select Designation:</label>
          <select name="selectDesignation" value={FormData.selectDesignation} onChange={handleChange}>
            <option value="">Select Designation</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className="n-group">
          <label>Billable Hours:</label>
          <input type="number" name="BillableHours" value={FormData.BillableHours} onChange={handleChange} />
        </div>

        <div className="n-group check">
          <label>Is Billable:</label>
          <input type="checkbox" name="isBillable" checked={FormData.isBillable} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
