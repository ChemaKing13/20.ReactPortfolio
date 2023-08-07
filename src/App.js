import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router'
import { Footer, Contact, Portfolio, AboutMe, Resume } from './components'

//define the app component
//it represents the main container of the website
//we set up routing with the help of React router
function App () {
  return(
    <>
      <Navbar />
      <div>
        <Routes>
       {/*   <Route path='/20.ReactPortfolio' element={<AboutMe />} /> */}
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App; 