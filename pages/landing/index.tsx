import type { NextPage } from "next";

import { default as LandingPageComponent } from "@/app/components/landing";
import HeadComponent from "@/app/global/components/HeadComponent";

const LandingPages: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <LandingPageComponent />
    </>
  );
};

export default LandingPages;
