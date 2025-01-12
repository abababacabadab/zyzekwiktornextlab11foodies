import Link from 'next/link';
   import Image from 'next/image';

    export default function MealCard({ image, title, rating }) {
        return (
            <Link href={`/meals/${title.toLowerCase().replace(/ /g, '-')}`}>
                <div className="meal-card">
                   <Image src={`/images/${image}`} alt={title} width={200} height={150} />
                    <h3>{title}</h3>
                    {rating && <p>Rating: {rating}</p>}
                </div>
            </Link>
        );
    }