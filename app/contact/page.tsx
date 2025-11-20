'use client';

import React, { useState } from "react";
import ContactInquiry, { ContactInquiryData, ContactInquiryResponse } from "../utils/ContactInquiry";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  ChevronDown
} from "lucide-react";

// TypeScript Interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  student_level: string;
  message: string;
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

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
  bgColor: string;
  iconColor: string;
  linkText?: string;
  linkUrl?: string;
}

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
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    student_level: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [inquiryTypeOpen, setInquiryTypeOpen] = useState<boolean>(false);
  const [studentLevelOpen, setStudentLevelOpen] = useState<boolean>(false);

  const handleChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
        inquiry_type: formData.inquiry_type as 'admissions' | 'general' | 'academics' | 'other',
        message: formData.message,
        ...(formData.student_level && { 
          student_level: formData.student_level as 'primary' | 'secondary' | 'both' 
        })
      };

      const response: ContactInquiryResponse = await ContactInquiry.create(inquiryData);
      
      if (response.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry_type: "",
          student_level: "",
          message: ""
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

  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Plot 123, Adeola Odeku Street<br />
            Victoria Island, Lagos State<br />
            Nigeria
          </p>
        </>
      ),
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400",
      linkText: "Get Directions →",
      linkUrl: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>Main Line: +234 803 123 4567</p>
          <p>Admissions: +234 803 123 4568</p>
          <p>WhatsApp: +234 803 123 4569</p>
        </div>
      ),
      bgColor: "bg-orange-100 dark:bg-orange-900/50",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>info@excellenceschools.edu.ng</p>
          <p>admissions@excellenceschools.edu.ng</p>
          <p>principal@excellenceschools.edu.ng</p>
        </div>
      ),
      bgColor: "bg-green-100 dark:bg-green-900/50",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: (
        <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
          <p><strong className="text-gray-900 dark:text-white">Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
          <p><strong className="text-gray-900 dark:text-white">Saturday:</strong> 9:00 AM - 2:00 PM</p>
          <p><strong className="text-gray-900 dark:text-white">Sunday:</strong> Closed</p>
        </div>
      ),
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const inquiryTypes = [
    { value: "admissions", label: "Admissions" },
    { value: "academics", label: "Academic Programs" },
    { value: "general", label: "General Information" },
    { value: "other", label: "Other" }
  ];

  const studentLevels = [
    { value: "primary", label: "Primary School" },
    { value: "secondary", label: "Secondary School" },
    { value: "both", label: "Both Primary & Secondary" }
  ];

  const getInquiryTypeLabel = (value: string): string => {
    const type = inquiryTypes.find(type => type.value === value);
    return type ? type.label : "Select inquiry type";
  };

  const getStudentLevelLabel = (value: string): string => {
    const level = studentLevels.find(level => level.value === value);
    return level ? level.label : "Select student level";
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to give your child the best education? Contact us today to learn more 
            about our programs or schedule a school visit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info: ContactInfo, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className={`w-12 h-12 ${info.bgColor} ${info.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                {info.content}
                {info.linkText && info.linkUrl && (
                  <a 
                    href={info.linkUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-block mt-2"
                  >
                    {info.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="p-6 pb-0">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
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
                        onChange={(e) => handleChange('email', e.target.value)}
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
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+234 xxx xxx xxxx"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Inquiry Type *
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setInquiryTypeOpen(!inquiryTypeOpen)}
                          className="w-full px-4 py-3 text-left border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
                        >
                          <span className={formData.inquiry_type ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
                            {getInquiryTypeLabel(formData.inquiry_type)}
                          </span>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${inquiryTypeOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {inquiryTypeOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-10">
                            {inquiryTypes.map((type, index) => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => {
                                  handleChange('inquiry_type', type.value);
                                  setInquiryTypeOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white ${
                                  index === 0 ? 'rounded-t-xl' : index === inquiryTypes.length - 1 ? 'rounded-b-xl' : ''
                                }`}
                              >
                                {type.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="student_level" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Student Level
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setStudentLevelOpen(!studentLevelOpen)}
                        className="w-full px-4 py-3 text-left border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
                      >
                        <span className={formData.student_level ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
                          {getStudentLevelLabel(formData.student_level)}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${studentLevelOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {studentLevelOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-10">
                          {studentLevels.map((level, index) => (
                            <button
                              key={level.value}
                              type="button"
                              onClick={() => {
                                handleChange('student_level', level.value);
                                setStudentLevelOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white ${
                                index === 0 ? 'rounded-t-xl' : index === studentLevels.length - 1 ? 'rounded-b-xl' : ''
                              }`}
                            >
                              {level.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
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
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;