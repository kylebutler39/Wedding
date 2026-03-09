export interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: 'ceremony' | 'reception' | 'travel' | 'attire' | 'gifts';
}

export const faqs: FAQ[] = [
    {
        id: 1,
        category: 'ceremony',
        question: 'What time should we arrive?',
        answer: 'We recommend arriving 30 minutes before the ceremony starts to find parking and get seated comfortably. Late arrivals may be denied entry to the ceremony.'
    },
    {
        id: 2,
        category: 'ceremony',
        question: 'Will the ceremony be indoors or outdoors?',
        answer: 'The ceremony will be held outdoors.'
    },
    {
        id: 3,
        category: 'attire',
        question: 'What is the dress code?',
        answer: 'Formal attire - black tie optional. We would love everyone to dress up, but is not strictly required. For the ladies: floor length gowns or pantsuits. For guys: tuxedos or suits. There will be walking on grass to get to your sets for the ceremony.'
    },
    {
        id: 4,
        category: 'reception',
        question: 'Will there be an open bar?',
        answer: 'Yes.'
    },
    {
        id: 5,
        category: 'reception',
        question: 'Is dinner provided?',
        answer: 'Yes, there will be a buffet style dinner.'
    },
    {
        id: 6,
        category: 'travel',
        question: 'Where should we stay?',
        answer: 'Please message us for recommendations. The closest hotels are approximately 30 minutes away from the venue.'
    },
    {
        id: 7,
        category: 'travel',
        question: 'Is there parking available?',
        answer: 'Yes.'
    },
    {
        id: 8,
        category: 'gifts',
        question: 'Do you have a registry?',
        answer: 'TBD'
    },
    {
        id: 9,
        category: 'gifts',
        question: 'Can I bring a plus one?',
        answer: 'Due to venue capacity, we are only able to accommodate guests formally invited on your invitation. Please contact us if you believe we have missed somebody.'
    }
];

export const categories = {
    ceremony: { label: 'Ceremony' },
    reception: { label: 'Reception' },
    travel: { label: 'Travel & Accommodations' },
    attire: { label: 'Attire' },
    gifts: { label: 'Gifts & Registry' }
};
