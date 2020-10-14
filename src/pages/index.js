import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet";
import tw from "twin.macro"

const Root = tw.div`h-screen w-screen flex justify-center items-center dark:bg-gray-900`
const Container = tw.div`container flex flex-col`

const SummaryContainer = tw.div`flex mx-auto p-6 justify-center`
const SummaryContent = tw.div`ml-6 flex flex-col justify-center`
const SummaryTitleWrapper = tw.div`flex items-baseline`
const SummaryTitle = tw.div`text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-tight pb-1`
const SummaryTitleAp = tw.div`text-xs md:text-sm text-gray-500 ml-1 md:ml-2 whitespace-no-wrap`
const SummarySubtitleWrapper = tw.div`flex flex-col md:flex-row`
const SummarySubtitle = tw.div`text-sm md:text-base text-gray-600 dark:text-gray-400 leading-tight md:leading-normal`
const SummarySubtitleAp = tw(SummarySubtitle)`md:ml-1`
const AvatarWrapper = tw.div`flex-shrink-0`
const Avatar = tw.img`h-16 w-16 rounded-full shadow-lg`

const ParagraphWrapper = tw.div`px-6 pb-6 mx-auto pt-2 md:pt-4`
const Paragraph = tw.div`text-sm md:text-base text-gray-700 dark:text-gray-200 mx-auto px-2 pb-4 leading-relaxed`
const ParagraphAlt = tw.div`text-xs md:text-sm text-gray-500 dark:text-gray-300 mx-auto px-2 pt-2 pb-4 leading-relaxed`
const A = tw.a`text-blue-600 dark:text-blue-300 hover:underline`
const AAlt = tw(A)`text-blue-500 dark:text-blue-400`
// const Pre = tw.pre`text-gray-600 inline`

export default function Home() {
    const consoleText = [
        "Warning. Sedative leak detected.",
        "TACHYON containment compromised.",
        "Propulsion system offline.",
        "Entering M class planet GARDEN's orbit."
    ];
    console.log(consoleText.join("\n"));
    const [emailAddress, setEmailAddress] = useState("");
    useEffect(() => {
        setEmailAddress(`self@${window.location.hostname}`);
    }, [])
    return (
        <>
            <Root>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="CS undergraduate @SJTU-19. Coding with ♡."/>
                    <title>LightQuantum</title>
                    <html lang="en"/>
                </Helmet>
                <Container>
                    <SummaryContainer>
                        <AvatarWrapper>
                            <Avatar src="avatar.png"/>
                        </AvatarWrapper>
                        <SummaryContent>
                            <SummaryTitleWrapper>
                                <SummaryTitle>LightQuantum</SummaryTitle>
                                <SummaryTitleAp>E53E D56B 7F20 B7BB</SummaryTitleAp>
                            </SummaryTitleWrapper>
                            <SummarySubtitleWrapper>
                                <SummarySubtitle>CS undergraduate @SJTU-19.</SummarySubtitle>
                                <SummarySubtitleAp>Coding with ♡.</SummarySubtitleAp>
                            </SummarySubtitleWrapper>
                        </SummaryContent>
                    </SummaryContainer>
                    <ParagraphWrapper>
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
                        <ParagraphAlt>
                            <p>You may want to read my <AAlt href="#">informal profile (WIP)</AAlt>.</p>
                            <p>Temporary link to my old blog: <AAlt href="https://legacy.lightquantum.me">Old
                                blog</AAlt>.</p>
                        </ParagraphAlt>
                    </ParagraphWrapper>
                </Container>
            </Root>
        </>
    );
}
