import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Feedbacklist from "./component/Feedbacklist";

import FeedbackStat from "./component/FeedbackStat";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import { FeedbackProvider } from "./component/Context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/* <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStat />
                  <Feedbacklist />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
