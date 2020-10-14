import React, {useEffect, useState} from "react";
import {A, Paragraph} from "../styles";

export const FormalProfile = ({toggleProfile}) => {
    const [emailAddress, setEmailAddress] = useState("");
    useEffect(() => {
        setEmailAddress(`self@${window.location.hostname}`);
    }, [])
    return (
        <>
            <Paragraph>
                <p>Major in Computer Science.</p>
                <p>PL beginner. Former CRUD & frontend developer and ML/DL alchemist.</p>
            </Paragraph>
            <Paragraph>
                <p>Coding for fun & with ♡.</p>
                <A href="https://github.com/PhotonQuantum" target="_blank" rel="noopener">GitHub</A> | <A
                href="/resume.pdf" target="_blank">Resume</A> | <A href="#">Projects (WIP)</A>
            </Paragraph>
            <Paragraph>
                <p>Learning PL and enhancing SE skills recently.</p>
                <p>
                    Current progress:
                    reading <A href="https://softwarefoundations.cis.upenn.edu/" target="_blank"
                               rel="noopener">SF</A> &
                    contributing to <A href="https://github.com/tikv/tikv" target="_blank"
                                       rel="noopener">TiKV</A>.
                </p>
            </Paragraph>
            <Paragraph>
                <p>I love to connect with people.</p>
                <p>Email: <A href={`mailto:${emailAddress}`}>{emailAddress}</A></p>
                <A href="https://twitter.com/LightQuantumhah" target="_blank"
                   rel="noopener">Twitter</A> | <A
                href="https://t.me/lightquantum" target="_blank" rel="noopener">Telegram</A>
            </Paragraph>
            <Paragraph alternative>
                <p>You may want to read my <A alternative href="#" onClick={(e) => {
                    e.preventDefault();
                    toggleProfile();
                }}>informal profile</A>.
                </p>
            </Paragraph>
        </>
    )
}