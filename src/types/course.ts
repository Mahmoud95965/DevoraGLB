export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  instructor: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    bio?: string;
  };
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  price: number;
  originalPrice?: number;
  language: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  previewUrl?: string;
  videos?: CourseVideo[];
  syllabus: CourseLecture[];
  requirements: string[];
  whatYouWillLearn: string[];
  stats: {
    enrollments: number;
    rating: number;
    reviews: number;
    completionRate: number;
  };
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface CourseLecture {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  videoUrl?: string;
  materials?: CourseMaterial[];
  order: number;
  free?: boolean;
}

export interface CourseVideo {
  id: string;
  title: string;
  description?: string;
  videoFile?: File;
  file?: File;
  thumbnail?: string | File | null;
  url?: string;
  duration?: number;
}

export interface CourseMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'code' | 'link' | 'quiz';
  url: string;
  size?: number;
}

export interface CourseEnrollment {
  id: string;
  courseId: string;
  studentId: string;
  enrolledAt: string;
  progress: number; // 0-100
  completedLectures: string[];
  lastAccessedAt: string;
  certificateIssued?: boolean;
}

export interface CourseReview {
  id: string;
  courseId: string;
  studentId: string;
  studentName: string;
  studentAvatar?: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
  helpful: number;
}

export const COURSE_CATEGORIES = [
  'تطوير الويب',
  'تطوير التطبيقات',
  'علوم البيانات',
  'الذكاء الاصطناعي',
  'الأمن السيبراني',
  'تصميم واجهات المستخدم',
  'إدارة قواعد البيانات',
  'البرمجة الأساسية',
  'تطوير الألعاب',
  'الحوسبة السحابية',
  'إنترنت الأشياء',
  'البلوك تشين'
];

export const COURSE_LEVELS = [
  { value: 'beginner', label: 'مبتدئ' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'متقدم' }
];

export const COURSE_LANGUAGES = [
  'العربية',
  'الإنجليزية',
  'الفرنسية',
  'الألمانية',
  'الإسبانية'
];
