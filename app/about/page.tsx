import React, { JSX } from "react";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Users,
  Trophy,
  Award,
  Globe
} from "lucide-react";

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  event: string;
  description: string;
}

interface Leader {
  name: string;
  position: string;
  // experience: string;
  image: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and moral conduct in all our interactions."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for the highest quality in education, continuously improving our programs and services."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive, inclusive environment where every member feels valued and connected."
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We prepare our students to be global citizens while maintaining strong Nigerian roots and values."
  }
];

const milestones: Milestone[] = [
  { year: "2010", event: "Jolas Schools Founded", description: "Started with 50 students in a modest facility" },
  { year: "2015", event: "New Campus Opened", description: "Expanded to modern facilities in Victoria Island" },
  { year: "2018", event: "Award Recognition", description: "Received Lagos State Excellence in Education Award" },
  { year: "2020", event: "Digital Learning", description: "Successfully transitioned to hybrid learning model" },
  { year: "2023", event: "500+ Students", description: "Reached milestone of over 500 enrolled students" }
];

const leaders: Leader[] = [
  {
    name: "Dr. Olumide Adegbola",
    position: "School Principal",
    // experience: "25+ years in education leadership, PhD in Educational Administration",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Mrs. Fatima Ibrahim",
    position: "Academic Director",
    // experience: "20+ years curriculum development, Masters in Educational Psychology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Mr. Emeka Okonkwo",
    position: "Student Affairs Director",
    // experience: "15+ years student development, Masters in Counseling Psychology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  }
];

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Jolas Schools
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                For over a decade, Jolas Schools has been at the forefront of Nigerian education,
                nurturing young minds from primary through secondary levels with a commitment to
                academic excellence and character development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                  <p className="text-gray-600 dark:text-gray-400">Students Enrolled</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
                  <p className="text-gray-600 dark:text-gray-400">Expert Teachers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Jolas Schools"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl dark:shadow-gray-900/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-700/70 transition-shadow duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To provide world-class education that develops intellectually curious,
                  morally upright, and globally competitive Nigerian citizens who will
                  contribute meaningfully to society while maintaining their cultural identity.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-700/70 transition-shadow duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the leading educational institution in Nigeria, recognized for
                  producing well-rounded students who excel academically, demonstrate
                  strong character, and become positive change agents in their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape the character of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: Value, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-700/70 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900/50 dark:to-orange-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story/Timeline */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming one of Lagos&apos;s premier educational institutions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone: Milestone, index: number) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
               
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>

               
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.event}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced educators and administrators committed to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader: Leader, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 text-center">
                <div className="p-8">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">{leader.position}</p>
                  {/* <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {leader.experience}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}