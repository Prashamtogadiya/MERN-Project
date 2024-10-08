import React, { useState, useEffect } from "react";
import { useNavigate, useParams ,Link } from "react-router-dom";

function EditQue() {
  const { id } = useParams();  // Get the quiz ID from the URL
  const navigate = useNavigate();
  const [data, setData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  useEffect(() => {
    // Fetch the quiz data by ID when component mounts
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/quizzes/${id}`);
        if (!response.ok) throw new Error('Failed to fetch quiz');

        const quiz = await response.json();
        setData({
          question: quiz.question,
          option1: quiz.options.option1,
          option2: quiz.options.option2,
          option3: quiz.options.option3,
          option4: quiz.options.option4
        });
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleSubmit = async () => {
    // Ensure all fields are filled before submitting
    if (!data.question || !data.option1 || !data.option2 || !data.option3 || !data.option4) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      // Send updated data to backend
      const response = await fetch(`http://localhost:5000/api/quizzes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: data.question,
          options: {
            option1: data.option1,
            option2: data.option2,
            option3: data.option3,
            option4: data.option4,
          },
        }),
      });

      if (!response.ok) throw new Error('Failed to update quiz');

      navigate("/detail");
    } catch (error) {
      console.error("Error updating quiz:", error);
    }
  };

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Edit This Question</h1>
        <Link to="/detail" className="btn btn-outline-primary">
          Back
        </Link>
      </div>
      <div className="form-group row mb-3 mt-3">
        <label htmlFor="question" className="col-4 col-form-label">
          Question
        </label>
        <div className="col-8">
          <input
            onChange={(e) => setData({ ...data, question: e.target.value })}
            id="question"
            type="text"
            className="form-control"
            value={data.question}
          />
        </div>
      </div>
      
      {/* Repeat input fields for options */}
      <div className="form-group row mb-3">
        <label htmlFor="option1" className="col-4 col-form-label">
          Option 1
        </label>
        <div className="col-8">
          <input
            onChange={(e) => setData({ ...data, option1: e.target.value })}
            id="option1"
            type="text"
            className="form-control"
            value={data.option1}
          />
        </div>
      </div>
      
      <div className="form-group row mb-3">
        <label htmlFor="option2" className="col-4 col-form-label">
          Option 2
        </label>
        <div className="col-8">
          <input
            onChange={(e) => setData({ ...data, option2: e.target.value })}
            id="option2"
            type="text"
            className="form-control"
            value={data.option2}
          />
        </div>
      </div>
      
      <div className="form-group row mb-3">
        <label htmlFor="option3" className="col-4 col-form-label">
          Option 3
        </label>
        <div className="col-8">
          <input
            onChange={(e) => setData({ ...data, option3: e.target.value })}
            id="option3"
            type="text"
            className="form-control"
            value={data.option3}
          />
        </div>
      </div>
      
      <div className="form-group row mb-3">
        <label htmlFor="option4" className="col-4 col-form-label">
          Option 4
        </label>
        <div className="col-8">
          <input
            onChange={(e) => setData({ ...data, option4: e.target.value })}
            id="option4"
            type="text"
            className="form-control"
            value={data.option4}
          />
        </div>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Update
      </button>
    </div>
  );
}

export default EditQue;
