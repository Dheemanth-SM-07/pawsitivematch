import Link from 'next/link';
import { PawPrint, Home, List, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <PawPrint className="h-8 w-8" />
          <h1 className="text-2xl font-bold">PawsitiveMatch</h1>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-1 text-sm sm:text-base">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pets" className="flex items-center gap-1 text-sm sm:text-base">
              <List className="h-4 w-4" />
              Pets
            </Link>
          </Button>
          <Button variant="ghost" asChild>
             <Link href="/matchmaker" className="flex items-center gap-1 text-sm sm:text-base">
               <Sparkles className="h-4 w-4" />
               Matchmaker
             </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
