import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CreditCard, AlertTriangle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/27826891360?text=Hi%20Ramo%2C%20I%27d%20like%20to%20book%20a%20session!";

const Booking = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-accent/50 to-background py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Let's Get Started</p>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ready to Get Glammed?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Book your makeup session with Ramo via WhatsApp. Let's create your perfect look together!
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:opacity-90"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                BOOK NOW
              </a>
            </Button>

            <div className="mt-12 space-y-6">
              {/* Payment Details */}
              <Card className="border-border/50 text-left">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h2 className="font-heading text-xl font-semibold text-foreground">Payment Details</h2>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Bank:</span> Capitec
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Account Number:</span> 1222619138
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Beneficiary:</span> RE Mashishi
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Deposit Notice */}
              <Card className="border-primary/20 bg-accent/30 text-left">
                <CardContent className="flex items-start gap-3 p-6">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">Deposit Required</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A <span className="font-semibold text-foreground">50% non-refundable deposit</span> is required to secure your booking. 
                      The remaining balance is due on the day of the appointment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
