export interface Video {
  id: string;
  title: string;
  description: string | null;
  fileId: string;
  url?: string;
  publishedAt: string;
}

export interface VideoFormData {
  title: string;
  description: string;
  fileId: string;
}
