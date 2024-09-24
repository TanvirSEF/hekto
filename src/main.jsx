import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './components/ContextApi.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
)