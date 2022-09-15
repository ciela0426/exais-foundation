import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import Exais from './pages/Exais';
import ExaFoundation from './pages/ExaFoundation';
import Ecosystem from './pages/Ecosystem';
import Community from './pages/Community';
import Explorer from './pages/Explorer';
import PrivacyPolicy from './pages/PrivacyPolicy';

import i18n from './locales/i18n';

const App = () => {

  // Now url
  const location = useLocation();

  // Header menu
  const [title, setTitle] = useState([
    {id:1, title: "Exais 1.0", link:"/exais"},
    {id:2, title: "Exa Foundation", link:"/exafoundation"},
    {id:3, title: "Ecosystem", link:"/ecosystem"},
    {id:4, title: "Community", link:"/community"},
    {id:5, title: "Explorer", link:"/explorer"},
  ]);

  // Now page
  const [status, setStatus] = useState("Home");

  return (
    <div className="App">
      {/* header */}
      <Header title={title} location={location.pathname} status={status} setStatus={setStatus} />
      {/* //header */}
      {/* container */}
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/exais" element={<Exais />}/>
          <Route path="/exafoundation" element={<ExaFoundation />}/>
          <Route path="/ecosystem" element={<Ecosystem />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/explorer" element={<Explorer />}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
        </Routes>
      {/* //container */}
      {/* footer */}
      <Footer status={status} setStatus={setStatus} />
      {/* //footer */}
    </div>
  );
}

export default App;
