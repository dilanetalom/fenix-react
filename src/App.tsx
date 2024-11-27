
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil';
import Detailbook from './pages/Detailbook';
import Agendapage from './pages/Agendapage';
import Bookmenu from './pages/Bookmenu';
import Newspage from './pages/Newspage';
import Author from './pages/Author';
import DetailAuthor from './pages/DetailAuthor';
import Contact from './pages/Contact';
import DownloadAuthor from './pages/DownloadAuthor';
import About from './pages/About';
import Booksave from './pages/Booksave';
import Association from './pages/Association';


function App() {
  return (
   <>
     <Router>
        <Routes>
          {/* <Route  path='/'  element={<Login/>}/> */}
          <Route  path='/'  element={<Accueil/>}/>
          <Route  path='/detailbook'  element={<Detailbook/>}/>
          <Route  path='/agenda'  element={<Agendapage/>}/>
          <Route  path='/menubook'  element={<Bookmenu/>}/>
          <Route  path='/author'  element={<Author/>}/>
          <Route  path='/news'  element={<Newspage/>}/>
          <Route  path='/detailauthor'  element={<DetailAuthor/>}/>
          <Route  path='/contact'  element={<Contact/>}/>
          <Route  path='/download'  element={<DownloadAuthor/>}/>
          <Route  path='/about'  element={<About/>}/>
          <Route  path='/association'  element={<Association/>}/>
          {/* <Route  path='/booksupdate/:id'  element={<Bookupdate/>}/> */}
          <Route  path='/booksave'  element={<Booksave/>}/>
          {/* <Route  path='/allbook'  element={<Allbook/>}/> */}
          {/* <Route  path='/bookbyid/:id'  element={<Bookbyid/>}/> */}
        </Routes>
     </Router>
   </>
  );
}

export default App;
