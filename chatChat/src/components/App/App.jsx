import { BrowserRouter as Router } from "react-router-dom"

import "./App.css"

import AppRoutes from "./AppRoutes"

function App() {
  return (
    <div className="app">
    <Router basename={import.meta.env.BASE_URL}>

      <AppRoutes />
      </Router>
    </div>
  )
}

export default App
