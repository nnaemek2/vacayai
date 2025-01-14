const destinations = [
  {
    title: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Experience tropical paradise with pristine beaches and rich culture",
  },
  {
    title: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-6e249e7d84fd",
    description: "Discover Mediterranean charm and stunning sunsets",
  },
  {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Immerse yourself in modern culture and technology",
  },
  {
    title: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    description: "Experience breathtaking mountain landscapes",
  },
  {
    title: "Maui, Hawaii",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "Relax on pristine beaches and explore volcanic landscapes",
  },
  {
    title: "Paris, France",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    description: "Explore the city of lights and romance",
  },
  {
    title: "Queenstown, New Zealand",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Adventure capital with stunning natural beauty",
  },
  {
    title: "Maldives",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    description: "Paradise on Earth with overwater bungalows",
  },
  {
    title: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Experience luxury and modern architectural marvels",
  },
  {
    title: "Banff, Canada",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Discover pristine wilderness and mountain lakes",
  },
  {
    title: "Amalfi Coast, Italy",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    description: "Explore dramatic coastlines and charming villages",
  },
  {
    title: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    description: "Where mountains meet the ocean",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-4">
          Popular Destinations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of the world's most breathtaking destinations, 
          each offering unique experiences and unforgettable memories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {destination.title}
                  </h3>
                  <p className="text-white/90 text-sm transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;