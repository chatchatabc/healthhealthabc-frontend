import React from "react";

function Section({
  children,
  sectionTitle,
}: {
  children: React.ReactNode;
  sectionTitle: string;
}) {
  return (
    <section className="p-4 space-y-2 container mx-auto">
      <header className="flex items-center space-x-4">
        <div className="h-1 rounded-full bg-blue-400 w-12"></div>
        <h2 className="text-2xl font-bold">{sectionTitle}</h2>
      </header>
      {children}
    </section>
  );
}

export default Section;
