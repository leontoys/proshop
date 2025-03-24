import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import store from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/**Store is added to the App */}
      <App />
    </Provider>
  </StrictMode>,
)
