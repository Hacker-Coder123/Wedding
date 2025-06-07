import React from 'react';

const cardData = [
  {
    title: 'Wedding Events',
    description: 'Beautiful wedding themes and grand entries.',
    image: 'https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg'
  },
  {
    title: 'Bride & Groom Entries',
    description: 'Royal and cinematic bride & groom entries.',
    image: 'https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
  },
  {
    title: 'Carnival Shows',
    description: 'Fun-filled carnival themed parties.',
    image: 'https://i.pinimg.com/736x/e1/5b/77/e15b77270ed56f22da0902b60b84e778.jpg'
  },
  {
    title: 'Corporate Shows',
    description: 'Professional corporate event management.',
    image: 'https://i.pinimg.com/736x/56/2d/41/562d412ac977288f3a9aef16924a75e7.jpg'
  }
];

export default function Home() {
  return (
    <>
    <div className="home-container">
      <h1>Welcome to Sansa Innovation</h1>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="dynamic-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
