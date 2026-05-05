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

export default function Home() {
    const { data, loading, error } = useFetch<MealResponse>(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;
    return (
        <div>
            <h1>Meals</h1>
            <ul>
                {data?.meals.map(meal => (
                    <li key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <p>Category: {meal.strCategory}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}