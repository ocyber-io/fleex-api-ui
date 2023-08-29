import React from 'react'
import ReactDOM from 'react-dom/client'
// import './assets/index.css'
import '../src/assets/index.css'
import App from './App'
import { AuthContextProvider } from './contexts'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
)
