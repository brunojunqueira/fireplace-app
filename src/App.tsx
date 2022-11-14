import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Feed from './pages/Feed';

import Header from './components/layout/Header';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Routes>  
          <Route path="/" element={ <Feed /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
