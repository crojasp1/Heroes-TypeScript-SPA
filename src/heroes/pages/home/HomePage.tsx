import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CustomJumBotron from "@/components/custom/CustomJumBotron";
import { useParams, useSearchParams } from "react-router";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useMemo } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs";
import useHeroSummary from "@/heroes/hooks/useHeroSummary";
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all"; 


  const verifiedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  // const[activeTab, setActiveTab] = useState<
  //   "all"|
  //   "favorites"|
  //   "heroes"|
  //   "villains"
  // >("all");

  const {data: SummaryData} = useHeroSummary();

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);


  // const { data: heroesResponse } = useQuery({
  //   queryKey: ["heroes", {page, limit}],
  //   queryFn: () => getHeroesByPage(+page, +limit),
  //   staleTime: 1000 * 60 * 5, //5 min
  // });

  return (
    <>
      <>
        <CustomJumBotron
          title="Universo de Super Heroes"
          description="Descubre, explora y administra superheroes y villanos."
        />

        <CustomeBreadCrumbs currentPage="" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={verifiedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              All Characters ({SummaryData?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero")
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Heroes ({SummaryData?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain")   
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Villains ({SummaryData?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Character Grid */}
            <h1>Todos los personajes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
