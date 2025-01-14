import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = {
    discover: {
      title: "Discover",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Our Pricing", href: "/pricing" },
        { text: "Popular Destinations", href: "/destinations" },
        { text: "Travel Guides", href: "/guides" },
        { text: "Featured Trips", href: "/featured" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Terms & Conditions", href: "/terms" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Cookie Policy", href: "/cookies" },
        { text: "Licensing", href: "/licensing" },
      ],
    },
    help: {
      title: "Help",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Contact Support", href: "/support" },
        { text: "FAQs", href: "/faqs" },
        { text: "Community", href: "/community" },
      ],
    },
    about: {
      title: "About Us",
      links: [
        { text: "Our Story", href: "/story" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
        { text: "Blog", href: "/blog" },
      ],
    },
  };

  return (
    <footer className="bg-background border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">vacaygenius</span>
            </Link>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
            </div>
          </div>
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-primary"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VacayGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;