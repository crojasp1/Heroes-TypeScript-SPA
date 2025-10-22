import { useQuery } from "@tanstack/react-query"

import { getHeroes } from "../actions/get-hero.action"

const useHeroDetail = (idSlug: string) => {
  return useQuery({
    queryKey: ["heroInfo", {idSlug}],
    queryFn: () => getHeroes(idSlug),
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
};

export default useHeroDetail
