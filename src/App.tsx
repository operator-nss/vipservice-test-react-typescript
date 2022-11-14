import {useState} from 'react'
import reactLogo from './assets/react.svg'
import Home from "./pages/Home/Home";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <Home/>
        </div>
    )
}

export default App
