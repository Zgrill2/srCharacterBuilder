import PageTemplate from "../pages/PageTemplate";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CharacterPage from "./character/CharacterPage";


const BuilderRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="character" />} />
            <Route path="/character" element={<CharacterPage />} />
        </Routes>
    );
} 
export default BuilderRouter