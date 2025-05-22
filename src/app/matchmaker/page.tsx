import AiPetMatchmakerForm from '@/components/ai-pet-matchmaker-form';

export default function MatchmakerPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">AI Pet Matchmaker</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answer a few questions about your lifestyle and preferences, and our smart AI will help you find pet breeds or types that could be your perfect match!
        </p>
      </section>
      <section className="flex justify-center">
        <AiPetMatchmakerForm />
      </section>
    </div>
  );
}
