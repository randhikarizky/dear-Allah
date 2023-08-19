import type { NextPage } from "next";

import HeadComponent from "@/app/global/components/HeadComponent";
import FeelComponent from "@/app/feature/feel/presentation/components/FeelComponent";

const FeelPage: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <FeelComponent />
    </>
  );
};

export default FeelPage;
