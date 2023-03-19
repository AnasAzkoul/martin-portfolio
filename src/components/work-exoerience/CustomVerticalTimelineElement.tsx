import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';


type TimelineElementProps = {
  companyName: string
  title: string
  description: string
  date: string
}

const CustomVerticalTimelineElement = ({companyName, title, description, date}: TimelineElementProps) => {

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work text-primary"
      contentStyle={{ background: "#00A2AD"}}
      contentArrowStyle={{ borderRight: "7px solid  #00A2AD" }}
      date={date}
      iconStyle={{
        display: "none",
        // background: "#00A2AD",
        // height: "90px",
        // width: "90px",
        // left: "480px",
        // justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",
        // border: 'black',
        // fontSize: '10px',
        // whiteSpace: 'normal',
        // textTransform: 'uppercase',

      }}
      icon={companyName}
      iconClassName="text-primary hidden"
      dateClassName="text-primary lg:text-primary xl:text-gray-800"
    >
      <h3 className="vertical-timeline-element-title text-base font-semibold capitalize">
        {title}
      </h3>
      <p className='text-sm' style={{fontSize: '13px'}}>
        {description}
      </p>
    </VerticalTimelineElement>
  );
}

export default CustomVerticalTimelineElement
