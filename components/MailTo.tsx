'use client';

import React, { useEffect, useState } from "react";

export const MailTo = ({ template }) => {
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => {
    let hostname = window.location.hostname;
    let domain = hostname.split(".").slice(0, -1).join(".");
    let realname = document.querySelector(".rn").textContent.toLowerCase().replaceAll(" ", "");
    setEmailAddress(template.replaceAll("{hostname}", hostname).replaceAll("{domain}", domain).replaceAll("{realname}", realname));
  }, [template]);
  return (
    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
  );
};