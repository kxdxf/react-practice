import logo from './logo.svg';
import './App.css';

function App() {
    const onClickButton = () => {
        alert();
    }

    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return (
        <div>
            <h1>こんにちは！</h1>
            <p style={contentStyle}>お元気ですか！？</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;
