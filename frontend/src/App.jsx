import { useState } from "react";

function App() {
  const [student, setStudent] = useState({});
  const getStudent = async () => {

    const response = await fetch("http://localhost:8080/student");
    const data = await response.json();

    setStudent(data);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>

      <h2>Id : {student.id}</h2>
      <h2>name : {student.name}</h2>
      <h2>course : {student.course}</h2>

      <button onClick={getStudent}>Get student</button>

    </div>
  );
}

export default App;