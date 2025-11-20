import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Trophy, 
  Globe,
  Calculator,
  Beaker,
  Palette,
  Music,
  Computer,
  ArrowRight,
  LucideIcon
} from "lucide-react";

// TypeScript Interfaces
interface Subject {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface SecondaryProgram {
  title: string;
  description: string;
  subjects: string[];
  careers: string[];
  color: string;
}

interface Facility {
  name: string;
  description: string;
  image: string;
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
  onClick?: () => void;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Data Arrays
const primarySubjects: Subject[] = [
  { name: "Mathematics", icon: Calculator, description: "Number work, basic algebra, geometry" },
  { name: "English Language", icon: BookOpen, description: "Reading, writing, comprehension, grammar" },
  { name: "General Science", icon: Beaker, description: "Basic physics, chemistry, biology concepts" },
  { name: "Social Studies", icon: Globe, description: "History, geography, civics" },
  { name: "Creative Arts", icon: Palette, description: "Drawing, painting, crafts, drama" },
  { name: "Music", icon: Music, description: "Singing, instruments, music theory" },
  { name: "Physical Education", icon: Trophy, description: "Sports, fitness, health education" },
  { name: "Computer Studies", icon: Computer, description: "Basic computer literacy, typing" }
];

const secondaryPrograms: SecondaryProgram[] = [
  {
    title: "Science Track",
    description: "For students interested in medicine, engineering, and pure sciences",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"],
    careers: ["Medicine", "Engineering", "Pharmacy", "Laboratory Science"],
    color: "blue"
  },
  {
    title: "Commercial Track", 
    description: "For students interested in business, economics, and commerce",
    subjects: ["Mathematics", "Economics", "Accounting", "Commerce", "English", "Government"],
    careers: ["Banking", "Business", "Economics", "Accounting"],
    color: "green"
  },
  {
    title: "Arts Track",
    description: "For students interested in humanities, languages, and social sciences",
    subjects: ["Literature", "Government", "History", "Geography", "English", "Economics"],
    careers: ["Law", "Journalism", "Teaching", "Public Service"],
    color: "orange"
  }
];

const facilities: Facility[] = [
  {
    name: "Science Laboratories",
    description: "Fully equipped physics, chemistry, and biology labs with modern equipment",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Computer Lab",
    description: "40 modern computers with high-speed internet and latest software",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Library & Resource Center",
    description: "Over 10,000 books, digital resources, and quiet study areas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sports Complex",
    description: "Football field, basketball court, volleyball court, and athletics track",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Custom Components
const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'default',
  variant = 'default',
  onClick 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    default: "text-white shadow-lg hover:shadow-xl transform hover:scale-105",
    outline: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg"
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

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return (
    <div className="p-6 pb-0">
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  );
};

// Main Component
const Academics: React.FC = () => {
  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' = 'bg'): string => {
    const colorMap: { [key: string]: { [key: string]: string } } = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/50",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-700"
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/50",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-700"
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/50",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-700"
      }
    };
    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950/50 dark:via-gray-900 dark:to-orange-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our comprehensive curriculum combines the Nigerian National Curriculum with 
            international best practices, preparing students for success in Nigeria and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Primary Education</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ages 6-11 • Primary 1-6</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Junior Secondary</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ages 12-14 • JSS 1-3</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Senior Secondary</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ages 15-17 • SSS 1-3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary School Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Primary School Program
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building strong foundations in literacy, numeracy, and character development 
              through engaging, child-centered learning approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {primarySubjects.map((subject: Subject, index: number) => (
              <Card key={index} className="hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <subject.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{subject.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-950/50 dark:to-orange-950/50 rounded-2xl p-8 border border-blue-100/50 dark:border-blue-800/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Primary School Features</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>8:00 AM - 2:00 PM daily schedule</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Maximum 25 students per class</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Integrated curriculum approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Regular assessments and progress reports</span>
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Primary school classroom"
                className="rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary School Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Secondary School Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive secondary education with specialized tracks to prepare students 
              for WAEC, JAMB, and university admission.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {secondaryPrograms.map((program: SecondaryProgram, index: number) => (
              <Card key={index} className="hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 ${getColorClasses(program.color, 'bg')} ${getColorClasses(program.color, 'text')} rounded-2xl flex items-center justify-center mb-4`}>
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject: string, idx: number) => (
                        <span key={idx} className={`px-3 py-1 ${getColorClasses(program.color, 'bg')} ${getColorClasses(program.color, 'text')} text-sm rounded-full`}>
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Paths:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((career: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WAEC/JAMB Preparation */}
          <Card className="shadow-xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 border border-green-100/50 dark:border-green-800/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    WAEC & JAMB Preparation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our comprehensive exam preparation program ensures students are fully 
                    ready for both WAEC and JAMB examinations, with consistently high pass rates.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                    <li>• Specialized JAMB coaching classes</li>
                    <li>• Regular mock examinations</li>
                    <li>• Individual student progress tracking</li>
                    <li>• University application guidance</li>
                  </ul>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">WAEC Pass Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">University Admission</div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students studying"
                  className="rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our modern facilities provide the perfect environment for learning, 
              creativity, and personal development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility: Facility, index: number) => (
              <Card key={index} className="hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{facility.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Child's Academic Journey?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Join our community of learners and give your child the best educational foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"admissions"}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href={"contact"}>
              <Button size="lg" variant="outline" className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white hover:bg-white/20 dark:hover:bg-white/10">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;