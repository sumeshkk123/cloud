'use client';

import { useRouter } from 'next/navigation';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { BlogForm } from '@/components/admin/blog/blog-form';
import { useToast } from '@/components/ui/toast';

export default function NewBlogPostPage() {
  const router = useRouter();
  const { ToastComponent } = useToast();

  const handleSave = () => {
    router.push('/admin/blog');
  };

  return (
    <div>
      <PageTitle
        title="New Blog Post"
        description="Create a new blog post"
      />
      <BlogForm
        postId={null}
        initialLocale="en"
        onSave={handleSave}
      />
      {ToastComponent}
    </div>
  );
}
