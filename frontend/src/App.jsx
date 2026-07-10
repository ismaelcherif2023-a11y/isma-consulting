import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Offers from './components/Offers'
import Why from './components/Why'
import Process from './components/Process'
import Proofs from './components/Proofs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Offers />
        <Why />
        <Process />
        <Proofs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
