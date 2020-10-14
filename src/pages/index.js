import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet";
import {
    Avatar,
    AvatarWrapper,
    Container, ParagraphWrapper,
    Root,
    SummaryContainer,
    SummaryContent, SummarySubtitle, SummarySubtitleAp, SummarySubtitleWrapper,
    SummaryTitle, SummaryTitleAp,
    SummaryTitleWrapper
} from "../styles";
import {FormalProfile} from "../components/formal-profile";
import {InformalProfile} from "../components/informal-profile";

export default function Home() {
    const consoleText = [
        "Warning. Sedative leak detected.",
        "TACHYON containment compromised.",
        "Propulsion system offline.",
        "Entering M class planet GARDEN's orbit."
    ];
    useEffect(() => console.log(consoleText.join("\n")), []);
    const [formal, setFormal] = useState(true);
    const toggleProfile = () => setFormal(!formal);
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
                        {formal ?
                            <FormalProfile toggleProfile={toggleProfile}/> :
                            <InformalProfile toggleProfile={toggleProfile}/>
                        }
                    </ParagraphWrapper>
                </Container>
            </Root>
        </>
    );
}
