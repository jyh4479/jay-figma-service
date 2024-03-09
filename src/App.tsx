import './App.css'
import {figmaTokenCallback} from "./apis/token";
import getFigmaToken from "./apis/token/getFigmaToken.ts";

const App = () => {

    return (
        <div>
            <div>Figma Test</div>
            <button onClick={() => figmaTokenCallback()}>Call back</button>
            <button onClick={() => getFigmaToken()}>Get Token</button>
        </div>
    )
}

export default App