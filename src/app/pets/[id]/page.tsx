import { getPetById, type Pet } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PawPrint, CalendarDays, Tag, Info, Heart, Activity, Ruler } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  // In a real app, you'd fetch all pet IDs
  // For now, using the mock data directly for build time generation
  const { pets } = await import('@/lib/data');
  return pets.map((pet) => ({
    id: pet.id,
  }));
}


export default function PetProfilePage({ params }: { params: { id: string } }) {
  const pet = getPetById(params.id);

  if (!pet) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold mb-4">Pet Not Found</h1>
        <p className="text-muted-foreground">Sorry, we couldn't find the pet you're looking for.</p>
        <Button asChild className="mt-4">
          <Link href="/pets">Back to All Pets</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/pets" className="inline-flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to All Pets
        </Link>
      </Button>
      <Card className="overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              layout="fill"
              objectFit="cover"
              className="md:rounded-l-lg"
              data-ai-hint={pet.dataAiHint}
            />
          </div>
          <div className="p-6 flex flex-col">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-4xl font-bold text-primary flex items-center gap-2">
                <PawPrint className="h-8 w-8" /> {pet.name}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">{pet.breed}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-4 text-foreground flex-grow">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-accent" />
                <span>Type: <strong>{pet.type}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-accent" />
                <span>Age: <strong>{pet.age}</strong></span>
              </div>
               <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-accent" />
                <span>Size: <strong>{pet.size}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent" />
                <span>Energy Level: <strong>{pet.energyLevel}</strong></span>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-lg flex items-center gap-2"><Info className="h-5 w-5 text-accent" />About {pet.name}:</h3>
                <p className="text-base leading-relaxed">{pet.longDescription}</p>
              </div>

              {pet.temperament && pet.temperament.length > 0 && (
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg flex items-center gap-2"><Heart className="h-5 w-5 text-accent" />Temperament:</h3>
                  <div className="flex flex-wrap gap-2">
                    {pet.temperament.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                  </div>
                </div>
              )}

              {pet.needs && pet.needs.length > 0 && (
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg flex items-center gap-2"><PawPrint className="h-5 w-5 text-accent transform rotate-45" />Needs:</h3>
                  <ul className="list-disc list-inside pl-1 space-y-1">
                    {pet.needs.map(need => <li key={need}>{need}</li>)}
                  </ul>
                </div>
              )}
            </CardContent>
            <div className="mt-6 pt-6 border-t">
                <Button size="lg" className="w-full">Adopt {pet.name}</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
