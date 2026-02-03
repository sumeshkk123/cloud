'use client';

import { EditBlogPost } from '@/components/admin/blog/edit/edit-blog-post';

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  return <EditBlogPost postId={params.id} />;
}
