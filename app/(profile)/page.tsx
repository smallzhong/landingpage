import React from "react";
import { MailTo } from "../MailTo";
import Link from "next/link";

export default function FormalPage() {
  const paragraphs = [
    (
      <p>A senior undergraduate student major in Computer Science.</p>
    ),
    (<>
      <p>PL researcher with some software engineering experience.</p>
      <p>Interning with&nbsp;
        <a className="link" href="https://fredfeng.github.io/">
          Yu Feng
        </a> at <a className="link" href="https://www.cs.ucsb.edu/">
          CS@UCSB
        </a>
      </p>
      <p>Previously worked with&nbsp;
        <a className="link" href="https://jhc.sjtu.edu.cn/people/members/faculty/qinxiang-cao.html">
          Qinxiang Cao
        </a> at <a className="link" href="https://jhc.sjtu.edu.cn">
          JHC@SJTU
        </a>, will continue to work with him after the internship ends.
      </p>
    </>),
    (<p>
      Research interests: programming language, formal verification, program analysis
    </p>),
    (<>
      <p>Coding for fun & with ♡.</p>
      <a className="link" href="https://github.com/PhotonQuantum" target="_blank" rel="noopener">
        GitHub
      </a> |&nbsp;
      <a className="link" href={"resume.pdf"} target="_blank">
        Resume
      </a> |&nbsp;
      <Link className="link" href="schedule">Schedule</Link>
    </>),
    (<>
      <p>Applying for PhD programs.</p>
      <p>Email: <MailTo /></p>
      <a className="link" href="https://twitter.com/LightQuantumhah" target="_blank" rel="noopener">
        Twitter
      </a> |&nbsp;
      <a className="link" href="https://t.me/lightquantum_pm_bot" target="_blank" rel="noopener">
        Telegram
      </a>
    </>)
  ];
  return (
    <>
      {paragraphs.map((frag, i) =>
        <div
          className="mx-auto px-2 pb-4 leading-relaxed text-sm md:text-base text-gray-700 dark:text-gray-200"
          key={i}
        >
          {frag}
        </div>
      )}
      <div className="mx-auto px-2 pb-4 leading-relaxed text-xs md:text-sm text-gray-600 dark:text-gray-300 pt-2">
        <p>
          You may wish to check out my&nbsp;
          <Link className="link alt" href={"informal"}>
            informal profile
          </Link>.
        </p>
      </div>
    </>
  );
}
