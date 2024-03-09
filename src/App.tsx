import './App.css'

import {Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <Routes>
            <Route path={"/"} element={<div>home</div>}/>
            <Route path={"/test"} element={<div>test</div>}/>
        </Routes>
        // <div>
        //     <div>Figma Test</div>
        //     <button onClick={() => figmaTokenCallback()}>Call back</button>
        //     <button onClick={() => getFigmaToken()}>Get Token</button>
        // </div>
    )
}

export default App