import { Badge } from "@/components/ui/badge"
import { Heart, Trophy, Users, Zap } from "lucide-react"
import HeroStatCard from './HeroStatCard';
import useHeroSummary from "../hooks/useHeroSummary";



const HeroStats = () => {

  const {data: SummaryData} = useHeroSummary();

  return (
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <HeroStatCard title="Total de personajes" icon={<Users className="h-4 w-4 text-muted-foreground" />} >
              <div className="text-2xl font-bold">{SummaryData?.totalHeroes}</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  {SummaryData?.heroCount}
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  {SummaryData?.villainCount}
                </Badge>
              </div>       
          </HeroStatCard>

          <HeroStatCard title="Favoritos" icon={<Heart className="h-4 w-4 text-muted-foreground" />} >
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">18.8% of total</p>          
          </HeroStatCard>

          <HeroStatCard title="Fuerte" icon={<Zap className="h-4 w-4 text-muted-foreground" />} >
              <div className="text-lg font-bold">{SummaryData?.strongestHero.name}</div>
              <p className="text-xs text-muted-foreground">{SummaryData?.strongestHero.strength}/10</p>    
          </HeroStatCard>

          <HeroStatCard title="Inteligente" icon={<Trophy className="h-4 w-4 text-muted-foreground" />} >
              <div className="text-lg font-bold">{SummaryData?.smartestHero.name}</div>
              <p className="text-xs text-muted-foreground">{SummaryData?.smartestHero.intelligence}/10</p>     
          </HeroStatCard>

        </div>
  )
}

export default HeroStats
