import PageTemplate from "../pages/PageTemplate";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CharacterPage from "./character/CharacterPage";
import { CharacterProvider } from "../contexts/Character";


const BuilderRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="character" />} />
            <Route path="/character" element={<CharacterProvider><CharacterPage /></CharacterProvider>} />
        </Routes>
    );
} 
export default BuilderRouter