/**
 * Blog Post Detail Page
 * Individual blog post with full content
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Prose, Heading, Text } from '@/components/ui';
import { CTASection } from '@/sections';
import { generatePageMetadata, generateArticleSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';
import { getPostBySlug, getAllPostSlugs, processPost } from '@/lib/wordpress';
import { absoluteUrl, formatDate } from '@/lib/utils';

// ============================================
// Types
// ============================================

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// ============================================
// Static Params Generation
// ============================================

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

// ============================================
// Metadata
// ============================================

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return generatePageMetadata({
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
        noIndex: true,
      });
    }

    const processedPost = processPost(post);

    return generatePageMetadata({
      title: processedPost.title,
      description: processedPost.excerpt,
      image: processedPost.featuredImage?.src,
      pathname: `/blog/${slug}`,
      article: {
        publishedTime: processedPost.date,
        modifiedTime: processedPost.modifiedDate,
        author: processedPost.author?.name,
        tags: processedPost.categories.map((cat) => cat.name),
      },
    });
  } catch {
    return generatePageMetadata({
      title: 'Blog Post',
      description: 'Read our latest health insights and medical advice.',
      pathname: `/blog/${slug}`,
    });
  }
}

// ============================================
// ISR Configuration
// ============================================

export const revalidate = 600;

// ============================================
// Page Component
// ============================================

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post;
  try {
    const wpPost = await getPostBySlug(slug);
    if (wpPost) {
      post = processPost(wpPost);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  // Show placeholder content if no post found (for development)
  if (!post) {
    // For development, show a placeholder
    post = {
      id: 1,
      slug,
      title: 'Sample Blog Post Title',
      excerpt: 'This is a sample excerpt for the blog post.',
      content: `
        <p>This is placeholder content for development. When you connect your WordPress CMS, the actual post content will appear here.</p>
        <h2>What You'll Learn</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <h2>Key Takeaways</h2>
        <ul>
          <li>First important point about health</li>
          <li>Second important point about wellness</li>
          <li>Third important point about medical care</li>
        </ul>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote>
          <p>"Healthcare is not just about treating illness, it's about promoting wellness and preventing disease."</p>
        </blockquote>
        <h2>Conclusion</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
      `,
      date: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      author: { name: 'Dr. Jane Smith', avatar: '' },
      featuredImage: null,
      categories: [{ id: 1, name: 'Health Tips', slug: 'health-tips' }],
      readingTime: 5,
    };
  }

  // JSON-LD Schema
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: post.featuredImage?.src || `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: post.date,
    dateModified: post.modifiedDate,
    authorName: post.author?.name || siteConfig.name,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: absoluteUrl(`/blog/${post.slug}`) },
  ]);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="pt-32 pb-20">
        <Container size="md">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-700 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            {post.categories[0] && (
              <Link
                href={`/blog/category/${post.categories[0].slug}`}
                className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full mb-4 hover:bg-primary-200 transition-colors"
              >
                {post.categories[0].name}
              </Link>
            )}

            <Heading as="h1" size="xl" className="mb-6">
              {post.title}
            </Heading>

            <div className="flex flex-wrap items-center gap-6 text-neutral-600">
              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-700">
                      {post.author.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <span className="font-medium text-neutral-900">{post.author.name}</span>
                </div>
              )}

              {/* Date */}
              <time dateTime={post.date}>{formatDate(post.date)}</time>

              {/* Reading time */}
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage ? (
            <figure className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </figure>
          ) : (
            <figure className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-primary-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-primary-700 font-medium">Featured Image</p>
                  <p className="text-sm text-primary-600/80">Add via WordPress CMS</p>
                </div>
              </div>
            </figure>
          )}

          {/* Content */}
          <Prose>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Prose>

          {/* Tags/Categories */}
          {post.categories.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Text weight="medium" className="mb-3">
                Categories:
              </Text>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="px-4 py-2 text-sm bg-neutral-100 text-neutral-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <Text weight="medium" className="mb-3">
              Share this article:
            </Text>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(absoluteUrl(`/blog/${post.slug}`))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl(`/blog/${post.slug}`))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(absoluteUrl(`/blog/${post.slug}`))}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </article>

      {/* CTA Section */}
      <CTASection
        content={{
          headline: 'Have Questions About Your Health?',
          description: 'Our team of expert physicians is here to help. Schedule a consultation today.',
          buttonText: 'Book a Consultation',
          buttonHref: '/appointments',
        }}
        variant="primary"
      />
    </>
  );
}
