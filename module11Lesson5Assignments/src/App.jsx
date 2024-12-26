import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetailsWrapper from './components/CharacterDetailsWrapper';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-characters/' element={<BrowseCharacters />} />
        <Route path='/character-details/:id' element={<CharacterDetailsWrapper />} /> {/*Assignment 2, Task 2*/}
        <Route path='/comics/' element={<Comics />} />
        <Route path='*' element={<NotFound />} /> {/*Assingment 2, Task 3*/}
      </Routes>
    </div>
  )
}

export default App
