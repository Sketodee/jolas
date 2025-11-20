import React from "react";
import { GraduationCap, BookOpen, Users, ArrowRight, Clock, Star, Sparkles, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Program {
  level: string;
  age: string;
  grades: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
  features: string[];
  image: string;
  highlight?: string;
}

const programs: Program[] = [
  {
    level: "Primary Foundation",
    age: "Ages 6-11",
    grades: "Primary 1-6",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    description: "Building strong foundations through play-based learning and creative exploration.",
    features: ["Creative Learning", "Character Building", "STEAM Activities"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlight: "Most Popular"
  },
  {
    level: "Junior Secondary",
    age: "Ages 12-14", 
    grades: "JSS 1-3",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    description: "Developing critical thinking and preparing for specialized tracks.",
    features: ["Core Subjects", "Leadership Skills", "Project Learning"],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    level: "Senior Secondary",
    age: "Ages 15-17",
    grades: "SSS 1-3", 
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    description: "University preparation with specialized tracks and career guidance.",
    features: ["WAEC Prep", "University Guidance", "Career Focus"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Custom Button Components
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'default',
  variant = 'default',
  onClick 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    default: "text-white shadow-lg hover:shadow-xl transform hover:scale-105",
    outline: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Programs: React.FC = () => {
  const getDarkModeColors = (colorClass: string): string => {
    const darkModeMap: { [key: string]: string } = {
      "from-blue-500 to-cyan-500": "dark:from-blue-400 dark:to-cyan-400",
      "from-orange-500 to-red-500": "dark:from-orange-400 dark:to-red-400",
      "from-green-500 to-emerald-500": "dark:from-green-400 dark:to-emerald-400",
      "from-blue-50 to-cyan-50": "dark:from-blue-950/50 dark:to-cyan-950/50",
      "from-orange-50 to-red-50": "dark:from-orange-950/50 dark:to-red-950/50",
      "from-green-50 to-emerald-50": "dark:from-green-950/50 dark:to-emerald-950/50"
    };
    return darkModeMap[colorClass] || "";
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/30 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-4 h-4 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-orange-400 dark:bg-orange-500 rounded-full animate-pulse delay-1000"></div>
        <Sparkles className="absolute top-1/2 right-1/4 w-8 h-8 text-green-400 dark:text-green-500 animate-bounce delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative header section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-400 font-semibold">ACADEMIC JOURNEY</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
            From First Steps to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 dark:from-blue-400 dark:via-purple-400 dark:to-orange-400 mt-2">
              Future Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every child's journey is unique. Our three-tier system ensures seamless progression 
            from curious beginners to confident graduates ready for university and beyond.
          </p>
        </div>

        {/* Programs with alternating layout */}
        <div className="space-y-24">
          {programs.map((program: Program, index: number) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Image section */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} ${getDarkModeColors(program.color)} rounded-[2.5rem] transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} scale-105 opacity-20 blur-xl`}></div>
                
                <div className="relative">
                  <img 
                    src={program.image}
                    alt={`${program.level} at Excellence Schools`}
                    className={`w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl dark:shadow-gray-900/50 transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform duration-500 border border-white/20 dark:border-gray-700/30`}
                  />
                  
                  {/* Dark mode overlay for image */}
                  <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 rounded-[2.5rem] transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform duration-500"></div>
                  
                  {/* Floating badge */}
                  {program.highlight && (
                    <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/50 rounded-2xl p-4 transform rotate-12 hover:rotate-6 transition-transform duration-300 border border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{program.highlight}</span>
                      </div>
                    </div>
                  )}

                  {/* Program icon overlay */}
                  <div className={`absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br ${program.color} ${getDarkModeColors(program.color)} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className={`bg-gradient-to-br ${program.bgColor} ${getDarkModeColors(program.bgColor)} rounded-3xl p-8 lg:p-12 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-300 border border-white/20 dark:border-gray-700/20 shadow-lg dark:shadow-gray-900/20`}>
                  
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${program.color} ${getDarkModeColors(program.color)} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg`}>
                    <span>{program.grades}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
                    {program.level}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {program.age}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {program.features.map((feature: string, idx: number) => (
                      <span key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-white/50 dark:border-gray-700/50 shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href={"academics"}>
                    <Button className={`bg-gradient-to-r ${program.color} ${getDarkModeColors(program.color)} hover:shadow-xl text-white group transform hover:scale-105 transition-all duration-200`}>
                      Explore Program
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of families who've chosen excellence for their children's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"admissions"}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:shadow-xl text-white">
                  Apply Today
                </Button>
              </Link>
              <Link href={"contact"}>
                <Button size="lg" variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-950/50 border-2">
                  Book a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;