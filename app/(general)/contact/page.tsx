import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Learn more about us on the Contact Page",
  keywords: ['contact page', 'smil8', 'information', 'details'],
};

export default function ContactPage() {
  return (
    <>
        <span className="text-5xl">ContactPage</span>
    </>
  );
}