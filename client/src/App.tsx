import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import HomePage from './components/pages/HomePage/HomePage';
import Header from './components/partials/Header';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
