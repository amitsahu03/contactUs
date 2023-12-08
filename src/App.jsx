
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <main className='main_container'>
      <ContactHeader></ContactHeader>
      <ContactForm/>
      </main>
      
    </>
  )
}

export default App