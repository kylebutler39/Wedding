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
        answer: 'We recommend arriving 20-30 minutes before the ceremony starts to find parking and get seated comfortably.'
    },
    {
        id: 2,
        category: 'ceremony',
        question: 'Will the ceremony be indoors or outdoors?',
        answer: 'The ceremony will be held outdoors in the garden. In case of rain, we have a beautiful indoor space prepared as a backup.'
    },
    {
        id: 3,
        category: 'attire',
        question: 'What is the dress code?',
        answer: 'Semi-formal attire. Think cocktail dresses, suits, or dressy separates. Please avoid white, ivory, or cream colors.'
    },
    {
        id: 4,
        category: 'attire',
        question: 'What should I wear if the ceremony is outdoors?',
        answer: 'We recommend wearing comfortable shoes suitable for grass. Wedges or block heels work better than stilettos!'
    },
    {
        id: 5,
        category: 'reception',
        question: 'Will there be an open bar?',
        answer: 'Yes! We will have a full open bar with wine, beer, and signature cocktails throughout the reception.'
    },
    {
        id: 6,
        category: 'reception',
        question: 'Is dinner provided?',
        answer: 'Yes, a plated dinner will be served. Please make sure to indicate any dietary restrictions when you RSVP.'
    },
    {
        id: 7,
        category: 'travel',
        question: 'Where should we stay?',
        answer: 'We have reserved room blocks at the Hilton Garden Inn and Courtyard Marriott. Booking links are available on our Travel page.'
    },
    {
        id: 8,
        category: 'travel',
        question: 'Is there parking available?',
        answer: 'Yes, there is complimentary parking available at the venue. Valet service will also be provided.'
    },
    {
        id: 9,
        category: 'gifts',
        question: 'Do you have a registry?',
        answer: 'Your presence is the greatest gift! However, if you wish to give something, we have registries at Crate & Barrel and Zola.'
    },
    {
        id: 10,
        category: 'gifts',
        question: 'Can I bring a plus one?',
        answer: 'Due to venue capacity, we are only able to accommodate guests formally invited on your invitation. Please check your RSVP for details.'
    }
];

export const categories = {
    ceremony: { label: 'Ceremony' },
    reception: { label: 'Reception' },
    travel: { label: 'Travel & Accommodations' },
    attire: { label: 'Attire' },
    gifts: { label: 'Gifts & Registry' }
};