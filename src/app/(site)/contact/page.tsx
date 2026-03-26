import { PageLayout } from '@/components/layout/page-layout';
import { Mail, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Contact the SnapStudio team for support and consultation on AI product image generation services. Email: contact@snapstudio.app",
  path: "/contact",
  keywords: ["contact", "support", "consultation", "help", "customer service"]
});

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      subtitle="We are always ready to hear from you."
    >
      <div className="text-center space-y-8">
        <p>
          If you have any questions, feedback, or need support, please contact us through the channels below. The SnapStudio team will respond to you as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <Mail className="w-6 h-6 text-blue-600" />
            <a href="mailto:contact@snapstudio.app" className="text-lg font-medium text-gray-800 hover:text-blue-600">
              contact@snapstudio.app
            </a>
          </div>
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <Phone className="w-6 h-6 text-green-600" />
            <span className="text-lg font-medium text-gray-800">
              (+84) 123 456 789
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
