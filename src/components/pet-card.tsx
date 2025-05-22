import Image from 'next/image';
import Link from 'next/link';
import type { Pet } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={pet.imageUrl}
            alt={pet.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={pet.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-semibold mb-1">{pet.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{pet.breed}</p>
        <p className="text-sm text-foreground line-clamp-2">{pet.description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/pets/${pet.id}`} className="flex items-center justify-center gap-2">
            View Profile <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
