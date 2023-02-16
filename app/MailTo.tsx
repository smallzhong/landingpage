'use client';

import React, { useEffect, useState } from "react";

export const MailTo = () => {
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => {
    setEmailAddress(`self@${window.location.hostname}`);
  }, []);
  return (
    <a className="link" href={`mailto:${emailAddress}`}>{emailAddress}</a>
  );
};