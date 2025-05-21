import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Contact7 } from '@/components/ui/contact-7';
import { Feature } from '@/components/ui/feature-with-image-carousel';
import { Gallery6 } from '@/components/ui/gallery6';
import { Footer } from '@/components/ui/footer-section';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

const LandingPage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex items-center justify-between">
          <div className="font-bold text-2xl text-primary">HabitVault</div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className={cn(
          "relative bg-background text-foreground",
          "py-16 px-4 md:py-24 lg:py-32",
          "overflow-hidden"
        )}>
          <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
            <div className="relative z-10 flex flex-col items-center gap-6 pt-8 text-center lg:gap-12">
              {/* Heading */}
              <h1 className={cn(
                "inline-block animate-appear",
                "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
                "bg-clip-text text-transparent",
                "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                "leading-[1.1] sm:leading-[1.1]",
                "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
              )}>
                Build better habits, one day at a time
              </h1>

              {/* Description */}
              <p className={cn(
                "max-w-[550px] animate-appear opacity-0 [animation-delay:150ms]",
                "text-base sm:text-lg md:text-xl",
                "text-muted-foreground",
                "font-medium",
              )}>
                Track your habits, build streaks, and achieve your goals with our intuitive habit tracking platform.
              </p>

              {/* CTA */}
              <div className="relative z-10 flex flex-wrap justify-center gap-4 
                animate-appear opacity-0 [animation-delay:300ms]">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "bg-gradient-to-b from-brand to-brand/90 dark:from-brand/90 dark:to-brand/80",
                    "hover:from-brand/95 hover:to-brand/85 dark:hover:from-brand/80 dark:hover:to-brand/70",
                    "text-white shadow-lg",
                    "transition-all duration-300",
                  )}
                >
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <Feature />

        {/* Blog Resources Section */}
        <Gallery6 />

        <Contact7 
          title="Get in Touch"
          description="Have questions about HabitVault? Our team is here to help you succeed on your habit-building journey."
          emailLabel="Email Support"
          emailDescription="We aim to respond to all inquiries within 24 hours."
          email="support@habitvault.com"
          officeLabel="Visit Us"
          officeDescription="Come by our office to meet the team."
          officeAddress="123 Productivity Lane, San Francisco, CA 94105"
          phoneLabel="Phone Support"
          phoneDescription="Available Monday through Friday, 9 AM - 6 PM PST"
          phone="+1 (555) 123-4567"
        />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
