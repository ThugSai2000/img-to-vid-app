import { Video, Image, Code, Wand2 } from 'lucide-react';

export const features = [
    {
      icon: Video,
      title: 'AI Video Editing',
      description: 'Edit and enhance videos automatically with our advanced AI algorithms.',
      comingSoon: true,
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals from text descriptions in seconds.',
      comingSoon: false,
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamlessly integrate AI capabilities into your applications.',
      comingSoon: true,
    },
    {
      icon: Wand2,
      title: 'Magic Effects',
      description: 'Apply stunning visual effects with one-click transformations.',
      comingSoon: true,
    },
  ];

 export const showcaseItems = [
    {
      
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      
    },
  ];

  export const plans = [
    {
      name: 'Starter',
      price: '0',
      features: [
        'Basic AI image generation',
        '720p video editing',
        'Community support',
        '5 projects per month',
      ],
    },
    {
      name: 'Pro',
      price: '29',
      features: [
        'Advanced AI generation',
        '4K video editing',
        'Priority support',
        'Unlimited projects',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      features: [
        'Custom AI models',
        '8K video editing',
        'Dedicated support',
        'Unlimited everything',
        'Custom API integration',
        'Team collaboration',
      ],
    },
  ];
  