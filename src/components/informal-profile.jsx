import React from "react";
import { A, Paragraph } from "../styles";

export const InformalProfile = ({ toggleProfile }) => {
  return (
    <>
      <Paragraph>
        <p>ENFP-T | She/Her | Coq | Rust | SJTUG | Vim | Keyboardist</p>
        <p>Cognitive functions: Se Ne Ti Fe</p>
      </Paragraph>
      <Paragraph>
        <p>I'm willing to share my thoughts and feelings.</p>
        <A href="https://blog.lightquantum.me">Blog (zh-Hans)</A>
      </Paragraph>
      <Paragraph>
        <p>I love to connect with people. PMs are welcomed.</p>
        <A href="https://twitter.com/LightQuantumhah" target="_blank"
           rel="noopener">Twitter</A> | <A
        href="https://t.me/lightquantum" target="_blank" rel="noopener">Telegram</A>
      </Paragraph>
      <Paragraph alternative>
        <p>You may wish to check out my <A alternative href="#" onClick={(e) => {
          e.preventDefault();
          toggleProfile();
        }}>formal profile</A>.
        </p>
      </Paragraph>
    </>
  );
};
