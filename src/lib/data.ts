
export interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat' | 'Bird' | 'Hamster' | 'Rabbit';
  breed: string;
  age: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  dataAiHint: string;
  featured?: boolean;
  needs: string[];
  temperament: string[];
  size: 'Small' | 'Medium' | 'Large';
  energyLevel: 'Low' | 'Medium' | 'High';
}

export const pets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    description: 'Friendly and playful, loves long walks.',
    longDescription: 'Buddy is an incredibly affectionate Golden Retriever with a heart full of joy. He adores children and gets along well with other dogs. He is house-trained and knows basic commands. Buddy would thrive in an active family that can provide him with plenty of exercise and mental stimulation.',
    imageUrl: 'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg',
    dataAiHint: 'golden retriever',
    featured: true,
    needs: ['Daily walks (1-2 hours)', 'Large fenced yard', 'Regular grooming'],
    temperament: ['Friendly', 'Intelligent', 'Playful', 'Gentle'],
    size: 'Large',
    energyLevel: 'High',
  },
  {
    id: '2',
    name: 'Whiskers',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 year',
    description: 'Vocal and affectionate, enjoys lounging.',
    longDescription: 'Whiskers is a classic Siamese with striking blue eyes and a charming personality. She loves to "talk" and will follow you around the house, seeking attention and pets. She enjoys interactive toys and a cozy spot in the sun. Whiskers would be a great companion for someone who appreciates a communicative and loving cat.',
    imageUrl: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/05/Siamese-cat-beautiful-768x514.jpg',
    dataAiHint: 'siamese cat',
    featured: true,
    needs: ['Interactive playtime', 'Scratching posts', 'Warm bed'],
    temperament: ['Affectionate', 'Vocal', 'Curious', 'Intelligent'],
    size: 'Medium',
    energyLevel: 'Medium',
  },
  {
    id: '3',
    name: 'Chirpy',
    type: 'Bird',
    breed: 'Canary',
    age: '6 months',
    description: 'Sings beautifully, enjoys a spacious cage.',
    longDescription: 'Chirpy is a delightful young Canary معروف for his beautiful songs. He is relatively low-maintenance but requires a clean, spacious cage with various perches and toys. Listening to Chirpy sing can brighten anyone\'s day. He is a bit shy but will warm up with gentle interaction.',
    imageUrl: 'https://static.wikia.nocookie.net/rio/images/e/ea/Yellow_Canary.png/revision/latest?cb=20130726050704',
    dataAiHint: 'canary bird',
    featured: true,
    needs: ['Spacious cage', 'Fresh food and water daily', 'Quiet environment'],
    temperament: ['Melodious', 'Independent', 'Gentle'],
    size: 'Small',
    energyLevel: 'Low',
  },
  {
    id: '4',
    name: 'Nibbles',
    type: 'Hamster',
    breed: 'Syrian',
    age: '3 months',
    description: 'Cute and curious, loves to explore.',
    longDescription: 'Nibbles is an adorable Syrian hamster who is most active at night. He loves running on his wheel, burrowing in his bedding, and exploring tunnels. Nibbles is generally solitary and prefers his own space but can be handled gently. He needs a secure cage with plenty of enrichment.',
    imageUrl: 'https://www.petakids.com/wp-content/uploads/2016/10/Hamster-thumbnail.jpg',
    dataAiHint: 'syrian hamster',
    needs: ['Secure cage with deep bedding', 'Exercise wheel', 'Chew toys'],
    temperament: ['Curious', 'Nocturnal', 'Solitary'],
    size: 'Small',
    energyLevel: 'Medium',
  },
  {
    id: '5',
    name: 'Snowball',
    type: 'Rabbit',
    breed: 'Netherland Dwarf',
    age: '8 months',
    description: 'Shy but sweet, needs gentle handling.',
    longDescription: 'Snowball is a charming Netherland Dwarf rabbit with soft, white fur. He can be a bit timid at first but warms up with patient and gentle handling. Snowball enjoys fresh hay, leafy greens, and a spacious hutch with room to hop around. He is litter-trainable and very clean.',
    imageUrl: 'https://image.petmd.com/files/styles/978x550/public/2023-08/netherland.dwarf_.jpg?w=2048&q=75',
    dataAiHint: 'dwarf rabbit',
    needs: ['Spacious hutch', 'Unlimited hay', 'Fresh vegetables daily', 'Gentle handling'],
    temperament: ['Shy', 'Sweet', 'Quiet', 'Clean'],
    size: 'Small',
    energyLevel: 'Medium',
  },
  {
    id: '6',
    name: 'Max',
    type: 'Dog',
    breed: 'Labrador Retriever',
    age: '3 years',
    description: 'Loyal and energetic, great family dog.',
    longDescription: 'Max is a classic black Labrador Retriever, full of energy and love. He is extremely loyal and makes a fantastic companion for families with children. Max requires regular exercise and enjoys activities like fetching and swimming. He is well-trained and eager to please.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Downloader_17.png?v=1687332270',
    dataAiHint: 'labrador dog',
    featured: false,
    needs: ['Daily vigorous exercise', 'Interactive toys', 'Consistent training'],
    temperament: ['Loyal', 'Energetic', 'Friendly', 'Outgoing'],
    size: 'Large',
    energyLevel: 'High',
  },
];

export const getPetById = (id: string): Pet | undefined => pets.find(pet => pet.id === id);

export const getFeaturedPets = (): Pet[] => pets.filter(pet => pet.featured);
