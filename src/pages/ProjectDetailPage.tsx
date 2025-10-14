import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Eye, 
  ShoppingCart, 
  CheckCircle, 
  ExternalLink,
  Tag,
  Calendar
} from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  features?: string[];
  technologies?: string[];
  demoUrl?: string;
  createdAt: any;
}

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const projectDoc = await getDoc(doc(db, 'projects', projectId!));
      if (projectDoc.exists()) {
        setProject({ id: projectDoc.id, ...projectDoc.data() } as Project);
      }
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            المشروع غير موجود
          </h2>
          <button
            onClick={() => navigate('/portfolio')}
            className="text-blue-600 hover:text-blue-700"
          >
            العودة للمشاريع
          </button>
        </div>
      </div>
    );
  }

  const displayImages = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة للمشاريع</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-4"
            >
              <img
                src={displayImages[selectedImage]}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            {displayImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {displayImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-blue-600 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 rtl:space-x-reverse">
                <Tag className="w-4 h-4" />
                <span>{project.category}</span>
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            {project.longDescription && (
              <div className="prose dark:prose-invert mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  المميزات:
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  التقنيات المستخدمة:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price & Actions */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">السعر</p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white">
                    {project.price.toLocaleString()} ج.م
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    <span>معاينة المشروع</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>اطلب المشروع الآن</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar className="w-4 h-4" />
                <span>
                  تم الإضافة: {project.createdAt?.toDate?.()?.toLocaleDateString('ar-SA') || 'غير محدد'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
