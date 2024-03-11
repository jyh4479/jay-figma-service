import './App.css'

import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import FigmaCodePage from "./pages/FigmaCodePage";

const App = () => {

    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/start"} element={<StartPage/>}/>
            <Route path={"/figma-code"} element={<FigmaCodePage/>}/>
        </Routes>
    )
}

export default App