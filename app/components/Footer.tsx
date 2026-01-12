import { ArrowRight, BookOpen, GraduationCap, Heart, ImageIcon, LucideIcon, Mail, MapPin, MessageCircle, Phone, Star, Users } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const Footer = () => {
  const navigationItems: NavigationItem[] = [
    { title: "Home", url: ("/"), icon: GraduationCap },
    { title: "About", url: ("/about"), icon: Heart },
    { title: "Academics", url: ("/academics"), icon: BookOpen },
    { title: "Admissions", url: ("/admissions"), icon: Users },
    { title: "Gallery", url: ("/gallery"), icon: ImageIcon },
    { title: "Contact", url: ("/contact"), icon: MessageCircle },
  ];
  return (
    <div>
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* School info with creative design */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Excellence Schools</h3>
                  <p className="text-orange-300 font-semibold">Shaping Nigeria&apos;s Future</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                For over 15 years, we&apos;ve been nurturing young minds to become confident,
                capable leaders who will transform Nigeria and the world.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <MapPin className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>Plot 123, Adeola Odeku Street, Victoria Island, Lagos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>+234 803 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>info@excellenceschools.edu.ng</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((item: NavigationItem) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Our Programs
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Primary Education (Ages 6-11)</li>
                <li className="hover:text-white transition-colors cursor-pointer">Junior Secondary (JSS 1-3)</li>
                <li className="hover:text-white transition-colors cursor-pointer">Senior Secondary (SSS 1-3)</li>
                <li className="hover:text-white transition-colors cursor-pointer">WAEC/JAMB Preparation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Extracurricular Activities</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 dark:text-gray-500 text-center lg:text-left">
                © 2024 Excellence Schools Lagos. All rights reserved.
                <span className="text-orange-300 dark:text-orange-400 font-semibold"> Building Nigeria&apos;s Future Since 2010.</span>
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 dark:text-yellow-500 fill-current" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">Trusted by 500+ Families</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer