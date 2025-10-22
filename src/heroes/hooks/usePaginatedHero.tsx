import { useQuery } from "@tanstack/react-query"
import { getHeroesByPage } from "../actions/get-heroes-by-page"


export const usePaginatedHero = (page: number, limit:number, category: string = "all") => {
  return useQuery({
    queryKey: ['Heroes', {page, limit, category}],
    queryFn: () => getHeroesByPage(page, limit, category),
    staleTime: 1000 * 60 * 5
  });


}

export default usePaginatedHero
