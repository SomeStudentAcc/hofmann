"use client";
import BranchSingle from "@/components/shared/BranchSingle";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { LazyBranchMap } from "@/components/shared/LazyBranchMap";
import React, { useState } from "react";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Магазины",
  },
];

export default function Branches() {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <div className="container mx-auto mb-20">
      <Breadcrumbs items={scrums} />
      <div>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-2xl font-semibold">Магазины</h2>
          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={() => setSelectedView(2)}
              className={`py-3 px-8 flex-1 text-center border bg-white/10 ${
                selectedView === 2 ? "border-[3px] border-[#D1D1D1]" : ""
              }`}
            >
              карта
            </button>
            <button
              onClick={() => setSelectedView(1)}
              className={`py-3 px-8 flex-1 text-center border bg-white/10 ${
                selectedView === 1 ? "border-[3px] border-[#D1D1D1]" : ""
              }`}
            >
              список
            </button>
          </div>
        </div>

        <div className="mt-6">
          {selectedView === 1 ? (
            <div className="w-full">
              <BranchSingle />
              <BranchSingle />
            </div>
          ) : (
            <div className="w-full mb-20">
              <LazyBranchMap />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
