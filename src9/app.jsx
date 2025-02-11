import React, { useState } from "react";

const App = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [newStudent, setNewStudent] = useState("");

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <input 
        type="text" 
        placeholder="Enter student name..." 
        value={newStudent} 
        onChange={(e) => setNewStudent(e.target.value)} 
      />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student} <button onClick={() => removeStudent(index)}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
};

export default App;