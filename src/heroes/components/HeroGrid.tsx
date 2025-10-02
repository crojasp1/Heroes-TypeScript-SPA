
import type { Hero } from "../types/hero.interface";
import HeroCard from "./HeroCard";

interface HeroProps {
  heroes : Hero[]
}


const HeroGrid = ({heroes}:HeroProps) => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Hero Card 1 - Superman */}

          {heroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />

          ))}


        </div>
  )
}

export default HeroGrid
