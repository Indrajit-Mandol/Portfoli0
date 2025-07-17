# Personal Portfolio Website

## Overview

This is a modern, responsive portfolio website for Indrajit Mandol, an AI/ML Engineer and Full Stack Developer. The application is built using a full-stack TypeScript architecture with React frontend and Express backend, featuring a contact form system and a professional portfolio showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with Radix UI components (shadcn/ui)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and bundling
- **Component Library**: Comprehensive shadcn/ui component system

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: tsx for TypeScript execution
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **API Design**: RESTful API endpoints

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured via Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: TypeScript-first schema definitions
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Portfolio Sections
1. **Hero Section**: Interactive landing with typing animation and particle effects
2. **About**: Personal information and background
3. **Skills**: Technical skills with animated progress bars
4. **Experience**: Professional timeline with achievements
5. **Projects**: Featured project showcase with code snippets
6. **Certifications**: Professional achievements display
7. **Contact**: Interactive contact form with backend integration

### UI Components
- Custom animated components (particles, typing animation, skill bars)
- Responsive navigation with mobile menu
- Timeline components for experience display
- Project cards with hover effects
- Form components with validation

### Database Schema
- **Users Table**: User authentication (prepared for future use)
- **Contacts Table**: Contact form submissions with timestamps
- Type-safe schema validation using Zod

## Data Flow

### Contact Form Process
1. User submits contact form on frontend
2. Form data validated using Zod schema
3. POST request to `/api/contact` endpoint
4. Backend validates and stores data in PostgreSQL
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Development Workflow
1. Frontend development with Vite hot reload
2. Backend development with tsx auto-restart
3. Database changes managed through Drizzle migrations
4. Type safety maintained across frontend/backend boundary

## External Dependencies

### Core Runtime Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm and drizzle-zod for database operations
- **UI**: Comprehensive Radix UI primitives (@radix-ui/*)
- **State Management**: @tanstack/react-query
- **Forms**: @hookform/resolvers for form validation
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Dependencies
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support across stack
- **CSS**: Tailwind CSS with PostCSS
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Production Configuration
- Node.js production server serving static frontend
- PostgreSQL database via Neon Database connection
- Environment-based configuration (DATABASE_URL required)

### Development Setup
- Local development with Vite dev server proxy
- Hot reload for both frontend and backend
- Database schema synchronization via Drizzle Kit

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared TypeScript types between frontend/backend
2. **Type Safety**: End-to-end type safety using shared schema definitions
3. **Modern React**: Latest React patterns with hooks and functional components
4. **Database-First**: PostgreSQL chosen for reliability and Drizzle for type safety
5. **Component Design**: shadcn/ui for consistent, accessible component library
6. **Performance**: Vite for fast development and optimized production builds

The application is designed to be easily extensible, with a clean separation between presentation and business logic, making it straightforward to add new features or modify existing functionality.