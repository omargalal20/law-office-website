import React from 'react'

import Hero from '../Hero'
import SectionHeader from '../Section/sectionHeader'
import RelatedImagesSection from '../Section/relatedImagesSection'

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

const Insight = ({ key, heroDetails, headerText, insightImages, teamName, children }) => {
    const { heroImage, heroPrimaryHeading, heroSecondaryHeading } = heroDetails;

    return (
        <>
            <Hero
                backgroundImage={heroImage}
                primaryHeading={heroPrimaryHeading}
                secondaryHeading={heroSecondaryHeading}
            >
                {headerText}
            </Hero>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
                    {children}

                    <SectionHeader title={"Related Insights"} />

                    <RelatedImagesSection key={key} insightImages={insightImages} teamName={teamName} />
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Insight