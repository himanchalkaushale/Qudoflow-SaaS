# Qudoflow - Team Collaboration Platform

## Overview

Qudoflow is a modern SaaS platform for team collaboration and workflow automation built with a full-stack React application. The project uses a monorepo structure with a React frontend and Express.js backend, leveraging modern web technologies for a scalable and maintainable architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with functional components and hooks
- **TypeScript** for type safety
- **Vite** as the build tool and development server
- **TailwindCSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **ESM modules** for modern JavaScript features
- **In-memory storage** with interface for future database integration
- **Session-based architecture** ready for authentication
- RESTful API design pattern

### Component Architecture
- **Atomic design principles** with reusable UI components
- **Component composition** using Radix UI primitives
- **Custom hooks** for shared logic
- **CSS custom properties** for theming support
- **Responsive design** with mobile-first approach

## Key Components

### UI Components
- **Hero Section**: Dark theme landing page component with retro grid background
- **Feature Section**: Hover effects showcase for platform capabilities
- **Testimonials**: Marquee-style customer testimonials with star ratings
- **Sparkles**: Particle effects using tsparticles for visual enhancement
- **Form Components**: Complete form system with validation and error handling

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and future database implementations
- **Route Registration**: Modular routing system for API endpoints
- **Error Handling**: Centralized error management with proper HTTP status codes
- **Development Tools**: Hot reloading and development middleware

## Data Flow

### Client-Side Data Flow
1. **React Query** manages server state and caching
2. **Form data** flows through React Hook Form with Zod validation
3. **UI state** managed through React hooks and context
4. **API calls** handled through centralized query functions

### Server-Side Data Flow
1. **Express middleware** processes incoming requests
2. **Storage interface** abstracts data operations
3. **Response formatting** ensures consistent API responses
4. **Error propagation** through centralized error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database driver for PostgreSQL (Neon)
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **@radix-ui**: Accessible UI component primitives
- **@tsparticles**: Particle effects library
- **class-variance-authority**: Component variant system
- **cmdk**: Command palette functionality

### Development Dependencies
- **TypeScript**: Type checking and development experience
- **Vite**: Fast development server and build tool
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS**: CSS processing and autoprefixing

## Database Schema

### User Management
- **Users table**: Basic user authentication with username/password
- **PostgreSQL**: Production database with UUID primary keys
- **Drizzle migrations**: Version-controlled schema changes
- **Zod validation**: Runtime type checking for database operations

## Deployment Strategy

### Build Process
1. **Frontend build**: Vite bundles React application to static assets in `dist/` directory
2. **Backend build**: TypeScript server compiled for Node.js runtime
3. **Asset optimization**: Automatic code splitting, minification, and tree shaking
4. **Environment configuration**: Separate development and production configs

### Vercel Deployment
- **Platform**: Optimized for Vercel serverless functions
- **Configuration**: `vercel.json` configured for full-stack deployment
- **Build Command**: `npm run build` creates production-ready assets
- **Static Assets**: Served from `/dist` directory
- **API Routes**: Serverless functions handle backend requests
- **Environment Variables**: Configured through Vercel dashboard

### Environment Setup
- **Development**: Local development with hot reloading via Vite
- **Production**: Serverless functions on Vercel with static asset serving
- **Database**: In-memory storage (can be upgraded to PostgreSQL)
- **Environment variables**: Managed through Vercel dashboard

### Hosting Considerations
- **Static assets**: Automatically optimized and served by Vercel CDN
- **API routes**: Deployed as serverless functions
- **Performance**: Edge network distribution for global performance
- **Error handling**: Production-safe error responses without sensitive data
- **Automatic deployments**: Git-based deployment with preview deployments

## Key Architectural Decisions

### Full-Stack TypeScript
**Problem**: Type safety across frontend and backend boundaries
**Solution**: Shared TypeScript types and schemas between client and server
**Benefits**: Compile-time error detection, better developer experience, consistent data models

### Component-First Design
**Problem**: Maintainable and reusable UI components
**Solution**: shadcn/ui component system with Radix UI primitives
**Benefits**: Accessibility by default, consistent design system, easy theming

### Abstracted Storage Layer
**Problem**: Future-proofing database changes and testing
**Solution**: Storage interface with in-memory and database implementations
**Benefits**: Easy testing, database agnostic code, clean separation of concerns

### Modern Build Tools
**Problem**: Fast development experience and optimized production builds
**Solution**: Vite for frontend, ESBuild for backend compilation
**Benefits**: Fast hot reloading, optimized bundles, modern JavaScript features