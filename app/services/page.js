
import ServiceHero from "../components/services/ServiceHero"
import Service from "../components/home/Service"
import Number from "../components/home/Number"
import Testimonial from "../components/home/Testimonial"
import NewsLetter from "../components/home/NewsLetter"
import TotalService from "../components/services/TotalService"

function page() {
  return (
    <div>
      <ServiceHero />
      <Service />
      <div className="py-7 md:py-10 max-w-6xl mx-auto mb-5">
        <Number />
      </div>
    <Testimonial />
    <TotalService />
    <NewsLetter />
    </div>
  )
}

export default page