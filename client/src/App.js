import Blog from "./Components/BlogList/Blog/Blog";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Reset from "./Components/ResetPassword/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import PostProject from "./Components/PostProject/PostProject";
import ScrollTopArrow from "./Components/ScrollTop/ScrollTop";
import Website from "./Components/WebsiteDesign/Website";
import GenerateNewPassword from "./Components/GenerateNewPassword/GenerateNewPassword";

const App = () => {
  return (
    <div className="content-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetPassword" element={<Reset />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/discover/website-design" element={<Website />} />
          <Route path="/generateNewPassword/:id/:token" element={<GenerateNewPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
