import React from 'react';
import PageSection from '../ui/PageSection';
import SectionTitle from '../ui/SectionTitle';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <PageSection id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="mt-20">
        <VerticalTimeline lineColor="#017482">
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-primary"
            contentStyle={{ background: "#00A2AD" }}
            contentArrowStyle={{ borderRight: "7px solid  #00A2AD" }}
            date="2016 - 2017"
            iconStyle={{
              background: "#00A2AD",
              height: "75px",
              width: "75px",
              left: '490px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            icon="AskBe4"
            iconClassName="text-primary"
            dateClassName="text-primary lg:text-primary xl:text-gray-500 md:ml-3"
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold capitalize">
              Software developer
            </h3>
            <p>
              Development of a floating license system (C++14/Qt 5/SSL).
              Single-handedly implemented a client-server system according to
              client’s specification.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </PageSection>
  );
}

export default WorkExperience
