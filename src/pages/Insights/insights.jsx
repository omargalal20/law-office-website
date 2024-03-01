import React from 'react'

import insightsOfficeAdvantagePrimaryImage from '../../assets/Images/Insights/main-insights-office-advantage-1.png'
import sectionHeaderArrow from '../../assets/Images/Misc/section-header-arrow.svg'
import mainInsightsGenericInsightsImage from '../../assets/Images/Insights/main-insights-generic-insights.png'
import mainInsightsGenericInsightsRenewableImage from '../../assets/Images/Insights/main-insights-renewable.jpeg'
import mainInsightsGenericInsightsOilGasImage from '../../assets/Images/Insights/main-insights-oil-gas.png'
import mainInsightsLaborLawImage from '../../assets/Images/Insights/main-insights-law-labor.jpeg'
import mainInsightsCopImage from '../../assets/Images/Insights/main-insights-cop.png'
import mainInsightsDataPrivacyImage from '../../assets/Images/Insights/main-insights-data-privacy.jpeg'
import mainInsightsMergerControlImage from '../../assets/Images/Insights/main-insights-merger-control.jpeg'
import mainInsightsGreenTransportationImage from '../../assets/Images/Insights/main-insights-green-transportation.jpeg'

import Hero from '../../components/Common/Hero'
import HoverableImage from '../../components/Common/HoverableImage/hoverableImage'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

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

const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "auto auto auto auto auto", // Define 5 rows
};

const gridItem = {
    margin: "8px",
    border: "1px solid red"
};

const itemData = [
    {
        img: mainInsightsGenericInsightsImage,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: mainInsightsGenericInsightsRenewableImage,
        title: 'Burger',
        cols: 2,
    },
    {
        img: mainInsightsGenericInsightsOilGasImage,
        title: 'Coffee',
        cols: 2,
    }
];

const itemData1 = [
    {
        img: mainInsightsLaborLawImage,
        title: 'Employment',
        textLines: ["Employment", "New Labour", "Law", "31 January, 2024"]
    },
    {
        img: mainInsightsCopImage,
        title: 'Renewable',
        textLines: ["Renewable Energy", "COP27 and COP28", "31 January, 2024"]
    },
    {
        img: mainInsightsDataPrivacyImage,
        title: 'Data Privacy',
        textLines: ["Banking & Finance", "Data Privacy", "31 January, 2024"]
    },
    {
        img: mainInsightsMergerControlImage,
        title: 'Merger Control',
        textLines: ["Merger & Acquisition", "Merger Control", "31 January, 2024"]
    },
    {
        img: mainInsightsGreenTransportationImage,
        title: 'Green Transportation',
        textLines: ["Transportation", "Green Transportation", "31 January, 2024"]
    },
];

const Insights = () => {
    return (
        <>
            <Hero
                backgroundImage={insightsOfficeAdvantagePrimaryImage}
                primaryHeading={'Insights'}
                secondaryHeading={'Insights'}
                subHeading={'At Afifi Law Office, we blend deep legal expertise with personalized service. Our team stays ahead of legal trends to offer you innovative, effective solutions for your unique challenges. Choose us for strategic guidance and the confidence that your legal matters are in expert hands'}
            />

            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <div>
                        <p
                            style={{
                                color: "#000000",
                                fontSize: "50px",
                                fontWeight: "400",
                                lineHeight: "1.2",
                            }}
                        >
                            Expert Insight, Personalized Solutions
                        </p>
                        <p
                            style={{
                                color: "#000000",
                                fontSize: "50px",
                                fontWeight: "400",
                                lineHeight: "1.2",
                            }}
                        >
                            The Afifi Law{" "}
                            <span
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "100",
                                    lineHeight: "60.95px",
                                }}
                            >
                                Office Advantage
                            </span>
                        </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                            style={{
                                color: "#000000",
                                fontSize: "50px",
                                fontWeight: "400",
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
                                Generic Insights
                            </span>
                        </p>

                        <img
                            src={sectionHeaderArrow}
                            alt="icon"
                            style={{ marginLeft: "10px" }}
                        />
                    </div>

                    <ImageList
                        cols={4}
                        gap={32}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <HoverableImage key={item.title} src={item.img} width={'100%'} height={250} />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                            style={{
                                color: "#000000",
                                fontSize: "50px",
                                fontWeight: "400",
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
                                Practice Related Insights
                            </span>
                        </p>

                        <img
                            src={sectionHeaderArrow}
                            alt="icon"
                            style={{ marginLeft: "10px" }}
                        />
                    </div>

                    <Box>
                        <ImageList variant="masonry" cols={2} gap={32}>
                            {itemData1.map((item) => (
                                <ImageListItem key={item.img}>
                                    <HoverableImage key={item.title} src={item.img} width={'100%'} text={item.textLines} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                </Container>
            </ThemeProvider>
            <body>

            </body>
        </>
    )
}

export default Insights