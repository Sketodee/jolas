'use client'

import React, { useState } from "react";
import ContactInquiry, { ContactInquiryData, ContactInquiryResponse } from "../utils/ContactInquiry";
import {
  Download,
  FileText,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  DollarSign,
  BookOpen,
  Send,
  Upload,
  LucideIcon,
  ChevronDown
} from "lucide-react";

// TypeScript Interfaces
interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface Fee {
  level: string;
  admission: string;
  tuition: string;
  total: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  student_level: string;
  message: string;
  inquiry_type: 'admissions';
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
const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: "Download & Complete Form",
    description: "Download our admission form and school brochure. Fill out the application completely.",
    icon: FileText,
    color: "blue"
  },
  {
    step: 2,
    title: "Submit Documents",
    description: "Submit the completed form with required documents to our admissions office.",
    icon: Upload,
    color: "orange"
  },
  {
    step: 3,
    title: "Assessment & Interview",
    description: "Your child will take an age-appropriate assessment and interview with our team.",
    icon: Users,
    color: "green"
  },
  {
    step: 4,
    title: "Admission Decision",
    description: "We'll notify you of the admission decision within 5-7 working days.",
    icon: CheckCircle,
    color: "purple"
  }
];

const documents: string[] = [
  "Completed admission form",
  "Birth certificate (original and photocopy)",
  "Recent passport photographs (4 copies)",
  "Previous school report card/transcript",
  "Medical certificate of fitness",
  "Parent/Guardian identification",
  "Immunization records"
];

const fees: Fee[] = [
  { level: "Primary 1-3", admission: "₦50,000", tuition: "₦180,000/term", total: "₦590,000/year" },
  { level: "Primary 4-6", admission: "₦50,000", tuition: "₦200,000/term", total: "₦650,000/year" },
  { level: "JSS 1-3", admission: "₦75,000", tuition: "₦250,000/term", total: "₦825,000/year" },
  { level: "SSS 1-3", admission: "₦100,000", tuition: "₦300,000/term", total: "₦1,000,000/year" }
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
const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    student_level: "",
    message: "",
    inquiry_type: "admissions"
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Convert form data to ContactInquiry format
      const inquiryData: ContactInquiryData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiry_type,
        message: formData.message,
        ...(formData.student_level && { 
          student_level: formData.student_level as 'primary' | 'secondary' 
        })
      };

      const response: ContactInquiryResponse = await ContactInquiry.create(inquiryData);
      
      if (response.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          student_level: "",
          message: "",
          inquiry_type: "admissions"
        });
      } else {
        setSubmitError(response.message || "Failed to submit inquiry");
        if (response.errors && response.errors.length > 0) {
          setSubmitError(response.errors.join(", "));
        }
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  const downloadAdmissionForm = (): void => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Excellence-Schools-Admission-Form-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadBrochure = (): void => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Excellence-Schools-Brochure-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getColorClasses = (color: string): { bg: string; text: string; bgLight: string } => {
    const colorMap: { [key: string]: { bg: string; text: string; bgLight: string } } = {
      blue: {
        bg: "bg-blue-600 dark:bg-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        bgLight: "bg-blue-100 dark:bg-blue-900/50"
      },
      orange: {
        bg: "bg-orange-600 dark:bg-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        bgLight: "bg-orange-100 dark:bg-orange-900/50"
      },
      green: {
        bg: "bg-green-600 dark:bg-green-500",
        text: "text-green-600 dark:text-green-400",
        bgLight: "bg-green-100 dark:bg-green-900/50"
      },
      purple: {
        bg: "bg-purple-600 dark:bg-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        bgLight: "bg-purple-100 dark:bg-purple-900/50"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Received!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for your interest in Excellence Schools. Our admissions team will contact you within 24 hours to guide you through the next steps.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950/50 dark:via-gray-900 dark:to-orange-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Excellence Schools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Give your child the gift of excellent education. Applications are now open for the 2024/2025 academic session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={downloadAdmissionForm} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              <Download className="mr-2 w-5 h-5" />
              Download Admission Form
            </Button>
            <Button size="lg" variant="outline" onClick={downloadBrochure}>
              <FileText className="mr-2 w-5 h-5" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admission Form</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Download our comprehensive admission form for the 2024/2025 academic session.
                  Available for both primary and secondary school applications.
                </p>
                <Button onClick={downloadAdmissionForm} className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  <Download className="mr-2 w-5 h-5" />
                  Download Form (PDF)
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 border-orange-200 dark:border-orange-800">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">School Brochure</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Learn more about our programs, facilities, teaching philosophy, and what makes
                  Excellence Schools the right choice for your child.
                </p>
                <Button onClick={downloadBrochure} variant="outline" className="w-full border-orange-600 dark:border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50">
                  <FileText className="mr-2 w-5 h-5" />
                  Download Brochure (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined admission process makes it easy for your child to join our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step: AdmissionStep) => {
              const colors = getColorClasses(step.color);
              return (
                <div key={step.step} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>
                  <div className="p-8 pt-12">
                    <div className={`w-16 h-16 ${colors.bgLight} ${colors.text} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Please ensure you have all required documents ready before submitting your application.
              </p>
              <ul className="space-y-4">
                {documents.map((doc: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Student documents"
              className="rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30"
            />
          </div>
        </div>
      </section>

      {/* School Fees */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              School Fees Structure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent and competitive fees for quality education. Payment plans available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((fee: Fee, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300">
                <div className="text-center pb-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 dark:from-blue-400 dark:to-orange-400 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{fee.level}</h3>
                </div>
                <div className="text-center space-y-3 p-6 pt-0">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Admission Fee</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{fee.admission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tuition per Term</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{fee.tuition}</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total per Year</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{fee.total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              *Fees include tuition, books, uniforms, and extracurricular activities.
              Payment plans available to make education affordable for all families.
            </p>
            <Button variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-500">
              Contact for Payment Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Quick Application Inquiry</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Submit your initial inquiry and we'll guide you through the complete admission process.
              </p>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="student_level" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Student Level
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 text-left border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
                      >
                        <span className={formData.student_level ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
                          {formData.student_level === "primary" ? "Primary School (Age 6-11)" : 
                           formData.student_level === "secondary" ? "Secondary School (Age 12-17)" : 
                           "Select student level"}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-10">
                          <button
                            type="button"
                            onClick={() => {
                              handleInputChange('student_level', "primary");
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-t-xl"
                          >
                            Primary School (Age 6-11)
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              handleInputChange('student_level', "secondary");
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-b-xl"
                          >
                            Secondary School (Age 12-17)
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your child's interests, previous school, or any specific questions..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[120px]"
                  />
                </div>

                {submitError && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-700 dark:text-red-400 text-sm">{submitError}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Important Dates</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200">
              Mark your calendar with these key admission dates for 2024/2025 session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <Calendar className="w-12 h-12 text-orange-400 dark:text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Application Opens</h3>
              <p className="text-blue-100 dark:text-blue-200">January 15, 2024</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <Clock className="w-12 h-12 text-orange-400 dark:text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Application Deadline</h3>
              <p className="text-blue-100 dark:text-blue-200">July 31, 2024</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-white/10">
              <Users className="w-12 h-12 text-orange-400 dark:text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">New Session Begins</h3>
              <p className="text-blue-100 dark:text-blue-200">September 9, 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;