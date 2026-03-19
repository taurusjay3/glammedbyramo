import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Car } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/27826891360?text=Hi%20Ramo%2C%20I%27d%20like%20to%20book%20a%20session!";

const serviceCategories = [
  {
    title: "Makeup Services",
    services: [
      { name: "Soft Glam", price: "R450", description: "A natural, radiant look perfect for everyday events" },
      { name: "Full Glam", price: "R650", description: "A bold, stunning look for special occasions" },
    ],
  },
  {
    title: "Bridal Makeup",
    services: [
      { name: "Bride", price: "R750", description: "Flawless bridal makeup for your special day" },
      { name: "Bridal Trial", price: "R600", description: "Pre-wedding trial to perfect your look" },
      { name: "Bridesmaids", price: "R500", description: "Beautiful coordinated looks for the bridal party" },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-accent/50 to-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">What We Offer</p>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Services & Pricing</h1>
            <p className="mt-4 text-muted-foreground">
              Professional makeup services tailored to make you look and feel your best.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            {serviceCategories.map((category) => (
              <div key={category.title}>
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <Card key={service.name} className="border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                      <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-3">
                          <Heart className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium text-foreground">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                        <span className="font-heading text-2xl font-bold text-primary">{service.price}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Travel Policy */}
            <Card className="border-primary/20 bg-accent/30">
              <CardContent className="flex items-start gap-3 p-6">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Travel Policy</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A travel fee may apply for locations outside of Modimolle. Please contact us for a quote based on your location.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:opacity-90">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Session
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
