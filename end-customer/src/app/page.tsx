"use client";

import React from "react";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Section from "@/components/Section";

function Home() {
  const testRef = React.useRef<HTMLUListElement>(null);

  const topSpecialties = [
    "Dentist",
    "Dermatologist",
    "Psychiatrist",
    "Internal Medicine",
  ];

  const topDoctors = [
    {
      name: "Dr. John Doe",
      specialty: "Dentist",
      avatar: "https://picsum.photos/200",
    },
    {
      name: "Dr. John Doe",
      specialty: "Dentist",
      avatar: "https://picsum.photos/200",
    },
    {
      name: "Dr. John Doe",
      specialty: "Dentist",
      avatar: "https://picsum.photos/200",
    },
  ];

  const whyChooseUs = [
    {
      name: "24h Services",
      image: "support.svg",
    },
    {
      name: "Professional",
      image: "professional.svg",
    },
    {
      name: "Privacy & Security",
      image: "privacy.svg",
    },
    {
      name: "Healthy Care",
      image: "care.svg",
    },
    {
      name: "Reviewed & Verified",
      image: "verified.svg",
    },
  ];

  const howItWorks = [
    {
      title: "Sign up / Log in",
      description:
        "To book a slot with your doctor and pay for the consultant.",
      image: "login.svg",
    },
    {
      title: "Choose Doctor",
      description:
        "The doctor as per your need and time that best suits for you.",
      image: "choose.svg",
    },
    {
      title: "Schedule & Confirm",
      description:
        "Make an appointment with the doctor and confirm the information.",
      image: "schedule.svg",
    },
    {
      title: "Payment",
      description: "Pay for you appointment and get the service.",
      image: "payment.png",
    },
    {
      title: "See a Doctor",
      description: "See a doctor and get better.",
      image: "see.svg",
    },
  ];

  return (
    <main className="flex-1">
      {/* Desktop Search Section */}
      <section className="px-4 lg:px-8">
        {/* Container */}
        <div className="hidden h-96 relative mx-auto max-w-5xl rounded-xl overflow-hidden lg:flex">
          {/* Left */}
          <div className="bg-[#00A3E0] flex-1 py-24 px-2 flex flex-col justify-between">
            <h2 className="text-3xl font-medium">
              Best way to find the{" "}
              <span className="text-white">RIGHT DOCTOR</span>
            </h2>
            <div className="-mr-24 relative flex ml-4">
              <SearchOutlined className="absolute pointer-events-none left-2 top-1/2 -translate-y-1/2" />
              <input className="flex-1 pl-8 p-1 rounded-l-lg" />
              <button className="px-4 p-1 bg-white rounded-r-lg">Search</button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <img
              className="w-full h-full object-cover"
              src="/images/hero-bg.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="p-4 space-y-2 container mx-auto lg:hidden">
        <header>
          <h2 className="text-2xl font-bold">
            Find the{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00A3E0] to-[#F81B1B]">
              Right Doctor
            </span>
          </h2>
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

      {/* Top Specialty Section */}
      <Section sectionTitle="Top Specialty">
        <div className="flex items-center">
          <button
            onClick={() => {
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
                className="snap-start w-1/3 shrink-0 px-2 grid lg:w-1/4"
              >
                <div className="bg-[#00A3E0] grid place-items-center min-h-[150px] h-full lg:rounded-xl lg:min-h-[350px]">
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
              if (testRef.current) testRef.current.scrollLeft += 300;
            }}
            className="w-8 h-8 rounded-full bg-white text-[#00A3E0] border-4 border-[#00A3E0]"
          >
            X
          </button>
        </div>
      </Section>

      {/* Top Doctors Section */}
      <Section sectionTitle="Top Doctors">
        <ul className="space-y-4">
          {topDoctors.map((doctor, index) => (
            <li
              key={`${doctor.name}-${index}`}
              className={
                "shadow-lg bg-[#CCDDE4] rounded-xl overflow-hidden p-1"
              }
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-[#00A3E0]"></div>
                <div>
                  <h3 className="text-lg font-bold">{doctor.name}</h3>
                  <p className="text-sm">{doctor.specialty}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Top Hospitals Section */}
      <Section sectionTitle="Top Hospitals">
        <div className="flex space-x-4">
          <div className="flex-1 bg-[#00A3E0] rounded-lg overflow-hidden">
            Test
          </div>
          <div className="w-1/2 space-y-2">
            <div className="aspect-video bg-[#00A3E0] rounded-lg overflow-hidden">
              Test
            </div>
            <div className="aspect-video bg-[#00A3E0] rounded-lg overflow-hidden">
              Test
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section sectionTitle="Why Choose Us">
        <ul className="flex justify-center flex-wrap md:justify-between">
          {whyChooseUs.map((item, index) => (
            <li className="w-1/3 p-2 md:w-1/6" key={index + item.name}>
              <figure className="space-y-4 flex flex-col items-center">
                <img
                  className="w-full aspect-square"
                  src={`/images/why/${item.image}`}
                  alt="24h Services"
                />
                <figcaption>
                  <h3 className="text-sm text-center font-bold">{item.name}</h3>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works Section */}
      <Section sectionTitle="How it works">
        {/* Steps how to use the application */}
        <ul className="space-y-2">
          {howItWorks.map((item, index) => (
            <li key={index + item.title}>
              <div className="flex space-x-4">
                <div className="flex items-center space-y-2 flex-col">
                  <img
                    className="w-16 aspect-square"
                    src={`/images/how/${item.image}`}
                    alt={item.title}
                  />
                  {index !== howItWorks.length - 1 && (
                    <div className="w-1 flex-1 bg-black"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mb-16">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

export default Home;
