import React from 'react'

import mainInsightsLaborLawImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import sectionHeaderArrow from '../../../assets/Images/Misc/section-header-arrow.svg'
import laborLawInsightsHybrid from '../../../assets/Images/Insights/labor-law-insights-hybrid.jpeg'
import laborLawInsightsBenefits from '../../../assets/Images/Insights/labor-law-insights-1.jpeg'

import Hero from '../../../components/Common/Hero'
import LaborLawUpdate from './laborlawupdate'
import HoverableImage from '../../../components/Common/HoverableImage/hoverableImage'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from "@mui/material/Box"

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

const laborLawImages = [
    {
        img: laborLawInsightsHybrid,
        title: 'Hybrid Work',
        textLines: ["Employment", "Hybrid Work", "Models", "31 January, 2024"]
    },
    {
        img: laborLawInsightsBenefits,
        title: 'Employment',
        textLines: ["Employment", "Flexible Benefits", "Packages", "31 January, 2024"]
    },
]

const LaborLaw = () => {
    return (
        <>
            <Hero
                backgroundImage={mainInsightsLaborLawImage}
                primaryHeading={'Insights'}
                secondaryHeading={'Insights'}
                subHeading={"New A Balancing Act: Egypt's New Labor Law Navigates a Complex Landscape"}
            />
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
                    <LaborLawUpdate />

                    <div style={{ display: "flex", alignItems: "center", marginTop: "10vh", marginBottom: "10vh" }}>
                        <p
                            style={{
                                color: "#000000",
                                fontSize: "50px",
                                fontWeight: "100",
                                lineHeight: "1.2",
                            }}
                        >
                            <span
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "100",
                                    lineHeight: "60.95px",
                                }}
                            >
                                Related Insights
                            </span>
                        </p>

                        <img
                            src={sectionHeaderArrow}
                            alt="icon"
                            style={{ marginLeft: "10px" }}
                        />
                    </div>

                    <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
                        {/* Labor law images */}
                        {laborLawImages.map((item) => (
                            <HoverableImage
                                key={item.title}
                                src={item.img}
                                width="100%"
                                height="100%"
                                text={item.textLines}
                                buttonEnabled={false}
                            />
                        ))}

                        {/* Box with two divs */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "50",
                                width: "30%",
                            }}
                        >
                            <div
                                style={{
                                    height: "70%",
                                    backgroundImage: "linear-gradient(0deg, #09283F, #09283F)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                }}
                            >
                                {
                                    ['Our', 'Employment', 'Team'].map((line, index) => (
                                        <div key={index}
                                            style={{
                                                color: "white",
                                                fontSize: "24px",
                                                fontWeight: "400",
                                                fontFamily: "Montserrat",
                                            }}>
                                            {line}
                                        </div>
                                    ))
                                }
                            </div>
                            <div
                                style={{
                                    height: "30%",
                                    backgroundImage: "linear-gradient(0deg, #702082, #702082)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                }}
                            >
                                {
                                    ['Find', 'Out', 'More'].map((line, index) => (
                                        <div key={index}
                                            style={{
                                                color: "white",
                                                fontSize: "24px",
                                                fontWeight: "100",
                                                fontFamily: "Montserrat",
                                            }}>
                                            {line}
                                        </div>
                                    ))
                                }
                            </div>
                        </Box>
                    </Stack>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default LaborLaw;