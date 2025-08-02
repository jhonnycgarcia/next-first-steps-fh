import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Learn more about us on the About Page",
  keywords: ['about page', 'smil8', 'information', 'details'],
};

export default function AboutPage() {
  return (
    <>
        <span className="text-5xl">AboutPage</span>
    </>
  );
}