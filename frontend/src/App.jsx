import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/books'></Route>
        <Route path='/books/:id'></Route>
      </Routes>
    </Router>
  )
}

export default App
