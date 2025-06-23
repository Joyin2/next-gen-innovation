export default function Services() {
  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive IT solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service cards */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm">
            {/* Card content */}
          </div>
          {/* ... other service cards ... */}
        </div>
      </div>
    </section>
  );
}
