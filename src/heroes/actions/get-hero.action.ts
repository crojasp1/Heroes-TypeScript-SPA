import { heroApi } from "../api/hero.api"
import type { HeroInformation } from "../types/hero-information.response";

const BASE_URL= import.meta.env.VITE_API_URL;

export const getHeroes = async(idSlug:string) => {
  
  const {data} = await heroApi.get<HeroInformation>(`/${idSlug}`);

  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`
  };
}