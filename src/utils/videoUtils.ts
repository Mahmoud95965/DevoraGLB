import { Video } from '../types/video';
import { Course } from '../types/course';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

// Check if a video is used in any course
export const isVideoUsedInCourses = async (videoId: string): Promise<boolean> => {
  try {
    const coursesRef = collection(db, 'courses');
    const querySnapshot = await getDocs(coursesRef);
    
    for (const doc of querySnapshot.docs) {
      const course = doc.data() as Course;
      if (course.videos && course.videos.some(video => video.id === videoId)) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error('Error checking video usage:', error);
    return false;
  }
};

// Get courses that use a specific video
export const getCoursesUsingVideo = async (videoId: string): Promise<Course[]> => {
  try {
    const coursesRef = collection(db, 'courses');
    const querySnapshot = await getDocs(coursesRef);
    const coursesUsingVideo: Course[] = [];
    
    querySnapshot.forEach((doc) => {
      const course = { id: doc.id, ...doc.data() } as Course;
      if (course.videos && course.videos.some(video => video.id === videoId)) {
        coursesUsingVideo.push(course);
      }
    });
    
    return coursesUsingVideo;
  } catch (error) {
    console.error('Error getting courses using video:', error);
    return [];
  }
};

// Save video URL properly
export const saveVideoUrl = (video: Video): string => {
  if (video.fileId) {
    return `https://drive.google.com/file/d/${video.fileId}/preview`;
  }
  return video.url || '';
};

// Update video in localStorage
export const updateVideoInStorage = (updatedVideo: Video): void => {
  try {
    const savedVideos = localStorage.getItem('educational-videos');
    if (savedVideos) {
      const videos: Video[] = JSON.parse(savedVideos);
      const updatedVideos = videos.map(video => 
        video.id === updatedVideo.id ? updatedVideo : video
      );
      localStorage.setItem('educational-videos', JSON.stringify(updatedVideos));
    }
  } catch (error) {
    console.error('Error updating video in storage:', error);
  }
};

// Remove video from localStorage only if not used in courses
export const safeRemoveVideo = async (videoId: string): Promise<{ success: boolean; message: string; coursesUsing?: Course[] }> => {
  try {
    // Check if video is used in any course
    const isUsed = await isVideoUsedInCourses(videoId);
    
    if (isUsed) {
      const coursesUsing = await getCoursesUsingVideo(videoId);
      return {
        success: false,
        message: 'لا يمكن حذف هذا الفيديو لأنه مستخدم في كورسات موجودة',
        coursesUsing
      };
    }
    
    // Remove from localStorage
    const savedVideos = localStorage.getItem('educational-videos');
    if (savedVideos) {
      const videos: Video[] = JSON.parse(savedVideos);
      const updatedVideos = videos.filter(video => video.id !== videoId);
      localStorage.setItem('educational-videos', JSON.stringify(updatedVideos));
    }
    
    return {
      success: true,
      message: 'تم حذف الفيديو بنجاح'
    };
  } catch (error) {
    console.error('Error removing video:', error);
    return {
      success: false,
      message: 'حدث خطأ أثناء حذف الفيديو'
    };
  }
};
