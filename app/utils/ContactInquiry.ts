// @/entities/ContactInquiry.ts

export type InquiryType = 'admissions' | 'general' | 'academics' | 'other';
export type StudentLevel = 'primary' | 'secondary' | 'both';

export interface ContactInquiryData {
  name: string;
  email: string;
  phone: string;
  inquiry_type: InquiryType;
  message: string;
  student_level?: StudentLevel;
}

export interface ContactInquiryResponse {
  success: boolean;
  message: string;
  inquiry_id?: string;
  errors?: string[];
}

export class ContactInquiry {
  /**
   * Validates the inquiry data against the schema requirements
   * @param data - The inquiry data to validate
   * @returns Array of validation errors (empty if valid)
   */
  private static validate(data: ContactInquiryData): string[] {
    const errors: string[] = [];

    // Required field validation
    if (!data.name || data.name.trim() === '') {
      errors.push('Name is required');
    }

    if (!data.email || data.email.trim() === '') {
      errors.push('Email is required');
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.push('Invalid email format');
      }
    }

    if (!data.message || data.message.trim() === '') {
      errors.push('Message is required');
    }

    if (!data.inquiry_type) {
      errors.push('Inquiry type is required');
    } else {
      // Validate inquiry_type enum
      const validInquiryTypes: InquiryType[] = ['admissions', 'general', 'academics', 'other'];
      if (!validInquiryTypes.includes(data.inquiry_type)) {
        errors.push('Invalid inquiry type');
      }
    }

    // Optional field validation
    if (data.student_level) {
      const validStudentLevels: StudentLevel[] = ['primary', 'secondary', 'both'];
      if (!validStudentLevels.includes(data.student_level)) {
        errors.push('Invalid student level');
      }
    }

    return errors;
  }

  /**
   * Create a new contact inquiry
   * @param data - The inquiry data to submit
   * @returns Promise resolving to the inquiry response
   */
  static async create(data: ContactInquiryData): Promise<ContactInquiryResponse> {
    try {
      // Validate the data first
      const validationErrors = this.validate(data);
      if (validationErrors.length > 0) {
        return {
          success: false,
          message: 'Validation failed',
          errors: validationErrors
        };
      }

      // Clean the data
      const cleanedData: ContactInquiryData = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        inquiry_type: data.inquiry_type,
        message: data.message.trim(),
        ...(data.student_level && { student_level: data.student_level })
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real application, you would make an API call here:
      /*
      const response = await fetch('/api/contact-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
      */

      // For demonstration purposes, simulate a successful response
      console.log('Contact inquiry submitted successfully:', cleanedData);

      return {
        success: true,
        message: 'Your inquiry has been successfully submitted. We will contact you within 24 hours.',
        inquiry_id: `INQ-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      };

    } catch (error) {
      console.error('Error creating contact inquiry:', error);
      
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  /**
   * Get all contact inquiries (admin function)
   * @returns Promise resolving to array of inquiries
   */
  static async getAll(): Promise<ContactInquiryData[]> {
    try {
      // In a real app, this would fetch from your backend
      /*
      const response = await fetch('/api/contact-inquiries', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
      */

      // For demonstration, return empty array
      return [];
    } catch (error) {
      console.error('Error fetching contact inquiries:', error);
      throw error;
    }
  }

  /**
   * Create multiple validation helper methods for specific use cases
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidInquiryType(type: string): type is InquiryType {
    return ['admissions', 'general', 'academics', 'other'].includes(type as InquiryType);
  }

  static isValidStudentLevel(level: string): level is StudentLevel {
    return ['primary', 'secondary', 'both'].includes(level as StudentLevel);
  }

  /**
   * Get inquiry type display name
   */
  static getInquiryTypeDisplayName(type: InquiryType): string {
    const displayNames: Record<InquiryType, string> = {
      admissions: 'Admissions',
      general: 'General Inquiry',
      academics: 'Academic Information',
      other: 'Other'
    };
    return displayNames[type];
  }

  /**
   * Get student level display name
   */
  static getStudentLevelDisplayName(level: StudentLevel): string {
    const displayNames: Record<StudentLevel, string> = {
      primary: 'Primary School',
      secondary: 'Secondary School',
      both: 'Both Levels'
    };
    return displayNames[level];
  }
}

export default ContactInquiry;