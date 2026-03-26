"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Users, Zap, ArrowRight, TrendingUp, Award, Shield, LogIn, Star, CheckCircle, Sparkles, CreditCard } from "lucide-react";
import PricingPlans from "@/components/pricing-plans";
import { useRouter } from "next/navigation";

const DEMO_IMAGES = [
  { src: "https://raw.githubusercontent.com/ungden/snapstudio/main/docs/images/553323811_10163378911118750_3011025545344987494_n.jpg", alt: "Fashion demo - Striped shirt" },
  { src: "https://raw.githubusercontent.com/ungden/snapstudio/main/docs/images/555460282_10163378911348750_5147601682514173002_n.jpg", alt: "Shoes demo - Nike sneakers" },
  { src: "https://raw.githubusercontent.com/ungden/snapstudio/main/docs/images/558764108_10163415838538750_7584497244626114108_n.jpg", alt: "Fashion demo - Sweater" },
];

const stats = [
  { number: '50,000+', label: 'Images generated', icon: TrendingUp, color: 'text-blue-600' },
  { number: '2,500+', label: 'Businesses trust us', icon: Users, color: 'text-green-600' },
  { number: '4.9/5', label: 'Customer rating', icon: Award, color: 'text-yellow-600' },
  { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-purple-600' }
];

const features = [
  {
    icon: Zap,
    title: "Complete marketing image set in 30 seconds",
    description: "From 1 source photo, generate 12 images for every platform: Website, Facebook, Instagram, TikTok, Shopee, Lazada",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Star,
    title: "4 styles covering the entire customer journey",
    description: "Product displays, real models, social media content, ad banners - from awareness to conversion",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Brand consistency across every channel",
    description: "Uniform color tone, style, and quality - build a strong and professional brand identity",
    color: "bg-green-100 text-green-600"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager - Fashion Brand",
    content: "SnapStudio gives our team enough images for the whole year! Website, Facebook Ads, Instagram Stories, TikTok - all with beautiful, brand-consistent photos.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random&color=fff",
    industry: 'fashion'
  },
  {
    name: "James Park",
    role: "Founder - Restaurant Chain",
    content: "From printed menus, store posters, to Facebook and food delivery apps - all using SnapStudio images. Customers see great photos, orders increase significantly!",
    avatar: "https://ui-avatars.com/api/?name=James+Park&background=random&color=fff",
    industry: 'f_b'
  },
  {
    name: "Lisa Nguyen",
    role: "CEO - Beauty House",
    content: "One photo shoot gives us content for the entire month: website images, Shopee banners, Instagram stories, TikTok videos. Marketing team never runs out of photos!",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Nguyen&background=random&color=fff",
    industry: 'beauty'
  }
];

const comparisonData = [
  { aspect: 'Platform coverage', traditional: '1-2 platforms', snapstudio: 'All platforms', improvement: 'Full coverage' },
  { aspect: 'Time to get images', traditional: '2-4 weeks', snapstudio: '30 seconds', improvement: '99% faster' },
  { aspect: 'Cost for multi-platform', traditional: '$500-$2,000', snapstudio: '$5-$199', improvement: 'Save 90%' },
  { aspect: 'Brand consistency', traditional: 'Hard to maintain', snapstudio: 'Fully consistent', improvement: 'Strong brand identity' }
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg pt-24 pb-16">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative container-custom">
          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <Badge className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-6 py-2 mb-8 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              #1 AI-powered multi-platform marketing image solution
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
              <span className="gradient-text">SnapStudio</span>
              <span className="text-gray-900">.app</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-balance max-w-4xl mx-auto">
              <span className="font-bold text-purple-600">1 product photo</span>{" -> "}
              <span className="font-bold text-blue-600">12 complete marketing images</span> for
              <span className="font-bold text-green-600"> every platform</span>: Website, Social Media, E-commerce, Advertising
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                variant="default"
                className="btn-primary text-lg px-8 py-4 animate-scale-in animation-delay-200"
                onClick={() => router.push('/login')}
              >
                <LogIn className="w-5 h-5 mr-2" />
                Create marketing images now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary text-lg px-8 py-4 animate-scale-in animation-delay-400"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                View pricing
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`text-center animate-fade-in-up`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-3 shadow-lg ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Marketing Image Set
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              1 source photo -&gt; 12 professional marketing images in 4 styles: <strong>Seeding</strong> | <strong>Social</strong> | <strong>Model</strong> | <strong>Display</strong>
            </p>
          </div>
          <div className="space-y-8">
            {DEMO_IMAGES.map((demo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src={demo.src}
                  alt={demo.alt}
                  className="w-full h-auto"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              Why businesses choose SnapStudio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing image solution that saves time and money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${feature.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              SnapStudio vs Traditional Photography
            </h2>
            <p className="text-xl text-gray-600">Full coverage, brand consistency, cost savings</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="grid grid-cols-4 p-6">
                  <div className="font-semibold text-lg">Criteria</div>
                  <div className="font-semibold text-lg">Traditional</div>
                  <div className="font-semibold text-lg">SnapStudio</div>
                  <div className="font-semibold text-lg">Benefit</div>
                </div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className={`grid grid-cols-4 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="font-medium text-gray-900">{row.aspect}</div>
                  <div className="text-gray-600">{row.traditional}</div>
                  <div className="text-blue-600 font-semibold">{row.snapstudio}</div>
                  <div className="text-green-600 font-bold">{row.improvement}</div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              Trusted by businesses across industries
            </h2>
            <p className="text-xl text-gray-600">Over 2,500 businesses have their complete marketing image set</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingPlans />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container-custom text-center">
          <div className="animate-float">
            <Sparkles className="w-16 h-16 text-white/80 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready for your complete marketing image set?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Create a full set of images for every marketing platform right now.
          </p>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            onClick={() => router.push('/login')}
          >
            <LogIn className="w-5 h-5 mr-2" />
            Create marketing images now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
