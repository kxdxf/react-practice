import logo from './logo.svg';
import { ColoredMessage } from "./components/ColoredMessage";
import './App.css';

function App() {
    const onClickButton = () => {
        alert();
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
            <ColoredMessage></ColoredMessage>
            <ColoredMessage color="blue" message="お元気ですか？"></ColoredMessage>
            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;
