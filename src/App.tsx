import React from "react"
import "./App.css"
import {Header} from "./Modules/Header/Header"
import {Main} from "./Modules/Main/Main"
import {Nav} from "./Modules/Nav/Nav"
import {BrowserRouter} from "react-router-dom"
import {SubMain} from "./Modules/SubMain/SubMain"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <Header/>
        </div>
        <div className="wrapper">
          <div className="Nav">
            <Nav/>
          </div>
          <div className="Main">
            <Main/>
          </div>
          <div className="SubMain">
            <SubMain/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
