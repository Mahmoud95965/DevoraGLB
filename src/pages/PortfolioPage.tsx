import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Search, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  demoUrl?: string;
  createdAt: any;
}

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'ecommerce', label: 'متاجر إلكترونية' },
    { id: 'corporate', label: 'مواقع شركات' },
    { id: 'portfolio', label: 'معرض أعمال' },
    { id: 'blog', label: 'مدونات' },
    { id: 'other', label: 'أخرى' }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const projectsQuery = query(
        collection(db, 'projects'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(projectsQuery);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            مشاريعنا المميزة
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            اختر من بين مشاريعنا الجاهزة أو احصل على موقع مخصص يناسب احتياجاتك
          </p>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن مشروع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                لا توجد مشاريع متاحة حالياً
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 rtl:space-x-reverse">
                      <Tag className="w-3 h-3" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.price.toLocaleString()} ج.م
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demoUrl, '_blank');
                            }}
                            className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
