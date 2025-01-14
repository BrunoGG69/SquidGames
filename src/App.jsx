import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CallScreen from "./pages/CallScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<CallScreen />} />
        </Routes>
    );
}

export default App;
