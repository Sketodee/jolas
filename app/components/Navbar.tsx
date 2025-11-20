'use client'
import React, { useState } from "react";
import { 
  GraduationCap, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  BookOpen,
  Users,
  Image as ImageIcon,
  MessageCircle,
  Heart,
  Star,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface LayoutProps {
  children: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  { title: "Home", url: ("/"), icon: GraduationCap },
  { title: "About", url: ("/about"), icon: Heart },
  { title: "Academics", url: ("/academics"), icon: BookOpen },
  { title: "Admissions", url: ("/admissions"), icon: Users },
  { title: "Gallery", url: ("/gallery"), icon: ImageIcon },
  { title: "Contact", url: ("/contact"), icon: MessageCircle },
];

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleMobileMenuToggle = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Creative top bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-3 px-4 hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Phone className="w-4 h-4 text-orange-300" />
              <span className="font-medium">+234 803 123 4567</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Mail className="w-4 h-4 text-orange-300" />
              <span className="font-medium">info@excellenceschools.edu.ng</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="font-medium">Rated #1 School in Lagos</span>
          </div>
        </div>
      </div>

      {/* Main header with creative design */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Creative logo */}
            <Link href={("/")} className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:rotate-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black text-gray-900 group-hover:text-blue-700 transition-colors">
                  Excellence Schools
                </h1>
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Nurturing Tomorrow's Leaders
                </p>
              </div>
            </Link>

            {/* Creative navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item: NavigationItem) => (
            <Link
      key={item.title}
      href={item.url}
      className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
        pathname === item.url
          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-lg"
          : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700"
      }`}
    >
      {item.title}
      {pathname === item.url && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
      )}
    </Link>
              ))}
            </nav>

            {/* Creative CTA button */}
            <div className="hidden lg:block">
              <Link href={("admissions")}>
                <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-6 py-2 rounded-xl font-semibold">
                  Apply Now
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item: NavigationItem) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    location.pathname === item.url
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </Link>
              ))}
              <div className="pt-4">
                <Link href={"admissions"} onClick={closeMobileMenu}>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Layout;
