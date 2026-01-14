import React, { JSX } from "react";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import Link from "next/link";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "98%", label: "WAEC Pass Rate" },
  { value: "500+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Teachers" },
  { value: "15", label: "Years Experience" }
];


export default function CallToAction(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10">
          <div
            className="w-full h-full bg-white/5 dark:bg-white/10 bg-[length:40px_40px] bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 0-8.95-10-10v20c10-1.05 10-10 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Give Your Child the
            <span className="text-orange-300 dark:text-orange-400"> Excellence</span> They Deserve?
          </h2>

          <p className="text-xl text-blue-100 dark:text-blue-200 mb-12 max-w-2xl mx-auto">
            Join hundreds of families who have chosen Excellence Schools for their children&apos;s
            educational journey. Applications are now open for 2024/2025 academic session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={"admissions"}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-200 group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+2348031234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 dark:bg-white/5 border border-white/30 dark:border-white/20 text-white hover:bg-white/20 dark:hover:bg-white/10 font-semibold rounded-lg transition-all duration-200"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Today
            </a>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat: StatItem, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 dark:text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}