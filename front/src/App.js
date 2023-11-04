import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotEnoughFunds from "./Pages/NotEnoughFunds";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import TextAi from "./Pages/TextAi";
import FlashCard from "./Pages/FlashCard";
import Profile from "./Pages/Profile";
import Quizz from "./Pages/Quizz";
import Saved from "./Pages/Saved";
import Calendarr from "./Pages/Calendarr";
import Quizz2 from "./Pages/Quizz2";
import { UserProvider } from "./Components/UserContext";
import Blockchain from "./Pages/Blockchain";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router basename="/Health-Plus">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Textai" element={<TextAi />} />
            <Route path="/Quizz" element={<Quizz />} />
            <Route path="/Quizz2" element={<Quizz2 />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path="/Calendarr" element={<Calendarr />} />
            <Route path="/Legal" element={<Legal />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/FlashCard" element={<FlashCard />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Blockchain" element={<Blockchain />} />
            <Route path="/NotEnoughFunds" element={<NotEnoughFunds />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
