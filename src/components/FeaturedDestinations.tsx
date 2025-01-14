const destinations = [
  {
    title: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Experience tropical paradise",
  },
  {
    title: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-6e249e7d84fd",
    description: "Discover Mediterranean charm",
  },
  {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Explore modern culture",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-white/80">{destination.description}</p>
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