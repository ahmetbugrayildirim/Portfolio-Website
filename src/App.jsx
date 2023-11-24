import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectDetailsPage from "./pages/ProjectDetails";
import Layout from "./pages/Layout";

const App = () => (
  <Router basename='/'>
    <Layout className="App">
      {/* <Home /> */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        
        <Route path="/projectDetails/:pageId" element={<ProjectDetailsPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App
