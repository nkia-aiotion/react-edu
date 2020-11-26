import logo from './logo.svg'
import Message from './components/Message'
import Counter from './components/Counter'
import './App.css'
import {useState} from "react";

const App = () => {
    // 비구조화 할당
    // 구조분해 할당
    // destructural syntax
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    // 카운트 (3) 입니다.

    return (
        <div className="App">
            <Message text={`카운트 (${count}) 입니다.`} />
            <Counter count={count} />
            <button onClick={handleClick}>증가</button>
        </div>
    )
}

export default App
