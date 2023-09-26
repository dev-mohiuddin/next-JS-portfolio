
import ContactHero from "../components/contact/ContactHero"
import ContactForm from "../components/contact/ContactForm"
import NewsLetter from "../components/home/NewsLetter"

function page() {
  return (
    <div>
        <ContactHero />
        <ContactForm />
        <div className="py-5"><NewsLetter /></div>
    </div>
  )
}

export default page