import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

const pricingPlans = {
  Monthly: [
    {
      name: "$499",
      save: "Save $101",
      features: [
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "Edit and cancel Anytime",
        "Brand Identity Design",
        "social media poster Designer",
      ],
    },
    {
      name: "$999",
      save: "Save $201",
      mostPopular: true,
      features: [
        "Brand Identity Design",
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "Dashboard Design",
        "SEO Optimisation",
        "social media poster Designer",
        "Edit and cancel Anytime",
      ],
    },
    {
      name: "$599",
      save: "Save $151",
      features: [
        "Brand Identity Design",
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "social media poster Designer",
        "Edit and cancel Anytime",
      ],
    },
  ],
  Annual: [
    {
      name: "$4499",
      save: "Save $1200",
      features: [
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "Edit and cancel Anytime",
        "Brand Identity Design",
        "social media poster Designer",
      ],
    },
    {
      name: "$8999",
      save: "Save $2500",
      mostPopular: true,
      features: [
        "Brand Identity Design",
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "Dashboard Design",
        "SEO Optimisation",
        "social media poster Designer",
        "Edit and cancel Anytime",
      ],
    },
    {
      name: "$4999",
      save: "Save $1600",
      features: [
        "Brand Identity Design",
        "UX research",
        "Custom Asset Design",
        "UI Design",
        "Advance Prototype",
        "Frontend develops",
        "Backend develops",
        "social media poster Designer",
        "Edit and cancel Anytime",
      ],
    },
  ],
};

const PlanSection = () => {
  const [activeTab, setActiveTab] = useState("Monthly");
  const tabs = Object.keys(pricingPlans);

  return (
    <div className="text-white py-16 px-4 flex flex-col items-center">
      <h1 className="font-archivo font-bold text-5xl mb-6 text-center">
        Choose Your <span className="text-primary-500">Plan</span>
      </h1>
      {/* Tabs */}
      <div className="mb-4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-md transition font-semibold text-sm cursor-pointer ${
              activeTab === tab
                ? "bg-primary-500 text-white"
                : "bg-white/10 hover:bg-white/20 text-white/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 max-w-6xl w-full md:mt-8">
        {pricingPlans[activeTab].map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-black/40 backdrop-blur-2xl p-6 shadow-md flex flex-col items-center border-2 hover:border-primary-500 border-gray-800 transition-all ${
              plan?.mostPopular ? "md:scale-110" : ""
            }`}
          >
            <h2 className="text-5xl font-bold">{plan.name}</h2>
            <p className="text-yellow-500 mb-6 font-poppins">{plan.save}</p>

            <ul className="space-y-3 mb-6 text-sm opacity-80">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">
                    <MdCheck />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary-500 hover:bg-primary-500/80 transition text-white font-medium px-4 py-2 cursor-pointer rounded-md">
              Go to Next
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSection;
