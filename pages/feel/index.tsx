import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import HeadComponent from "@/app/global/components/HeadComponent";
import FeelComponent from "@/app/feature/feel/presentation/components/FeelComponent";

const FeelPage: NextPage = () => {
  const router = useRouter();

  const [feeling, setFeeling] = useState("");

  useEffect(() => {
    if (router.query?.name !== "") {
      const feel: any = router.query?.name;

      setFeeling(feel);
    }
  }, [router.query]);

  return (
    <>
      <HeadComponent title={`I feel ${feeling}`} />
      <FeelComponent />
    </>
  );
};

export default FeelPage;
