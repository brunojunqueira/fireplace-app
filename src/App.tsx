import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Feed from './pages/Feed'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Feed /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
