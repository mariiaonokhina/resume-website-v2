import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import MainContent from './MainContent'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "Mariia's Website";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
