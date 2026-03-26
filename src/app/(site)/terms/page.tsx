import { PageLayout } from '@/components/layout/page-layout';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using SnapStudio services. Last updated: 07/25/2024.",
  path: "/terms",
  keywords: ["terms of service", "terms and conditions", "legal", "policy"],
  noIndex: true // Usually you don't want legal pages indexed
});

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Last updated: 07/25/2024"
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
      <p>
        Welcome to SnapStudio. By accessing or using our services, you agree to comply with these terms and conditions. Please read them carefully before use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
      <p>
        You agree not to use the service for any illegal purpose or in violation of any laws in your jurisdiction. You are responsible for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
      <p>
        All content created by users remains the property of the user. However, by using the service, you grant SnapStudio the right to use, reproduce, and display that content for the purpose of operating and improving the service.
      </p>
    </PageLayout>
  );
}
