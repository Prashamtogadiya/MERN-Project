import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Intro from "./Pages/Intro";
import AddQue from "./Pages/AddQue";
import DetailQue from "./Pages/DetailQue";
import EditQue from "./Pages/EditQue";

function App() {
  const [data, setData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/edit/:id" element={<EditQue />} />

          <Route index element={<Intro />} />
          <Route
            path="/add"
            element={<AddQue data={data} setData={setData} />}
          />
          <Route path="/detail" element={<DetailQue data={data} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
