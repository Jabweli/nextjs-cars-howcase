import Brands from "./Brands";
import CarSlider from "./CarSlider";

export default function Cars() {
   return (
      <section className="h-auto pt-16 flex items-center" id="cars">
         <div className="container xl:max-w-[1200px] mx-auto">
            <Brands />
            <CarSlider />
         </div>
      </section>
   )
}
