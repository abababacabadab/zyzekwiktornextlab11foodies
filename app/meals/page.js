import MealCard from '../components/MealCard';

export default function Meals() {
  const meals = [
    { image: 'burger.jpg', title: 'Burger' },
    { image: 'curry.jpg', title: 'Curry' },
    { image: 'pizza.jpg', title: 'Pizza' },
    { image: 'dumplings.jpg', title: 'Dumpling' },
    { image: 'macncheese.jpg', title: 'Mac & Cheese' },
    { image: 'schnitzel.jpg', title: 'Schnitzel' },
    { image: 'tomato-salad.jpg', title: 'Tomato Salad' }
  ];

  return (
    <div>
      <h1>Meals</h1>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <MealCard key={index} image={meal.image} title={meal.title} />
        ))}
      </div>
    </div>
  );
}
