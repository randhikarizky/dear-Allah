import type { NextPage } from "next";

import HeadComponent from "@/app/components/global/HeadComponent";
import { Button } from "@mui/material";

const LandingPages: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <h2>Dear Allah</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        blanditiis rerum distinctio unde aperiam ullam, eius dolor nisi possimus
        saepe aliquam quod ab exercitationem veritatis alias nemo odit
        doloremque veniam!
      </p>
    </>
  );
};

export default LandingPages;
