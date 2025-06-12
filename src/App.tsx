import React from 'react';
import UiKit from './pages/UiKit';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SurveyPage from './pages/SurveyPage';
import ResultPage from './pages/ResultPage';
import UploadPage from './pages/UploadPage';
import { Layout } from './components/Layout';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<WelcomePage />} />
    //     <Route path="/upload" element={<UploadPage />} />
    //     <Route path="/survey" element={<SurveyPage />} />
    //     <Route path="/result" element={<ResultPage />} />
    //     <Route path="/ui" element={<UiKit />} />
    //   </Route>
    // </Routes>

    <div>
      <UiKit />y
    </div>
  );
}

export default App;
