import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">vacaygenius</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="flex items-center">
                  Categories <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/destinations" className="text-foreground hover:text-primary">Destinations</Link>
                <Link to="/activities" className="text-foreground hover:text-primary">Activities</Link>
                <Link to="/itineraries" className="text-foreground hover:text-primary">Itineraries</Link>
                <Link to="/support" className="text-foreground hover:text-primary">Support</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;