
// import Navbar from "./components/home/Navbar"
import Hero from "./components/home/Hero"
import Service from "./components/home/Service"
import OurClients from "./components/home/OurClients"
import Testimonial from "./components/home/Testimonial"
import Number from "./components/home/Number"
import Blog from './components/home/Blog'
import NewsLetter from "./components/home/NewsLetter"
// import Footer from "./components/home/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <OurClients />
      <Testimonial />
      <Number />
      <Blog />
      <NewsLetter />
    </main>
  )
}
