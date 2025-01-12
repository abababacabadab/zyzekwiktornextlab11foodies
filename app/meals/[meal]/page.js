// app/meals/[meal]/page.js
import Image from 'next/image';
 
 export default function MealPage({ params }) {
    const { meal } = params;
     const mealImagePath = `/images/${meal}.jpg`; // Assuming image filenames match meal titles
 
     return (
         <div>
             <h1>{meal}</h1>
              <Image
                 src={mealImagePath}
                  alt={meal}
                 width={300}
                 height={300}
              />
             <p>This is the page for {meal}!</p>
         </div>
     );
 }