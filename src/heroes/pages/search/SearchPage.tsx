import CustomJumBotron from "@/components/custom/CustomJumBotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs"


const SearchPage = () => {
  return (
    <>
      <CustomJumBotron title="Busqueda de Super Heroes" description="Descubre, explora y administra superheroes y villanos." />

      <CustomeBreadCrumbs currentPage="Search Page" 
                          //breadcrumbs={[{label:"Home", to: "/home"}]}
                          />
      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage
