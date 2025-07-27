// utils/formValidation.js
import * as Yup from 'yup';

export const validationSchemas = {
  hero: Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    title: Yup.string()
      .min(2, 'Title must be at least 2 characters')
      .max(100, 'Title must be less than 100 characters')
      .required('Title is required'),
    tagline: Yup.string()
      .min(5, 'Tagline must be at least 5 characters')
      .max(200, 'Tagline must be less than 200 characters')
      .required('Tagline is required')
  }),
  
  about: Yup.object({
    bio: Yup.string()
      .min(50, 'Bio must be at least 50 characters')
      .max(1000, 'Bio must be less than 1000 characters')
      .required('Bio is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .min(10, 'Phone number must be at least 10 digits')
      .required('Phone is required'),
    location: Yup.string()
      .min(2, 'Location must be at least 2 characters')
      .required('Location is required')
  }),
  
  skills: Yup.object({
    skills: Yup.array()
      .of(Yup.string().min(1, 'Skill cannot be empty'))
      .min(3, 'At least 3 skills are required')
      .max(15, 'Maximum 15 skills allowed')
  }),
  
  services: Yup.object({
    services: Yup.array().of(
      Yup.object({
        title: Yup.string()
          .min(2, 'Service title must be at least 2 characters')
          .max(100, 'Service title must be less than 100 characters')
          .required('Service title is required'),
        description: Yup.string()
          .min(10, 'Service description must be at least 10 characters')
          .max(500, 'Service description must be less than 500 characters')
          .required('Service description is required')
      })
    ).min(1, 'At least one service is required').max(3, 'Maximum 3 services allowed')
  }),
  
  projects: Yup.object({
    projects: Yup.array().of(
      Yup.object({
        title: Yup.string()
          .min(2, 'Project title must be at least 2 characters')
          .max(100, 'Project title must be less than 100 characters')
          .required('Project title is required'),
        description: Yup.string()
          .min(10, 'Project description must be at least 10 characters')
          .max(500, 'Project description must be less than 500 characters')
          .required('Project description is required')
      })
    ).min(1, 'At least one project is required').max(3, 'Maximum 3 projects allowed')
  }),
  
  testimonials: Yup.object({
    testimonials: Yup.array().of(
      Yup.object({
        quote: Yup.string()
          .min(10, 'Testimonial quote must be at least 10 characters')
          .max(500, 'Testimonial quote must be less than 500 characters')
          .required('Testimonial quote is required'),
        author: Yup.string()
          .min(2, 'Author name must be at least 2 characters')
          .max(50, 'Author name must be less than 50 characters')
          .required('Author name is required'),
        position: Yup.string()
          .min(2, 'Author position must be at least 2 characters')
          .max(100, 'Author position must be less than 100 characters')
          .required('Author position is required')
      })
    ).min(1, 'At least one testimonial is required').max(5, 'Maximum 5 testimonials allowed')
  }),
  
  contact: Yup.object({
    contactEmail: Yup.string()
      .email('Invalid email format')
      .required('Contact email is required'),
    contactPhone: Yup.string()
      .min(10, 'Contact phone must be at least 10 digits')
      .required('Contact phone is required'),
    message: Yup.string()
      .min(10, 'Contact message must be at least 10 characters')
      .max(500, 'Contact message must be less than 500 characters')
      .required('Contact message is required')
  })
};

export default validationSchemas;