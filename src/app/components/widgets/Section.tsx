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
        <div className="h-1 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#F81B1B] w-12"></div>
        <h2 className="text-2xl font-bold">{sectionTitle}</h2>
      </header>
      {children}
    </section>
  );
}

export default Section;
