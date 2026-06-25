import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const getStudents = async () => {

    const response = await fetch("http://localhost:8080/student");
    const data = await response.json();

    setStudents(data);
  };

  return (
    <div className="App">
      <h1>Students Management System</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>name : {student.name}</h2>
          <h2>course : {student.course}</h2>
        </div>
      ))}

      <button onClick={getStudents}>Get students</button>

    </div>
  );
}

export default App;