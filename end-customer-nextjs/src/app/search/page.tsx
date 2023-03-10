"use client";

import React from "react";
import { Select } from "antd";

function page() {
  const data: string[] = [];
  return (
    <main>
      {/* Filters */}
      <section className="max-w-5xl mx-auto p-4 lg:px-8">
        <div className="flex space-x-4">
          <div className="flex-1">
            <p>Specialty:</p>
            <Select
              showSearch
              allowClear
              defaultValue={"1"}
              className="w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "All",
                },
                {
                  value: "2",
                  label: "Internal Medicine",
                },
                {
                  value: "3",
                  label: "Pediatric",
                },
                {
                  value: "4",
                  label: "Dentistry",
                },
              ]}
            />
          </div>

          <div className="flex-1">
            <p>Sort by:</p>
            <Select
              showSearch
              allowClear
              defaultValue={"1"}
              className="w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Default",
                },
                {
                  value: "2",
                  label: "Availability",
                },
                {
                  value: "3",
                  label: "Ratings",
                },
                {
                  value: "4",
                  label: "Price",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto pt-4">
        <header>
          <h2 className="text-4xl text-center pb-4">Doctors</h2>
        </header>

        <ul className="border rounded-lg p-8">
          {data.length ? (
            data.map(() => {
              return <li>1</li>;
            })
          ) : (
            <li className="text-center">No doctors found</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default page;
