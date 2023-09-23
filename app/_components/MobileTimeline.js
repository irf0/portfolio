"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {
  Checklist,
  Code,
  Construction,
  Lightbulb,
  Mood,
  SentimentDissatisfied,
  Smartphone,
  TravelExplore,
  TrendingUp,
} from "@mui/icons-material";

import { isMobile } from "react-device-detect";

export default function MobileTimeline() {
  return (
    <Timeline className=" -ml-56 place-self-start ">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ background: "#fc6b03" }}>
            <Lightbulb />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Initial Spark ⚡
          </Typography>
          <Typography variant="body1">
            ⁕Decided to become a Software Engineer.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#e0c307" }}>
            <Checklist />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Preparation Begins
          </Typography>
          <Typography>⁕Started preparing for JEE entrance exam.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#f00e0e" }}>
            <SentimentDissatisfied />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Failure!
          </Typography>
          <Typography>⁕Wasted 2 years but couldn't make it.😖</Typography>
          <Typography>
            ⁕Frustrated, Clueless and Hopeless, about to give up on the dream.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#449104" }}>
            <Mood />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Fresh Start🤞
          </Typography>
          <Typography>⁕Never gave up!</Typography>
          <Typography>⁕Got into BBA course.</Typography>
          <Typography>⁕Started learning to code on the side.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#000" }}>
            <Code />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Coding Journey begins 💻
          </Typography>
          <Typography>
            ⁕Learnt HTML, CSS, JS, basic React and Nodejs.
          </Typography>
          <Typography>⁕Built really bad and ugly projects🤭.</Typography>
          <Typography>⁕But really enjoyed this journey!.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#7013eb" }}>
            <TravelExplore />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Deep dive into ocean of tech😎
          </Typography>
          <Typography>⁕Learnt React well,</Typography>
          <Typography>⁕Started exploring other technologies.</Typography>
          <Typography>⁕Built first web app of life 😎.</Typography>
          <Typography>⁕Explored - Nodejs, DB, REST APIs.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#942a07" }}>
            <Construction />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Building the projects. 🛠
          </Typography>
          <Typography>⁕Built Multiple projects thanks to Youtube.</Typography>
          <Typography>⁕Curiosity and Excitement was at top peak.</Typography>
          <Typography>⁕Learnt NextJS, and other tools.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#0e3eeb" }}>
            <Smartphone />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Started Learning Mobile App Dev.
          </Typography>
          <Typography>⁕Learnt React Native well.</Typography>
          <Typography>⁕Now more excited - Built Multiple Projects.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{ background: "#08c983" }}>
            <TrendingUp />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" component="span" fontWeight="bold">
            Journey has just started ↗
          </Typography>
          <Typography>⁕Yet to go a long way.</Typography>
          <Typography>⁕Yet to achieve great milestones.🏁</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
