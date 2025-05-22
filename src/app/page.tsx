import FeaturedPets from '@/components/featured-pets';
import AiPetMatchmakerForm from '@/components/ai-pet-matchmaker-form';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 shadow-inner">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Welcome to PawsitiveMatch!
        </h1>
        <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto">
          Your journey to finding the perfect companion starts here. Explore our adorable pets or let our AI help you find your soulmate on paws.
        </p>
      </section>

      <section id="featured-pets">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Featured Friends
        </h2>
        <FeaturedPets />
      </section>

      <section id="ai-matchmaker" className="py-10 bg-card rounded-lg shadow-lg">
         <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Can't Decide? Let Our AI Help!
          </h2>
          <AiPetMatchmakerForm />
        </div>
      </section>
    </div>
  );
}
