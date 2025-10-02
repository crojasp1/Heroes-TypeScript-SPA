
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CustomJumBotron from "@/components/custom/CustomJumBotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import { useState } from "react"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs"
import { useQuery } from "@tanstack/react-query"
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page"

export const HomePage = () => {

  const[activeTab, setActiveTab] = useState<
    "all"|
    "favorites"|
    "heroes"|
    "villains" 
  >("all");

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5, //5 min
  })

  return (
      <>
      <>
        <CustomJumBotron title="Universo de Super Heroes" description="Descubre, explora y administra superheroes y villanos." />

        <CustomeBreadCrumbs currentPage=""/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}


        {/* Advanced Filters */}


        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Character Grid */}
            <h1>Todos los personajes</h1>
            <HeroGrid  heroes={heroesResponse?.heroes ?? []}/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>          </TabsContent>          
          <TabsContent value="heroes">
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>          </TabsContent>
          <TabsContent value="Villains">
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>          </TabsContent>          
        </Tabs>


        {/* Pagination */}
        <CustomPagination totalPages={8}/>
    </>
    </>

  )
}