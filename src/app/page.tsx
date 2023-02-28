"use client";

import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Section from "./components/widgets/Section";

function Home() {
  const testRef = React.useRef<HTMLUListElement>(null);

  const topSpecialties = [
    "Dentist",
    "Dermatologist",
    "Psychiatrist",
    "Internal Medicine",
  ];

  return (
    <main className="flex-1">
      {/* Desktop */}
      <section className="hidden py-16">
        {/* Section Background */}
        <div className="absolute h-full w-full flex">
          <div className="bg-[#00A3E0]"></div>
        </div>
      </section>

      {/* Mobile */}
      <section className="p-4 space-y-2 container mx-auto">
        <header>
          <h2 className="text-2xl font-bold">Find the Right Doctor</h2>
        </header>
        <div className="flex space-x-4">
          <Input
            prefix={<UserOutlined />}
            className="rounded-full h-8"
            placeholder="Search"
          />
          <button className="w-8 h-8 text-white bg-[#00A3E0]">X</button>
        </div>
      </section>

      {/* Top Specialty */}
      <Section sectionTitle="Top Specialty">
        <div className="flex items-center">
          <button
            onClick={() => {
              console.log(testRef);
              if (testRef.current) testRef.current.scrollLeft -= 300;
            }}
            className="w-8 h-8 rounded-full bg-white text-[#00A3E0] border-4 border-[#00A3E0]"
          >
            X
          </button>
          <ul
            ref={testRef}
            className="scroll-smooth flex flex-1 overflow-auto snap-x"
          >
            {topSpecialties.map((specialty) => (
              <li
                key={specialty}
                className="snap-start w-1/3 shrink-0 px-2 grid"
              >
                <div className="bg-[#00A3E0] grid place-items-center min-h-[200px] h-full">
                  <figure className="text-white">
                    <figcaption>
                      <h3 className="text-center">{specialty}</h3>
                    </figcaption>
                  </figure>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              console.log(testRef);
              if (testRef.current) testRef.current.scrollLeft += 300;
            }}
            className="w-8 h-8 rounded-full bg-white text-[#00A3E0] border-4 border-[#00A3E0]"
          >
            X
          </button>
        </div>
      </Section>
    </main>
  );
}

export default Home;
