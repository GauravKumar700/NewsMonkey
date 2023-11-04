import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
    const pageSize = 6
    const apikey = process.env.REACT_APP_NEWS_API

    const [progress, setProgress] = useState(0)

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    height={3}
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
                <Routes>
                    <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
                    <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
                    <Route path="entertainment/*" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
                    <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general1" pageSize={pageSize} country="in" category="general" />} />
                    <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
                    <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
                    <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
                    <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;