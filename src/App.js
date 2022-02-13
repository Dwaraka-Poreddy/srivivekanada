import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NoticeBoardJnrClg from "./Pages/Notice_Board/NoticeB_JnrClg";
import NoticeBoardDegreeClg from "./Pages/Notice_Board/NoticeB_DegreeClg";
import NoticeBoardSchool from "./Pages/Notice_Board/NoticeB_School";
import StudyMatDegreeClg from "./Pages/Study_Material/Study_Mat_DegreeClg";
import StudyMatJnrClg from "./Pages/Study_Material/Study_Mat_JnrClg";
import StudyMatSchool from "./Pages/Study_Material/Study_Mat_School";
import TimetableSchool from "./Pages/Time_Table/Time_Table_School";
import TimetableJnrClg from "./Pages/Time_Table/Time_Table_JnrClg";
import TimetableDegreeClg from "./Pages/Time_Table/Time_Table_DegreeClg";
import ResultsSchool from "./Pages/Results/Results_School";
import ResultsJnrClg from "./Pages/Results/Results_JnrClg";
import ResultsDegreeClg from "./Pages/Results/Results_DegreeClg";
import AboutUsSchool from "./Pages/About_Us/About_Us_School";
import AboutUsJnrClg from "./Pages/About_Us/About_Us_JnrClg";
import AboutUsDegreeClg from "./Pages/About_Us/About_Us_DegreeClg";
import NavBar from "./NavBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      {" "}
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<HomePage />} />
        <Route path="/notice_board_jnrClg" element={<NoticeBoardJnrClg />} />
        <Route
          path="/notice_board_degreeClg"
          element={<NoticeBoardDegreeClg />}
        />
        <Route path="/notice_board_school" element={<NoticeBoardSchool />} />
        <Route
          path="/study_material_degreeClg"
          element={<StudyMatDegreeClg />}
        />
        <Route path="/study_material_jnrClg" element={<StudyMatJnrClg />} />
        <Route path="/study_material_school" element={<StudyMatSchool />} />
        <Route path="/time_table_degreeClg" element={<TimetableDegreeClg />} />
        <Route path="/time_table_jnrClg" element={<TimetableJnrClg />} />
        <Route path="/time_table_school" element={<TimetableSchool />} />
        <Route path="/results_degreeClg" element={<ResultsDegreeClg />} />
        <Route path="/results_jnrClg" element={<ResultsJnrClg />} />
        <Route path="/results_school" element={<ResultsSchool />} />
        <Route path="/aboutus_degreeClg" element={<AboutUsDegreeClg />} />
        <Route path="/aboutus_jnrClg" element={<AboutUsJnrClg />} />
        <Route path="/aboutus_school" element={<AboutUsSchool />} />
      </Routes>
    </div>
  );
}

export default App;
