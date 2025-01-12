import '../../styles/ranking.css';  
import MealCard from '../../components/MealCard';

export default function Ranking() {
  const meals = [
    { image: 'burger.jpg', title: 'Burger', rating: 4.8 },
    { image: 'curry.jpg', title: 'Curry', rating: 4.5 },
    { image: 'pizza.jpg', title: 'Pizza', rating: 4.9 },
    { image: 'dumplings.jpg', title: 'Dumplings', rating: 4.7 },
    { image: 'macncheese.jpg', title: 'Mac & Cheese', rating: 4.6 },
    { image: 'schnitzel.jpg', title: 'Schnitzel', rating: 4.3 },
    { image: 'tomato-salad.jpg', title: 'Tomato Salad', rating: 4.2 }
  ];

  const sortedMeals = meals.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <h1>Meal Ranking</h1>
      <p>Discover the best-rated meals!</p>
      <div className="meal-list">
        {sortedMeals.map((meal, index) => (
          <MealCard key={index} image={meal.image} title={meal.title} rating={meal.rating} />
        ))}
      </div>
    </div>
  );
}
