'use server';

/**
 * @fileOverview AI-powered pet matchmaker flow.
 *
 * - petMatchmaker - A function that suggests potential pet matches based on user lifestyle and preferences.
 * - PetMatchmakerInput - The input type for the petMatchmaker function.
 * - PetMatchmakerOutput - The return type for the petMatchmaker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PetMatchmakerInputSchema = z.object({
  lifestyle: z
    .string()
    .describe('Description of the user lifestyle, including living situation, family, and activity level.'),
  preferences: z.string().describe('Specific pet preferences, such as type of animal, size, age, and temperament.'),
});
export type PetMatchmakerInput = z.infer<typeof PetMatchmakerInputSchema>;

const PetMatchmakerOutputSchema = z.object({
  suggestedPets: z
    .array(z.string())
    .describe('A list of pet types or breeds that would be a good match for the user.'),
  reasoning: z
    .string()
    .describe('Explanation of why these pets are suggested based on the user input.'),
});
export type PetMatchmakerOutput = z.infer<typeof PetMatchmakerOutputSchema>;

export async function petMatchmaker(input: PetMatchmakerInput): Promise<PetMatchmakerOutput> {
  return petMatchmakerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'petMatchmakerPrompt',
  input: {schema: PetMatchmakerInputSchema},
  output: {schema: PetMatchmakerOutputSchema},
  prompt: `You are an AI pet matchmaker that suggests pets based on lifestyle and preferences.

  Based on the user's lifestyle and pet preferences, provide a list of pet types or breeds that would be a good match for them.
  Also, explain why you are suggesting these pets.

  Lifestyle: {{{lifestyle}}}
  Preferences: {{{preferences}}}
  `,
});

const petMatchmakerFlow = ai.defineFlow(
  {
    name: 'petMatchmakerFlow',
    inputSchema: PetMatchmakerInputSchema,
    outputSchema: PetMatchmakerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
