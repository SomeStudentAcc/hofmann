import dynamic from "next/dynamic";

export const LazyBranchMap = dynamic(() => import("./BranchesMap"), {
  ssr: false,
});
