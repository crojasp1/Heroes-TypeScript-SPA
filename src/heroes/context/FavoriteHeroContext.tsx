import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext{
  //state
  favorites: Hero[];
  favoriteCount: number;
  
  //methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero:Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

  const getFavoriteHeroesLocalStorage = ():Hero[] => {
    const favorites = localStorage.getItem("FavHeroes");
    return favorites ? JSON.parse(favorites) : [];
  }

const FavoriteHeroProvider = ({children}:PropsWithChildren) => {

  const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[]>(getFavoriteHeroesLocalStorage());

  useEffect(() => {
    localStorage.setItem("FavHeroes", JSON.stringify(favoriteHeroes));
  }, [favoriteHeroes])

  const onFavorite = (hero:Hero) => favoriteHeroes.some(h => h.id === hero.id);

  const toggleFavorite = (hero:Hero) => {
    const heroExist = favoriteHeroes.find( h => h.id === hero.id);

    if(heroExist){
      setFavoriteHeroes(favoriteHeroes.filter((h) => h.id !== hero.id));
      return;
    };

    setFavoriteHeroes([...favoriteHeroes, hero]);
  };

  return (
    <FavoriteHeroContext.Provider
      value={{
        //state
        favorites: favoriteHeroes,
        favoriteCount: favoriteHeroes.length,
        //methods
        isFavorite: onFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext.Provider>
  )
};

export default FavoriteHeroProvider;




