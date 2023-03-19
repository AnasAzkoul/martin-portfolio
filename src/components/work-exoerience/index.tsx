import React from "react";
import PageSection from "../ui/PageSection";
import SectionTitle from "../ui/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomVerticalTimelineElement from "./CustomVerticalTimelineElement";
import { workExperienceData } from "@/utils/constants";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <PageSection id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="mt-20">
        <VerticalTimeline lineColor="#017482">
          {workExperienceData.map((exp) => {
            return (
              <CustomVerticalTimelineElement
                title={exp.title}
                description={exp.description}
                companyName={exp.companyName}
                date={exp.date}
                location={exp.location}
                key={exp.id}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </PageSection>
  );
};

export default WorkExperience;
