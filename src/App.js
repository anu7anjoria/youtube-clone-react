import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage.js';
import VideoPlayer from './VideoPlayer';
import VideoRow from './VideoRow';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/video">
            <div className="app_page">
              <Sidebar />
              <VideoPlayer />
              {/*cooments*/}
              <div className="sideRecommned">
                <RecommendedVideos />
              </div>
            </div>
          </Route>
          <Route path="/search/:searchID">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
