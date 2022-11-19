import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import style from './style/app.module.scss';

import Feed from './pages/Feed';

import Header from './components/organisms/Header';
import SideBar from './components/organisms/SideBar';
import Stories from './pages/Stories';
import Books from './pages/Books';
import Search from './pages/Search';

function App() {

  return (      
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <SideBar/>
        <div className={style.app}>
          <Routes>
            <Route path="/" element={ <Feed /> } />
            <Route path="/stories" element={ <Stories /> } />
            <Route path="/books" element={ <Books /> } />
            <Route path="/search" element={ <Search /> } />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
