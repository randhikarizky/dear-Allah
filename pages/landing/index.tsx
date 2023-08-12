import type { NextPage } from "next";

import HeadComponent from "@/app/components/global/components/HeadComponent";
import { default as LandingPageComponent } from "@/app/components/landing";

const LandingPages: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <LandingPageComponent />
    </>
  );
};

export default LandingPages;
