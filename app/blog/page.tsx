"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: 'Top 10 Tips for Successful Grant Applications',
      excerpt: 'Learn the essential strategies that will help your grant proposal stand out.',
      author: 'John Doe',
      date: 'January 15, 2025',
      category: 'Grant Writing',
      slug: null,
    },
    {
      title: 'Understanding EU Funding Mechanisms',
      excerpt: 'A comprehensive guide to navigating European Union grant programs.',
      author: 'Jane Smith',
      date: 'January 10, 2025',
      category: 'EU Grants',
      slug: '/blog/eu-funding-mechanisms',
    },
    {
      title: 'Project Management Best Practices',
      excerpt: 'Essential project management techniques for funded initiatives.',
      author: 'Mike Johnson',
      date: 'January 5, 2025',
      category: 'Project Development',
      slug: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Stay informed with the latest insights, tips, and updates from our grant consulting experts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              post.slug ? (
                <Link key={index} href={post.slug}>
                  <Card className="hover:shadow-lg transition-smooth cursor-pointer h-full">
                    <CardHeader>
                      <div className="text-xs text-primary font-semibold mb-2">{post.category}</div>
                      <CardTitle className="hover:text-primary transition-smooth">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card key={index} className="hover:shadow-lg transition-smooth cursor-not-allowed opacity-70 h-full">
                  <CardHeader>
                    <div className="text-xs text-primary font-semibold mb-2">{post.category}</div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

