import React from "react";
import Image from "next/image";
import { ArrowRight, Users, Award, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-orange-950/20 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-orange-300/10 dark:bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-200/10 dark:bg-green-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-1000">
          <div className="w-4 h-4 bg-blue-400 dark:bg-blue-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-bounce delay-2000">
          <div className="w-3 h-3 bg-orange-400 dark:bg-orange-500 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-3/4 right-1/6 animate-bounce delay-700">
          <Sparkles className="w-6 h-6 text-green-400 dark:text-green-500 opacity-50" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content - offset and creative layout */}
            <div className="lg:col-span-7 pt-20 lg:pt-0">

              {/* Badge with creative positioning */}
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 text-orange-700 dark:text-orange-400 px-5 py-3 rounded-full text-sm font-medium mb-8 shadow-lg transform -rotate-1">
                <Award className="w-4 h-4" />
                Driving Education and Innovation
              </div>

              {/* Main heading with creative typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[0.95] tracking-tight">
                Where Young
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 dark:from-blue-400 dark:via-purple-400 dark:to-orange-400 transform -rotate-1 inline-block my-2">
                  Minds Flourish
                </span>
                {/* <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 dark:text-gray-300 mt-2">
                  in Lagos
                </span> */}
              </h1>

              <div className="relative">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  From nursery through secondary school, we&apos;re nurturing the next generation of
                  <span className="font-semibold text-blue-700 dark:text-blue-400"> brilliant Nigerian minds</span> through
                  innovative education and character building.
                </p>

                {/* Creative underline */}
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-orange-400 dark:from-orange-500 to-transparent rounded-full"></div>
              </div>

              {/* Action buttons with creative layout */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href={"/admissions"}>
                  <button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-xl group transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
                  >
                    Begin Your Journey
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                  </button>
                </Link>
                {/* <Link href={"Contact"}>
                  <button
                    className="border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-gray-600 dark:hover:border-blue-500 dark:hover:bg-blue-950/50 dark:text-gray-300 dark:hover:text-blue-400 backdrop-blur-sm px-8 py-4 text-lg"
                  >
                    Visit Our Campus
                  </button>
                </Link> */}
              </div>

              {/* Stats with organic layout */}
              <div className="grid grid-cols-3 gap-8">
                {/* <div className="text-center lg:text-left transform rotate-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-3xl font-black text-gray-900 dark:text-white">98%</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">WAEC Excellence</p>
                </div> */}
                {/* <div className="text-center lg:text-left transform -rotate-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    <span className="text-3xl font-black text-gray-900 dark:text-white">500+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Families</p>
                </div> */}
                <div className="text-center lg:text-left bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-3xl font-black text-gray-900 dark:text-white">15+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Excellence</p>
                </div>
              </div>
            </div>

            {/* Right Content - Creative image layout */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10">
                {/* Main image with organic shape */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 dark:from-blue-600/30 dark:to-orange-600/30 rounded-[3rem] rotate-3 scale-105 blur-xl"></div>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Excellence Schools - Students Learning"
                    width={800}
                    height={600}
                    className="relative rounded-[3rem] w-full h-[600px] object-cover shadow-2xl dark:shadow-gray-900/50 transform -rotate-2 border border-white/20 dark:border-gray-700/30"
                    priority
                  />
                  {/* Dark mode overlay for image */}
                  <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 rounded-[3rem] transform -rotate-2"></div>
                </div>

                {/* Floating achievement card */}
                {/* <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transform rotate-6 hover:rotate-3 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 dark:text-white text-lg">Best School</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Lagos 2023</p>
                    </div>
                  </div>
                </div> */}

                {/* Floating student card */}
                <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-xl dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-400 dark:bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                      <div className="w-8 h-8 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                      <div className="w-8 h-8 bg-green-400 dark:bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">500+ Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;