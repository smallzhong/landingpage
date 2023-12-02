"use client";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRouter } from "next/navigation";

const calendars = [
  "https://user.fm/freebusy/v1-cb3ad70c3a12cf6de0864b5dccba946d/2023%20%E6%98%A5%E5%AD%A3%E5%AD%A6%E6%9C%9F.ics",
  "https://user.fm/freebusy/v1-5ba6a08c51cd09b17fd005e08ae46e37/%E4%B8%AA%E4%BA%BA.ics"
];

export default function SchedulePage() {
  const router = useRouter();
  return (
    <>
      <div className="text-2xl text-ctp-text">Schedule</div>
      <div className={"flex-grow text-ctp-text"}>
        <FullCalendar
          height={"100%"}
          plugins={[timeGridPlugin, iCalendarPlugin]}
          eventSources={calendars.map(url => ({ url, format: "ics" }))}
          initialView="timeGridWeek"
        />
      </div>
      <div className={"text-sm text-ctp-subtext0 pt-2"}>
        If there's no event shown, please wait for a few seconds.
      </div>
      <a className={"link cursor-pointer align-text-bottom mr-auto pt-2"} onClick={router.back}>
        Go Back
      </a>
    </>
  );
}
