import { PageLayout } from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "Blog - AI and Marketing Trends",
  description: "Stay up to date with the latest trends in AI image generation, marketing automation, and digital transformation for businesses.",
  path: "/blog",
  keywords: ["blog AI", "marketing trends", "digital transformation", "AI photography"]
});

export default function BlogPage() {
  const posts = [
    { title: "5 Tips for AI Product Photography to Boost Sales", category: "Marketing", date: "07/20/2024" },
    { title: "Cost Comparison: Studio Photography vs. SnapStudio AI Generation", category: "Case Study", date: "07/15/2024" },
    { title: "Guide to Using the 'Seeding' Style Effectively", category: "Tutorial", date: "07/10/2024" },
  ];

  return (
    <PageLayout
      title="Blog"
      subtitle="Stay up to date with the latest AI and marketing trends."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link href="#" key={index}>
            <Card className="card-hover">
              <CardHeader>
                <Badge className="mb-2">{post.category}</Badge>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
