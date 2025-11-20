import React from "react";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Globe, 
  Lightbulb, 
  Heart,
  Laptop,
  Music,
  Zap,
  Target,
  LucideIcon
} from "lucide-react";

type ColorVariant = "blue" | "purple" | "green" | "orange" | "indigo" | "red";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorVariant;
  highlight?: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

interface ColorMap {
  [key: string]: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "World-Class Curriculum",
    description: "Nigerian curriculum enhanced with global perspectives and innovative teaching methods.",
    color: "blue",
    highlight: "Featured"
  },
  {
    icon: Users,
    title: "Expert Educators",
    description: "Passionate teachers with international qualifications and years of experience.",
    color: "purple"
  },
  {
    icon: Laptop,
    title: "Smart Classrooms",
    description: "Technology-integrated learning with interactive boards and modern equipment.",
    color: "green"
  },
  {
    icon: Trophy,
    title: "Sports Excellence", 
    description: "Comprehensive athletics program including football, basketball, and swimming.",
    color: "orange",
    highlight: "Popular"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International connections and exchange programs to broaden student horizons.",
    color: "indigo"
  },
  {
    icon: Heart,
    title: "Character Building",
    description: "Strong emphasis on values, leadership, and community service.",
    color: "red"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-100/30 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with organic layout */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-orange-500 dark:text-orange-400" />
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 max-w-4xl">
            Education That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"> Transforms Lives</span>
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              We don't just teach subjects—we nurture future leaders, innovators, and change-makers 
              who will shape Nigeria's tomorrow.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Target className="w-4 h-4" />
              <span>6 Core Excellence Areas</span>
            </div>
          </div>
        </div>

        {/* Features grid with creative layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - 2 features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature: Feature, index: number) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Center column - large feature */}
          <div className="lg:row-span-2">
            <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl p-8 overflow-hidden group hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 border border-blue-100/50 dark:border-blue-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovation Hub</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Our dedicated innovation center where students explore robotics, coding, 
                    3D printing, and emerging technologies. We're preparing them for jobs 
                    that don't exist yet.
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Next Workshop</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">AI & Robotics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 2 features */}
          <div className="space-y-8">
            {features.slice(2, 4).map((feature: Feature, index: number) => (
              <FeatureCard key={index + 2} feature={feature} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {features.slice(4).map((feature: Feature, index: number) => (
            <FeatureCard key={index + 4} feature={feature} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const colorMap: ColorMap = {
    blue: "from-blue-500 to-blue-600 text-blue-600 dark:from-blue-400 dark:to-blue-500 dark:text-blue-400",
    purple: "from-purple-500 to-purple-600 text-purple-600 dark:from-purple-400 dark:to-purple-500 dark:text-purple-400", 
    green: "from-green-500 to-green-600 text-green-600 dark:from-green-400 dark:to-green-500 dark:text-green-400",
    orange: "from-orange-500 to-orange-600 text-orange-600 dark:from-orange-400 dark:to-orange-500 dark:text-orange-400",
    indigo: "from-indigo-500 to-indigo-600 text-indigo-600 dark:from-indigo-400 dark:to-indigo-500 dark:text-indigo-400",
    red: "from-red-500 to-red-600 text-red-600 dark:from-red-400 dark:to-red-500 dark:text-red-400"
  };

  const rotations: string[] = ["rotate-1", "-rotate-1", "rotate-0", "rotate-2", "-rotate-2"];
  
  const getIconGradient = (color: ColorVariant): string => {
    const gradientMap: ColorMap = {
      blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
      green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
      orange: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
      indigo: "from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
      red: "from-red-500 to-red-600 dark:from-red-400 dark:to-red-500"
    };
    return gradientMap[color] || gradientMap.blue;
  };

  const getBottomBorderGradient = (color: ColorVariant): string => {
    return getIconGradient(color);
  };
  
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 group border border-gray-100 dark:border-gray-700 transform ${rotations[index % rotations.length]} hover:rotate-0 hover:scale-105`}>
      {feature.highlight && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-400 dark:from-orange-500 dark:to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-lg">
          {feature.highlight}
        </div>
      )}
      
      <div className={`w-14 h-14 bg-gradient-to-br ${getIconGradient(feature.color)} rounded-xl flex items-center justify-center mb-5 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <feature.icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
        {feature.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {feature.description}
      </p>

      {/* Decorative element */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${getBottomBorderGradient(feature.color)} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};

export default Features;