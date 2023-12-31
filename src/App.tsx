import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import { HomePage } from "./pages"


import "./App.scss"

function App() {
    return (
        <div className="app__container">
            <Router>

                <Routes>
                    <Route path="/*" element={<HomePage />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;