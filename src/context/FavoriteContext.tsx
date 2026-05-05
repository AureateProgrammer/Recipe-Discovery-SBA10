import{createContext, useContext, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoriteContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

