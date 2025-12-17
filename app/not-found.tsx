import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="h-12 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-base font-bold flex items-center gap-2">
              <Home size={18} />
              Go Home
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" className="h-12 px-8 rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 text-base font-medium flex items-center gap-2">
              <ArrowLeft size={18} />
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

