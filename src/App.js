import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import * as bootstrap from "bootstrap";
export function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    grade: '',
    gender: '',
    mobile: '',
    address: '',
  });
  const [editingStudent, setEditingStudent] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    name: '',
    grade: '',
    gender: '',
    mobile: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewStudent({
      ...newStudent,
      [id]: value,
    });
  };

  const handleEditInputChange = (e) => {
    const { id, value } = e.target;
    setEditedStudent({
      ...editedStudent,
      [id]: value,
    });
  };

  const registerStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      name: '',
      grade: '',
      gender: '',
      mobile: '',
      address: '',
    });
  };

  const openEditModal = (student) => {
    setEditingStudent(student);
    setEditedStudent(student);
  };

  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student === editingStudent ? editedStudent : student
      )
    );
    setEditingStudent(null);
    setEditedStudent({
      name: '',
      grade: '',
      gender: '',
      mobile: '',
      address: '',
    });
  };

  return (
    <div>
      <div className="container-fluid mt-4">
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#submit">
          Add Student
        </button>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.gender}</td>
                <td>{student.mobile}</td>
                <td>{student.address}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#editStudentModal"
                    onClick={() => openEditModal(student)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="submit">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add Student</h2>
              <button className="btn btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <dl>
                <dt>Name</dt>
                <dd><input type="text" id="name" className="form-control" value={newStudent.name} onChange={handleInputChange} /></dd>
                <dt>Grade</dt>
                <dd><input type="text" id="grade" className="form-control" value={newStudent.grade} onChange={handleInputChange} /></dd>
                <dt>Gender</dt>
                <dd>
                  <select className="form-select" id="gender" value={newStudent.gender} onChange={handleInputChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text" id="mobile" className="form-control" value={newStudent.mobile} onChange={handleInputChange} /></dd>
                <dt>Address</dt>
                <dd><input type="text" id="address" className="form-control" value={newStudent.address} onChange={handleInputChange} /></dd>
              </dl>
            </div>
            <div className="modal-footer">
              <button data-bs-dismiss="modal" onClick={registerStudent} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* Edit Student Modal  */}
      <div className="modal fade" id="editStudentModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Student</h2>
              <button className="btn btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <dl>
                <dt>Name</dt>
                <dd><input type="text" id="name" className="form-control" value={editedStudent.name} onChange={handleEditInputChange} /></dd>
                <dt>Grade</dt>
                <dd><input type="text" id="grade" className="form-control" value={editedStudent.grade} onChange={handleEditInputChange} /></dd>
                <dt>Gender</dt>
                <dd>
                  <select className="form-select" id="gender" value={editedStudent.gender} onChange={handleEditInputChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text" id="mobile" className="form-control" value={editedStudent.mobile} onChange={handleEditInputChange} /></dd>
                <dt>Address</dt>
                <dd><input type="text" id="address" className="form-control" value={editedStudent.address} onChange={handleEditInputChange} /></dd>
              </dl>
            </div>
            <div className="modal-footer">
              <button data-bs-dismiss="modal" onClick={updateStudent} className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
