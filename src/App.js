import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Section1 from './pages/section1';
import Section2 from './pages/section2';
import Section3 from './pages/section3';
import Section4 from './pages/section4';
import data from './pages/Data';
import { useState } from 'react';
import Details from './pages/Details';

function App() {
  let nav = useNavigate();

  let [pd, setPd] = useState(data);
  // console.log('루트영역', pd);
  return (
    <div className="App">
      <header className="App_header mw">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" />
        </Link>
        <nav className="gnb">
          <Link to="/sec2">메뉴1</Link>
          <Link to="/sec3">메뉴2</Link>
          <Link to="/sec4">메뉴3</Link>
        </nav>
        <button
          onClick={() => {
            nav('./detail');
          }}
          className="person"
        >
          개인페이지
        </button>
      </header>
      <Routes>
        <Route path="*" element={<div>페이지 없음 (404)</div>} />
        <Route path="/" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="member" element={<div>회사소개</div>}></Route>
          <Route path="location" element={<div>회사위치</div>}></Route>
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
      </Routes>

      <footer className="footer">
        <div className="footerTop">
          <a href="#">
            <img src="/img/logo.svg" />
          </a>
          <a href="#">HOME</a>
          <a href="#">O HAC</a>
          <a href="#">OOEPTA</a>
          <a href="#">KOPNHA</a>
          <a href="#">FAQ</a>
        </div>
        <div className="icon">
          <img src="/img/sns03.png" />
          <img src="/img/sns04.png" />
          <img src="/img/sns01.png" />
        </div>
      </footer>
    </div>
  );
}

export default App;
