'use client';

import { useRouter } from 'next/navigation';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { BlogForm } from '@/components/admin/blog/blog-form';
import { useToast } from '@/components/ui/toast';

interface EditBlogPostProps {
  postId: string;
}

export function EditBlogPost({ postId }: EditBlogPostProps) {
  const router = useRouter();
  const { ToastComponent } = useToast();

  const handleSave = () => {
    router.push('/admin/blog');
  };

  return (
    <div>
      <PageTitle
        title="Edit Blog Post"
        description="Update blog post details"
      />
      <BlogForm
        postId={postId}
        initialLocale="en"
        onSave={handleSave}
      />
      {ToastComponent}
    </div>
  );
}
