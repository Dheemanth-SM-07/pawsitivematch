import { getFeaturedPets } from '@/lib/data';
import PetCard from './pet-card';

export default function FeaturedPets() {
  const featuredPets = getFeaturedPets();

  if (featuredPets.length === 0) {
    return <p>No featured pets available at the moment. Check back soon!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
