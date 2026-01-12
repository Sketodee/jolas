import React, { JSX } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mrs. Adebayo Folake",
    role: "Parent - Primary 4 Student",
    location: "Ikoyi, Lagos",
    content: "Excellence Schools has been a blessing for our daughter. The teachers are caring, and the curriculum is well-structured. She&apos;s not just learning academics but also developing great character.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Mr. Okafor Chinedu",
    role: "Parent - SSS 2 Student",
    location: "Victoria Island, Lagos",
    content: "My son has excelled beyond our expectations. The JAMB preparation program is excellent, and the school&apos;s focus on both academics and sports has helped him grow tremendously.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Mrs. Aisha Mohammed",
    role: "Parent - JSS 3 Student",
    location: "Lekki, Lagos",
    content: "The transition from primary to secondary was seamless. The school maintains high standards while ensuring each child feels valued and supported in their learning journey.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from the families who trust us with their children&apos;s education and future success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-700/70 transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}