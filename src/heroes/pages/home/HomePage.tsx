import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CustomJumBotron from "@/components/custom/CustomJumBotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useMemo } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";


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

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes", {page, limit}],
    queryFn: () => getHeroesByPage(+page, +limit),
    staleTime: 1000 * 60 * 5, //5 min
  });

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
                  return prev;
                })
              }
            >
              All Characters (16)
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
                  return prev;
                })
              }
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Character Grid */}
            <h1>Todos los personajes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />{" "}
          </TabsContent>
          <TabsContent value="heroes">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />{" "}
          </TabsContent>
          <TabsContent value="Villains">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />{" "}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
