import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
