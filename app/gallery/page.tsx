'use client';

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// TypeScript Interfaces
interface GalleryCategory {
  id: string;
  name: string;
  count: number;
}

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

// Data Arrays
const galleryCategories: GalleryCategory[] = [
  { id: "all", name: "All Photos", count: 24 },
  { id: "classrooms", name: "Classrooms", count: 8 },
  { id: "facilities", name: "Facilities", count: 6 },
  { id: "events", name: "Events", count: 5 },
  { id: "sports", name: "Sports", count: 5 }
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Classroom Learning",
    category: "classrooms",
    description: "Students engaged in interactive learning in our modern classrooms"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Primary School Class",
    category: "classrooms",
    description: "Primary school students in their bright, welcoming classroom environment"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Science Laboratory",
    category: "facilities",
    description: "Fully equipped science laboratory for hands-on experiments"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Computer Lab",
    category: "facilities",
    description: "State-of-the-art computer laboratory with latest technology"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Sports Day Competition",
    category: "sports",
    description: "Annual inter-house sports competition in full swing"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "School Library",
    category: "facilities",
    description: "Quiet study space in our well-stocked library"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Group Study Session",
    category: "classrooms",
    description: "Students collaborating on a group project"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Mathematics Class",
    category: "classrooms",
    description: "Interactive mathematics lesson in progress"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Graduation Ceremony",
    category: "events",
    description: "Proud graduates at our annual graduation ceremony"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Basketball Court",
    category: "sports",
    description: "Students enjoying basketball on our outdoor court"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Art Class",
    category: "classrooms",
    description: "Creative arts class with students working on paintings"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "School Assembly",
    category: "events",
    description: "Weekly school assembly in our main hall"
  }
];

// Custom Components
const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  size = 'default',
  variant = 'default',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    default: "text-white shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100",
    outline: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Main Component
const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages: GalleryImage[] = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img: GalleryImage) => img.category === activeCategory);

  const openLightbox = (image: GalleryImage): void => {
    setSelectedImage(image);
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
  };

  const nextImage = useCallback((): void => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img: GalleryImage) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const prevImage = useCallback((): void => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img: GalleryImage) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!selectedImage) return;

      switch (event.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950/50 dark:via-gray-900 dark:to-orange-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              School Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Take a visual tour of Excellence Schools - from our modern classrooms and
              state-of-the-art facilities to memorable events and student achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category: GalleryCategory) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-200 ${activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  : "hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-500"
                  }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image: GalleryImage) => (
              <div
                key={image.id}
                className="group cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 shadow-md overflow-hidden bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
                onClick={() => openLightbox(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* School Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to See More? Schedule a Campus Tour!
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Experience our facilities firsthand and meet our dedicated teachers and staff.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white">
            Schedule a Visit
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 dark:bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200 dark:text-gray-300">{selectedImage.description}</p>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 dark:bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {filteredImages.findIndex((img: GalleryImage) => img.id === selectedImage.id) + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;