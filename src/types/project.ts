export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar?: string;
    email: string;
  };
  repository: {
    url?: string;
    files: ProjectFile[];
    mainFile?: string;
  };
  stats: {
    views: number;
    likes: number;
    forks: number;
    downloads: number;
  };
  imageUrl?: string;
  demoUrl?: string;
  status: 'draft' | 'published' | 'featured';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  framework?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  path: string;
  content: string;
  language: string;
  size: number;
  type: 'file' | 'folder';
  children?: ProjectFile[];
}

export interface ProjectComment {
  id: string;
  projectId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  rating?: number;
  createdAt: string;
  updatedAt: string;
  replies?: ProjectComment[];
}

export interface ProjectLike {
  id: string;
  projectId: string;
  userId: string;
  createdAt: string;
}

export interface ProjectFork {
  id: string;
  originalProjectId: string;
  forkedProjectId: string;
  userId: string;
  createdAt: string;
}

export const PROJECT_CATEGORIES = [
  'تطبيقات الويب',
  'تطبيقات الموبايل',
  'ألعاب',
  'ذكاء اصطناعي',
  'أمن المعلومات',
  'قواعد البيانات',
  'أدوات التطوير',
  'مواقع إلكترونية',
  'APIs',
  'أخرى'
] as const;

export const PROGRAMMING_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'Dart',
  'HTML/CSS',
  'أخرى'
] as const;

export const FRAMEWORKS = [
  'React',
  'Vue.js',
  'Angular',
  'Next.js',
  'Nuxt.js',
  'Laravel',
  'Django',
  'Flask',
  'Spring Boot',
  'Express.js',
  'Flutter',
  'React Native',
  'أخرى'
] as const;
