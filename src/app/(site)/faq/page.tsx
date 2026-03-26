import { PageLayout } from '@/components/layout/page-layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "Frequently Asked Questions (FAQ)",
  description: "Find answers to common questions about SnapStudio: how it works, pricing, image quality, and commercial usage rights.",
  path: "/faq",
  keywords: ["FAQ", "questions", "guide", "support", "help"]
});

export default function FaqPage() {
  const faqs = [
    {
      question: "How does SnapStudio work?",
      answer: "Simply upload one original product photo. Our AI will analyze it and automatically generate a set of 12 professional marketing images in 4 different styles: Display, Model, Social, and Seeding."
    },
    {
      question: "How much does each image generation cost?",
      answer: "Each batch of 12 images (Batch Mode) costs 120 credits. If you generate custom images (Solo Mode), the cost is 30 credits per image. We recommend using Batch Mode to maximize cost savings."
    },
    {
      question: "Can I use the generated images for commercial purposes?",
      answer: "Yes, all images you generate are your property, and you have full rights to use them for commercial purposes such as advertising, social media posts, websites, etc."
    },
    {
      question: "What is the output image quality like?",
      answer: "Generated images are high-resolution, suitable for both printing and digital platforms. The AI is trained to produce images with professional studio-quality lighting, composition, and finish."
    }
  ];

  return (
    <PageLayout
      title="Frequently Asked Questions (FAQ)"
      subtitle="Find answers to the most common questions."
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageLayout>
  );
}
