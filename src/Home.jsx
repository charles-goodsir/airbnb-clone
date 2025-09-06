import React from 'react';
import './home.css'; // or whatever CSS file you want
import Banner from './Banner';
import Card from './Card';

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://images.pexels.com/photos/31517303/pexels-photo-31517303.jpeg"
          title="Experiences"
          description="Unique Experiences led by our wonderful hosts"
        />
        <Card
          src="https://images.pexels.com/photos/33758135/pexels-photo-33758135.jpeg"
          title="Awesome Locations"
          description="Places that are more than just a place to rest"
        />
        <Card
          src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
          title="Entire Holmes"
          description="Comfortable private homes to enjoy alone or with your favourite people"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"
          title="Family Home in Kentucky"
          description="Beautiful Family home in Kentucky surrounded by nature"
          price="$200USD a Night"
        />
        <Card
          src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg"
          title="Great Escape Iceland"
          description="Escape the hustle and bustle with this beautfiul cabin"
          price="$400USD a Night"
        />

        <Card
          src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
          title="Stunning House Los Angeles"
          description="Live like royalty in the this amazing LA home"
          price="$600USD a Night"
        />
      </div>
    </div>
  );
}
