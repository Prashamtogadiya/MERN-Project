import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddQue() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const handleSubmit = async () => {
  // Check if all fields are filled out before navigating
  if (!data.question || !data.option1 || !data.option2 || !data.option3 || !data.option4) {
    alert("Please fill out all fields.");
    return;
  }

  try {
    // Send data to backend
    const response = await fetch('http://localhost:5000/api/quizzes', {
      method: 'POST',
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

    if (!response.ok) throw new Error('Failed to save quiz');

    const savedQuiz = await response.json();
    // Navigate to detail page with the saved quiz ID
    navigate("/detail", { state: { id: savedQuiz._id } });
  } catch (error) {
    console.error("Error saving quiz:", error);
  }
};


  return (
    <div className="container">
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
      {/* Repeat for options */}
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
        Submit
      </button>
    </div>
  );
}

export default AddQue;
