import React from "react";
import Link from "next/link";

export default function InformalPage() {
  const paragraphs = [
    (<>
      <p>ENFP-T | She/Her | Coq | Rust | SJTUG | Vim | Keyboardist</p>
      <p>Enjoy developing open-source projects, playing digital synthesizers.</p>
    </>),
    (<>
      <p>I love to connect with people. PMs are welcomed.</p>
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
          <Link className="link alt" href={"../"}>
            formal profile
          </Link>.
        </p>
      </div>
    </>
  );
}
