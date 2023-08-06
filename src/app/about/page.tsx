import React from "react";
import PageWrapper from "@/components/PageWrapper";
import Eboard from "@/components/Eboard";
import AboutBlock from "@/components/AboutBlock";
import MissionBlock from "@/components/MissionBlock";
import HistoryBlock from "@/components/HistoryBlock";

export default function About() {
  return (
    <PageWrapper active={"About"}>
      <AboutBlock />
      <MissionBlock />
      <HistoryBlock />
      <Eboard />
    </PageWrapper>
  );
}
