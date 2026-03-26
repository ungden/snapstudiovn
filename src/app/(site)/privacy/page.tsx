import { PageLayout } from '@/components/layout/page-layout';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "SnapStudio's personal information privacy policy. We respect your privacy.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "GDPR", "personal data"],
  noIndex: true
});

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="We respect your privacy."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
      <p>
        We collect information you provide directly to us, such as when you create an account, including your name, email address, and payment information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about updates and offers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
      <p>
        We do not share your personal information with outside companies, organizations, or individuals unless we have your consent or are required to do so by law.
      </p>
    </PageLayout>
  );
}
