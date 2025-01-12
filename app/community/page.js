import Image from 'next/image';
import '../styles/community.css';  

export default function Community() {
  return (
    <div className="community-container">
      <h1>Welcome to Our Community</h1>
      <p>Join the fun and explore exciting events, meals, and discussions!</p>
      <div className="community-items">
        <div className="community-item">
          <Image src="/icons/community.png" alt="Community" width={150} height={150} />
          <h3>Community</h3>
        </div>
        <div className="community-item">
          <Image src="/icons/events.png" alt="Events" width={150} height={150} />
          <h3>Events</h3>
        </div>
        <div className="community-item">
          <Image src="/icons/meal.png" alt="Meals" width={150} height={150} />
          <h3>Meals</h3>
        </div>
      </div>
    </div>
  );
}
