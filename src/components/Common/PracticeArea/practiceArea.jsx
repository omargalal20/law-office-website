import HeroPractice from "../../../components/Common/Hero/heroPractice";
import TripleImageGrid from "../../../components/Common/Section/tripleImageGrid";
import SectionHeaderWithoutArrow from "../Section/sectionHeaderWithoutArrow";
import RelatedImagesSection from "../Section/relatedImagesSection";

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Container from '@mui/material/Container'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 300,
            md: 660,
            lg: 1350,
            xl: 1620,
        },
    },
});

const PracticeArea = ({ key, heroDetails, relatedImages, practiceAreaImages, children, sectionHeaders, teamName }) => {
    const { heroImage, heroPrimaryHeading, heroSecondaryHeading, heroSubHeading } = heroDetails;
    const { firstSectionHeader, secondSectionHeader, thirdSectionHeader } = sectionHeaders;

    return (
        <>
            <HeroPractice
                backgroundImage={heroImage}
                primaryHeading={heroPrimaryHeading}
                secondaryHeading={heroSecondaryHeading}
                subHeading={heroSubHeading}
                color="black"
                subHeadingWidth={454}
            />
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" style={{ marginTop: "10vh", marginBottom: "10vh" }}>

                    <SectionHeaderWithoutArrow key={key + "-First-SectionHeaderWithoutArrow"}
                        sectionInfo={firstSectionHeader}
                    />

                    {children}

                    <SectionHeaderWithoutArrow key={key + "-Second-SectionHeaderWithoutArrow"}
                        sectionInfo={secondSectionHeader}
                    />

                    <RelatedImagesSection insightImages={relatedImages} teamName={teamName} />

                    <SectionHeaderWithoutArrow key={key + "-Third-SectionHeaderWithoutArrow"}
                        sectionInfo={thirdSectionHeader}
                    />

                    <TripleImageGrid key={key + "-Practice-Area-Triple-Image-Grid"} images={practiceAreaImages} />
                </Container>
            </ThemeProvider>
        </>
    )
}

export default PracticeArea