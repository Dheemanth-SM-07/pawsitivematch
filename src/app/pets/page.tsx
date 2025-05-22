import { pets as allPets, type Pet } from '@/lib/data';
import PetCard from '@/components/pet-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';

// This would be a server component that fetches and initially filters pets.
// For now, we'll use the mock data directly. Client-side filtering can be added later.

export default function AllPetsPage() {
  // Placeholder for filter state and logic
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedType, setSelectedType] = useState('all');
  // const filteredPets = allPets.filter(p => ...);

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Find Your New Best Friend</h1>
        <p className="text-lg text-muted-foreground">Browse our available pets. Your perfect companion awaits!</p>
      </section>

      <section className="sticky top-[65px] z-40 bg-background/80 backdrop-blur-md py-4 rounded-lg shadow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full md:w-auto">
              <Input 
                type="search" 
                placeholder="Search by name, breed..." 
                className="pl-10" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
                <SelectItem value="bird">Birds</SelectItem>
                <SelectItem value="hamster">Hamsters</SelectItem>
                <SelectItem value="rabbit">Rabbits</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      <section>
        {allPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allPets.map((pet: Pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No pets available matching your criteria. Please try different filters or check back soon!
          </p>
        )}
      </section>
    </div>
  );
}
