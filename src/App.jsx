import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectDetailsPage from "./pages/ProjectDetails";
import Layout from "./pages/Layout";

const App = () => (
  <Router>
    <Layout className="App">
      {/* <Home /> */}
      <Routes>
        <Route index path="/home" element={<HomePage />} />
        <Route path="/projectDetails/:pageId" element={<ProjectDetailsPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App
