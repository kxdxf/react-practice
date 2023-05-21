import logo from './logo.svg';
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import './App.css';

function App() {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    }

    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    }

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    }

    return (
        <div>
            <h1>こんにちは！</h1>
            <ColoredMessage color="blue">元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </div>
    );
}

export default App;
