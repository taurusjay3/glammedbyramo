import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Calendar } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

const WHATSAPP_LINK = "https://wa.me/27826891360?text=Hi%20Ramo%2C%20I%27d%20like%20to%20book%20a%20session!";

const services = [
  { name: "Soft Glam", price: "R450" },
  { name: "Full Glam", price: "R650" },
  { name: "Bride", price: "R750" },
  { name: "Bridal Trial", price: "R600" },
  { name: "Bridesmaids", price: "R500" },
];

const portfolioPhotos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Glammed By Ramo hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/30" />
        <div className="container relative z-10 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
              Professional Makeup Artist
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Glammed By Ramo
              </span>
            </h1>
            <p className="text-lg text-white/90 sm:text-xl">
              Where beauty is enhanced, confidence is celebrated and every face tells a story.
            </p>
            <p className="font-heading text-base italic text-white/80">
              "Makeup is not a mask — it's a form of self-expression."
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:opacity-90">
                <Link to="/services">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Session
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">What We Offer</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Services & Pricing</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-md">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <span className="font-heading text-lg font-bold text-primary">{service.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Travel policy: A travel fee may apply for locations outside Modimolle.
          </p>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Our Work</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Portfolio</h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {portfolioPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
              >
                <img src={photo} alt={`Makeup look ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Get Started</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Ready to Get Glammed?</h2>
            <p className="mt-4 text-muted-foreground">
              Book your session via WhatsApp. A 50% non-refundable deposit is required to secure your booking.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-card p-6 text-left">
              <h3 className="font-heading text-lg font-semibold text-foreground">Payment Details</h3>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Bank:</span> Capitec</p>
                <p><span className="font-medium text-foreground">Account:</span> 1222619138</p>
                <p><span className="font-medium text-foreground">Beneficiary:</span> RE Mashishi</p>
              </div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:opacity-90">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                BOOK NOW
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
