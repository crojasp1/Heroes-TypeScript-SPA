import { useQuery } from "@tanstack/react-query"
import { getHeroesByPage } from "../actions/get-heroes-by-page"

interface Props{
  page: number,
  limit: number,
}

export const usePaginatedHero = (page: number, limit:number) => {
  return useQuery({
    queryKey: ['Heroes', {page, limit}],
    queryFn: () => getHeroesByPage(page, limit),
    staleTime: 1000 * 60 * 5
  });


}

export default usePaginatedHero
