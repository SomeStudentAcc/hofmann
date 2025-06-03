import dynamic from "next/dynamic";

const MainCategorySingle = dynamic(() => import("./MainCategorySingle"), {
  loading: () => <div>Loading...</div>, // optional fallback
  ssr: false, // optional: disables SSR for this component
});
