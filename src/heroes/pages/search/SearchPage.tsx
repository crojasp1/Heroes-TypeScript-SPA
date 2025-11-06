import CustomJumBotron from "@/components/custom/CustomJumBotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import searchHeroAction from "@/heroes/actions/search-hero.action"
import HeroGrid from "@/heroes/components/HeroGrid"


const SearchPage = () => {

  const [searchParams, setSearchParams] = useSearchParams("");

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const {data: filteredHeroes = []} = useQuery({
    queryKey: ["searchedHeroes", {name, strength}],
    queryFn: () => searchHeroAction({name, strength}),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      <CustomJumBotron title="Busqueda de Super Heroes" description="Descubre, explora y administra superheroes y villanos." />

      <CustomeBreadCrumbs currentPage="Search Page" 
                          //breadcrumbs={[{label:"Home", to: "/home"}]}
                          />
      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={filteredHeroes}/>
    </>
  )
}

export default SearchPage
