import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Child from './pages/Child';

function App() {
    return (
          <Router>
                <Routes>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/child/:childId" element={<Child />} />
                        <Route path="/" element={<Navigate to="/admin" replace />} />
                </Routes>Routes>
          </Router>Router>
        );
}
                          
  export default App;</Router>
