import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Send from "./sendForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
