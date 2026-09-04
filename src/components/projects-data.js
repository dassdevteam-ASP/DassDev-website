export const projects = [
  {
    id: "01",

    title: "Yukti Innovation & Incubation Platform",
    url: "https://viba-incubation.vercel.app",

    category: "Web Application",

    shortDescription:
      "A production-ready college innovation and incubation platform connecting students, faculty, evaluators and administrators through a structured digital workflow.",

    image: "/projects/viba-project.png",

    clientIdea:
      "The client wanted a centralized digital platform for managing the complete innovation and incubation journey inside a college ecosystem — from student registration and idea submission to evaluation, decision-making, team collaboration and incubation.",

    problem: [
      "Innovation program information and activities were difficult to manage through disconnected systems and communication channels.",

      "Students needed a structured journey from registration and idea submission through evaluation and final decisions.",

      "Administrators needed centralized control over students, submissions, screening, evaluations and decisions.",

      "Evaluators and faculty required role-specific access to the submissions and workflows relevant to them.",

      "The platform needed to handle authentication, file uploads, workflow states, permissions and business data reliably at scale.",
    ],

    solution:
      "We designed and developed a role-based innovation and incubation platform that centralizes student submissions, team collaboration, screening, evaluation, decision-making and incubation workflows into one structured ecosystem.",

    approach: [
      "Started by mapping the complete journeys of students, faculty, evaluators and administrators.",

      "Designed the application around clearly separated business domains such as authentication, profiles, submissions, teams, dashboard, screening, evaluation and decisions.",

      "Implemented a role-based authentication system with registration, admin approval, account activation, login, refresh-token sessions and password recovery.",

      "Built the student submission workflow around drafts, submission, screening, requested changes, resubmission and final decisions.",

      "Designed the submission architecture so common submission data remains separate from type-specific idea, prototype and startup information.",

      "Implemented team collaboration with invitations, accepted members and action-level authorization.",

      "Created a storage abstraction supporting local, Cloudinary and S3 providers instead of coupling the application to a single storage service.",

      "Built the frontend using reusable components, React Hook Form and TanStack Query while keeping API communication behind dedicated services.",

      "Structured the backend using Route → Middleware → Controller → Service → Repository layers to keep business logic maintainable and scalable.",

      "Designed activity and audit history so important workflow actions can be tracked throughout the innovation lifecycle.",
    ],

    outcome:
      "The result is a structured digital foundation for managing the college innovation lifecycle, giving students a clear submission journey while providing administrators, faculty and evaluators with role-specific workflows and centralized control.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Joi",
      "Multer",
      "Cloudinary",
      "AWS S3",
    ],
  },

  {
    id: "02",
    title: "Tekytalk",
    category: "AI SaaS · EdTech",
    shortDescription:
      "An AI-powered teaching platform where users create personalized AI tutors and learn through real-time voice conversations.",
    url: "https://ai-saas-sand-one.vercel.app/",
    image: "/projects/tekytalk.png",

    clientIdea:
      "Create a personalized learning platform where students can build AI teaching companions tailored to their subjects, learning preferences and session duration, then interact with them through natural voice conversations.",

    problem: [
      "Traditional learning platforms often provide static content without adapting to the learner's preferred style.",
      "Students may struggle to get personalized explanations and interactive guidance whenever they need it.",
      "Voice-based learning experiences require multiple AI services to work together reliably in real time.",
      "Managing personalized tutors, learning sessions, user access and subscription limits adds significant application complexity.",
    ],

    solution:
      "Built Tekytalk as a full-stack AI SaaS platform that allows users to create personalized AI teaching companions and interact with them through real-time voice sessions. The platform combines authentication, database management, AI tutoring, speech recognition, voice synthesis, subscription controls and learning history into one application.",

    approach: [
      "Designed a companion builder where users configure the subject, topic, learning style, voice preference and session duration.",
      "Integrated VAPI AI to orchestrate real-time voice conversations between users and their AI companions.",
      "Connected Deepgram for speech-to-text transcription, OpenAI GPT-4 for intelligent tutoring responses and ElevenLabs for speech synthesis.",
      "Implemented Clerk authentication and subscription-based access control.",
      "Used Supabase/PostgreSQL for application data and learning history.",
      "Built companion browsing, search and subject filtering functionality.",
      "Implemented a My Journey dashboard for tracking created companions, completed sessions and learning activity.",
      "Added Sentry for application monitoring, error tracking and performance tracing.",
    ],

    outcome:
      "Delivered a complete AI-powered learning SaaS experience where users can create personalized tutors, start real-time voice learning sessions and track their learning journey from a unified platform.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "VAPI AI",
      "Deepgram",
      "ElevenLabs",
      "OpenAI GPT-4",
      "Clerk",
      "Supabase",
      "Sentry",
      "Lottie",
    ],
  },

  {
    id: "03",
    title: "AK Meet",
    category: "Full-Stack · Video Conferencing",
    shortDescription:
      "A full-stack video conferencing platform with real-time video calls, meeting chat, authentication and meeting history.",
    url: "https://ak-meet.vercel.app",
    image: "/projects/ak-meet.png",

    clientIdea:
      "Build a professional video conferencing platform inspired by the core experience of Zoom, allowing users to join meetings, communicate through video and audio, chat in real time and keep track of previous meetings.",

    problem: [
      "Video conferencing requires reliable real-time communication between multiple participants.",
      "Users need more than video calls, including authentication, meeting rooms, chat and meeting history.",
      "Peer-to-peer communication requires a signaling layer to establish and coordinate WebRTC connections.",
      "The application needs a responsive interface that remains usable across different screen sizes.",
    ],

    solution:
      "Built AK Meet as a full-stack video conferencing application using the MERN stack and WebRTC. Socket.io handles real-time signaling and chat while MongoDB stores application data such as users and meetings. The platform combines authentication, video communication, meeting rooms, chat and meeting history into one application.",

    approach: [
      "Built the frontend using React with Material UI for a responsive conferencing interface.",
      "Implemented WebRTC-based real-time audio and video communication.",
      "Used Socket.io as the real-time signaling layer for peer-to-peer WebRTC communication.",
      "Implemented real-time meeting chat using Socket.io events.",
      "Built user signup and login functionality with token-based authentication structure.",
      "Created MongoDB models for users and meetings using Mongoose.",
      "Separated the backend and frontend into distinct application layers within a monorepo-style structure.",
      "Implemented meeting history to track previous meetings and participation.",
      "Used React Context API for managing authentication state across the frontend.",
      "Used Axios for communication between the React frontend and Express backend.",
    ],

    outcome:
      "Delivered a functional full-stack conferencing platform that demonstrates real-time WebRTC communication, Socket.io signaling, live chat, authentication, database integration and meeting management.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "WebRTC",
      "Socket.io",
      "Material UI",
      "React Router",
      "Axios",
      "Context API",
      "JWT Authentication",
    ],
  },
];
