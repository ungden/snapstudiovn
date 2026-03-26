import { PageLayout } from '@/components/layout/page-layout';
import { Zap, Star, CheckCircle } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "AI Product Image Generation Features",
  description: "Discover the power of SnapStudio: ultra-fast AI image generation, 4 complete marketing styles, professional studio quality.",
  path: "/features",
  keywords: ["AI features", "fast image generation", "marketing automation", "studio quality"]
});

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast AI Image Generation",
      description: "Generate 12 professional product images in just 30 seconds with Gemini 2.5 Flash technology. No studio needed, no photographer required.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Star,
      title: "4 Complete Marketing Styles",
      description: "Display (white studio background), Model (with models), Social (social posts), Seeding (UGC) - covering all sales channels and advertising needs.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Professional Studio Quality",
      description: "Output images are high-resolution with studio-grade lighting and perfect composition. Ready for websites, social media, and e-commerce platforms.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <PageLayout
      title="AI Image Generation Service"
      subtitle="Discover the power of SnapStudio"
    >
      <div className="space-y-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-6 p-6 border rounded-lg">
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${feature.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-700">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
