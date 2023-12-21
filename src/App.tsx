import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import { HomePage } from "./pages"
import {Navbar} from "./common";


import "./App.scss"

function App() {
    return (

        <div className="app__container">
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/*" element={<HomePage />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;