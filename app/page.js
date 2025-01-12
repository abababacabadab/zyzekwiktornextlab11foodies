// app/page.js
import MealCard from './components/MealCard';

export default function Home() {
  const meals = [
    { image: 'burger.jpg', title: 'Burger' },
    { image: 'curry.jpg', title: 'Curry' },
    { image: 'pizza.jpg', title: 'Pizza' },
  ];
  

  return (
    <div>
      <h1>Welcome to NextLevel Food!</h1>
      <p>Explore delicious meals and share them with others.</p>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <MealCard key={index} image={meal.image} title={meal.title} />
        ))}
      </div>
    </div>
  );
}
