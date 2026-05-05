import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoriteContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

    const addFavorite = (id: string) => {
        setFavorites(prev => [...prev, id]);
    };

    const removeFavorite = (id: string) => {
        setFavorites(prev => prev.filter(fav => fav !== id));
    };

    const isFavorite = (id: string) => {
        return favorites.includes(id);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within a FavoriteProvider');
    }
    return context;
};