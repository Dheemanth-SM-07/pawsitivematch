'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { petMatchmaker, type PetMatchmakerInput, type PetMatchmakerOutput } from '@/ai/flows/pet-matchmaker';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  lifestyle: z.string().min(20, { message: "Please describe your lifestyle in a bit more detail (at least 20 characters)." }),
  preferences: z.string().min(10, { message: "Please tell us your pet preferences (at least 10 characters)." }),
});

type FormData = z.infer<typeof formSchema>;

export default function AiPetMatchmakerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PetMatchmakerOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lifestyle: '',
      preferences: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const matchmakerInput: PetMatchmakerInput = {
        lifestyle: data.lifestyle,
        preferences: data.preferences,
      };
      const response = await petMatchmaker(matchmakerInput);
      setResult(response);
      toast({
        title: "Match Found!",
        description: "We've found some potential pets for you.",
        action: <CheckCircle className="text-green-500" />,
      });
    } catch (e) {
      console.error("Error calling pet matchmaker AI:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: `Failed to find a match: ${errorMessage}`,
        variant: "destructive",
        action: <AlertTriangle className="text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          AI Pet Matchmaker
        </CardTitle>
        <CardDescription>
          Tell us about yourself and what you're looking for, and our AI will suggest the perfect furry (or feathery!) friend for you.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="lifestyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Your Lifestyle</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I live in an apartment, work from home, and enjoy quiet evenings. I have a small child."
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Pet Preferences</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Looking for a small, hypoallergenic dog that is good with kids and doesn't bark much."
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Finding your match...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Match
                </>
              )}
            </Button>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </CardFooter>
        </form>
      </Form>

      {result && (
        <div className="p-6 border-t">
          <h3 className="text-xl font-semibold mb-3 text-primary">Our Suggestions For You:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-md">Suggested Pets:</h4>
              {result.suggestedPets.length > 0 ? (
                <ul className="list-disc list-inside pl-4 text-foreground">
                  {result.suggestedPets.map((pet, index) => (
                    <li key={index}>{pet}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific pets matched, try adjusting your preferences.</p>
              )}
            </div>
            <div>
              <h4 className="font-medium text-md">Reasoning:</h4>
              <p className="text-foreground whitespace-pre-line">{result.reasoning}</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
