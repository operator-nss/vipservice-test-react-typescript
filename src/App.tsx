import React, {useEffect, useState} from 'react'
import Home from "./pages/Home/Home";
import {Routes, Route, useNavigate} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const AviaInfoPage = React.lazy(() =>
  import(/* webpackChunkName: "AviaInfoPage" */ './pages/AviaInfo/AviaInfo')
)

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/avia')
  }, [])

  return (
    <div className="container">
      <Routes>
        <Route path="/avia" element={<Home/>}/>

        <Route
          path="/avia/info"
          element={
            <React.Suspense
              fallback={
                <div className="preloader">
                  <Preloader/>
                </div>
              }
            >
              <AviaInfoPage/>
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
