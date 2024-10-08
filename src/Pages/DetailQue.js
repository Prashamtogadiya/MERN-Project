import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DetailQue() {
  const [quizzes, setQuizzes] = useState([]); // State to hold all quizzes
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quizzes'); // Fetch all quizzes
        if (!response.ok) throw new Error('Failed to fetch quizzes');

        const result = await response.json();
        setQuizzes(result); // Store quizzes in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setLoading(false);
      }
    };

    fetchData(); // Fetch data on component mount
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this quiz?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/api/quizzes/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete quiz');
        
        // Remove the deleted quiz from the state
        setQuizzes(quizzes.filter(quiz => quiz._id !== id));
      } catch (error) {
        console.error("Error deleting quiz:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">All Quiz Questions</h1>
        <Link to="/add" className="btn btn-outline-primary">
          Back
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        quizzes.map((quiz, index) => (
          <div key={quiz._id} className="card shadow-sm p-4 mb-5 bg-white rounded">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0 text-dark">
                {index + 1}. Question: <span className="text-muted">{quiz.question || 'No question available'}</span>
              </h2>
              <div className="btn-group">
                <Link to={`/edit/${quiz._id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(quiz._id)}>
                  Delete
                </button>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Option 1:</strong>
                <span className="text-muted">{quiz.options?.option1 || 'No option available'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Option 2:</strong>
                <span className="text-muted">{quiz.options?.option2 || 'No option available'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Option 3:</strong>
                <span className="text-muted">{quiz.options?.option3 || 'No option available'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Option 4:</strong>
                <span className="text-muted">{quiz.options?.option4 || 'No option available'}</span>
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default DetailQue;
