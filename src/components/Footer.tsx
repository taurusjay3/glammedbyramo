import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-black text-white">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-bold text-primary">Glammed By Ramo</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Dedicated to making you look and feel your absolute best for any occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Booking", to: "/booking" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="mailto:glammedbyramo@gmail.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 shrink-0" />
                glammedbyramo@gmail.com
              </a>
              <a href="tel:+27826891360" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 shrink-0" />
                +27 82 689 1360
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=14+Rupert+St,+Modimolle,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                14 Rupert St, Modimolle, South Africa
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/glammedbyramo?igsh=aWFmcHc1N2J4empl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585151411389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@glammed_by_ramo?_r=1&_t=ZS-93FczAGYt0y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">
            © 2026 Glammed By Ramo. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-white/40">
            Developed by{" "}
            <a href="https://mjaychaukeportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">everybuddyscousin</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
