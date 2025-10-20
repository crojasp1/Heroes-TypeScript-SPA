import { useQuery } from "@tanstack/react-query";
import { getSumaryAction } from "../actions/get-sumary.action";

export const useHeroSummary = () => {
  
    return useQuery({
    queryKey: ['summary-information'],
    queryFn: () => getSumaryAction(),
    staleTime: 1000 * 60 * 5,
    
  });

}

export default useHeroSummary
