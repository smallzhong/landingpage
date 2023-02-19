"use client";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import Link from "next/link";

const calendars = [
  "https://user.fm/freebusy/v1-cb3ad70c3a12cf6de0864b5dccba946d/2023%20%E6%98%A5%E5%AD%A3%E5%AD%A6%E6%9C%9F.ics",
  "https://user.fm/freebusy/v1-5ba6a08c51cd09b17fd005e08ae46e37/%E4%B8%AA%E4%BA%BA.ics"
];

export default function SchedulePage() {
  return (
    <>
      <div className="text-2xl text-gray-700 dark:text-gray-200">Schedule</div>
      <div className={"flex-grow text-gray-600 dark:text-gray-300"}>
        <FullCalendar
          height={"100%"}
          plugins={[timeGridPlugin, iCalendarPlugin]}
          eventSources={calendars.map(url => ({ url, format: "ics" }))}
          initialView="timeGridWeek"
        />
      </div>
      <Link className={"link align-text-bottom mr-auto pt-2"} href={"../"}>
        Go Back
      </Link>
    </>
  );
}
