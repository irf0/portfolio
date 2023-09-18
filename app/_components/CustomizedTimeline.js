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
  Build,
  Checklist,
  Code,
  CodeOff,
  Construction,
  DirectionsWalk,
  EmojiNature,
  Leaderboard,
  Lightbulb,
  Mood,
  SentimentDissatisfied,
  Smartphone,
  Star,
  TravelExplore,
  TrendingUp,
  Warning,
  WbSunny,
} from "@mui/icons-material";
import { Grow } from "@mui/material";
import { BiInfinite } from "react-icons/bi";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
        >
          May, 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ background: "#fc6b03" }}>
            <Lightbulb />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Initial Spark ⚡
          </Typography>
          <Typography>Decided to become a Software Engineer. </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          June, 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#e0c307" }}>
            <Checklist />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Preparation Begins
          </Typography>
          <Typography>Started preparing for JEE entrance exam.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          August, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#f00e0e" }}>
            <SentimentDissatisfied />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Failure
          </Typography>
          <Typography>Wasted 2 years but couldn't make it.😖</Typography>
          <Typography>
            Frustrated, Clueless and Hopeless, about to give up on the dream.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          September, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#449104" }}>
            <Mood />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Fresh Start🤞
          </Typography>
          <Typography>
            But hey, there's always light at the end of the tunnel!
          </Typography>
          <Typography>
            My parents were supportive so got admission into BBA in a reputed
            uni.
          </Typography>
          <Typography>
            Started learning to code on the side because I'm really passionate
            about it.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          November, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#000" }}>
            <Code />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Coding Journey begins 💻
          </Typography>
          <Typography>
            Started with web developemt by Angela Yu's Udemy course
          </Typography>
          <Typography>
            Learnt basic to intermediate level of HTML, CSS, JS, basic React and
            Node.
          </Typography>
          <Typography>
            Built really bad and ugly projects🤭. But really loved this journey.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          January, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#7013eb" }}>
            <TrendingUp />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Deep dive into the ocean of tech😎
          </Typography>
          <Typography>
            Learnt React well, started exploring other technologies.
          </Typography>
          <Typography>
            Built first web app - was on top of the sky 😍.
          </Typography>
          <Typography>Started learning NodeJS, ExpressJS and DBs</Typography>
          <Typography>
            I could call myself a Full Stack Developer now. Dream come true
            moment🙌
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          March, 2022 - October, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#942a07" }}>
            <Construction />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Building the projects. 🛠
          </Typography>
          <Typography>Built Multiple projects thanks to Youtube.</Typography>
          <Typography>Curiosity and Excitement was at top floor.</Typography>
          <Typography>Learnt NextJS, and other tools</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          December, 2022 - July, 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#0e3eeb" }}>
            <Smartphone />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Started Learning Mobile App Dev.
          </Typography>
          <Typography>Learnt React Native well.</Typography>
          <Typography> Now more excited - Built Multiple Projects.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          August, 2023 - Infinity
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" style={{ background: "#08c983" }}>
            <TravelExplore />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Journey has just started ↗
          </Typography>
          <Typography>Yet to go a long way.</Typography>
          <Typography>Yet achieve great milestones.🏁</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
