import { useFetch } from '../hooks/useFetch';

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
}

interface MealResponse {
    meals: Meal[];
}