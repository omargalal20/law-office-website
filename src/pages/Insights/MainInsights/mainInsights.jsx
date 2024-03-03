import React, { useState } from 'react'

import insightsOfficeAdvantagePrimaryImage from '../../../assets/Images/Insights/main-insights-office-advantage-1.png'
import sectionHeaderArrow from '../../../assets/Images/Misc/section-header-arrow.svg'
import mainInsightsGenericInsightsImage from '../../../assets/Images/Insights/main-insights-generic-insights.png'
import mainInsightsGenericInsightsRenewableImage from '../../../assets/Images/Insights/main-insights-renewable.jpeg'
import mainInsightsGenericInsightsOilGasImage from '../../../assets/Images/Insights/main-insights-oil-gas.png'
import mainInsightsLaborLawImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import mainInsightsCopImage from '../../../assets/Images/Insights/main-insights-cop.png'
import mainInsightsDataPrivacyImage from '../../../assets/Images/Insights/main-insights-data-privacy.jpeg'
import mainInsightsMergerControlImage from '../../../assets/Images/Insights/main-insights-merger-control.jpeg'
import mainInsightsGreenTransportationImage from '../../../assets/Images/Insights/main-insights-green-transportation.jpeg'
import mainInsightsTaxation from '../../../assets/Images/Insights/main-insights-taxing-catalyst.jpeg'
import mainInsightsRenewable from '../../../assets/Images/Insights/main-insights-renewable-windmill.jpeg'
import mainInsightsTransportation from '../../../assets/Images/Insights/main-insights-transportation-logistics.jpeg'
import mainInsightsConstructionTrends from '../../../assets/Images/Insights/main-insights-construction-trends.jpeg'
import mainInsightsArbitration from '../../../assets/Images/Insights/main-insights-arbitration-resolving.jpeg'
import mainInsightsCapitalFund from '../../../assets/Images/Insights/main-insights-capital-retention.jpeg'
import mainInsightsGafi from '../../../assets/Images/Insights/insights-gafi.jpeg'
import mainInsightsInternationalFinance from '../../../assets/Images/Insights/insights-finance.jpeg'
import mainInsightsEnergyGlobalDemand from '../../../assets/Images/Insights/insights-energy-global-demand.jpeg'
import mainInsightsAviation from '../../../assets/Images/Insights/insights-circular-energy.jpeg'
import mainInsightsHydrogen from '../../../assets/Images/Insights/main-insights-hydrogen-initiatives.jpeg'
import mainInsightsArbitrationRules from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'
import mainInsightsGreenEnergy from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import Hero from '../../../components/Common/Hero'
import HoverableImage from '../../../components/Common/HoverableImage/hoverableImage'
import ViewMoreInsights from '../../../components/Common/ViewMoreInsights/viewMoreInsights'

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

const MainInsights = () => {
    const [viewMoreInsights, setViewMoreInsights] = useState(false);

    const toggleView = () => {
        setViewMoreInsights(!viewMoreInsights);
    };

    const genericInsightsImages = [
        {
            img: mainInsightsGenericInsightsImage,
            height: '678px',
            rows: 2,
            cols: 2,
            title: 'Employment',
            textLines: ["Employment", "New Labour", "Law", "31 January, 2024"]
        },
        {
            img: mainInsightsGenericInsightsRenewableImage,
            height: '321px',
            title: 'Renewable',
            textLines: ["Renewable Energy", "COP27 and COP28", "31 January, 2024"],
            cols: 2,
        },
        {
            img: mainInsightsGenericInsightsOilGasImage,
            height: '321px',
            title: 'Renewable',
            textLines: ["Renewable Energy", "COP27 and COP28", "31 January, 2024"],
            cols: 2,
        }
    ];

    const practiceRelatedInsightsImages = [
        {
            img: mainInsightsLaborLawImage,
            title: 'Employment',
            textLines: ["Employment", "New Labour", "Law", "31 January, 2024"],
            height: '518px',
            component: <HoverableImage key={'Employment'} src={mainInsightsLaborLawImage} width={'100%'} height={'518px'} text={["Employment", "New Labour", "Law", "31 January, 2024"]} />
        },
        {
            img: mainInsightsDataPrivacyImage,
            title: 'Data Privacy',
            textLines: ["Banking & Finance", "Data Privacy", "31 January, 2024"],
            height: '321px',
            component: <HoverableImage key={'Data Privacy'} src={mainInsightsDataPrivacyImage} width={'100%'} height={'321px'} text={["Banking & Finance", "Data Privacy", "31 January, 2024"]} />
        },
        {
            img: mainInsightsMergerControlImage,
            title: 'Merger Control',
            textLines: ["Merger & Acquisition", "Merger Control", "31 January, 2024"],
            height: '321px',
            component: <HoverableImage key={'Merger Control'} src={mainInsightsMergerControlImage} width={'100%'} height={'321px'} text={["Merger & Acquisition", "Merger Control", "31 January, 2024"]} />
        }, {
            img: mainInsightsMergerControlImage,
            title: 'Merger Control',
            textLines: ["Merger & Acquisition", "Merger Control", "31 January, 2024"],
            height: '181px',
            component: <ViewMoreInsights toggleView={toggleView} />
        },
        {
            img: mainInsightsCopImage,
            title: 'Renewable',
            textLines: ["Renewable Energy", "COP27 and COP28", "31 January, 2024"],
            height: '692px',
            component: <HoverableImage key={'Renewable'} src={mainInsightsCopImage} width={'100%'} height={'692px'} text={["Renewable Energy", "COP27 and COP28", "31 January, 2024"]} />
        },
        {
            img: mainInsightsGreenTransportationImage,
            title: 'Green Transportation',
            textLines: ["Transportation", "Green Transportation", "31 January, 2024"],
            height: '712px',
            component: <HoverableImage key={'Green Transportation'} src={mainInsightsGreenTransportationImage} width={'100%'} height={'712px'} text={["Transportation", "Green Transportation", "31 January, 2024"]} />
        },
    ];

    const exploreMoreInsightsImages = [
        {
            img: mainInsightsTaxation,
            title: 'Employment',
            textLines: ["Employment", "New Labour", "Law", "31 January, 2024"]
        },
        {
            img: mainInsightsRenewable,
            title: 'Renewable',
            textLines: ["Renewable Energy", "Renewable Energy Target", "31 January, 2024"]
        },
        {
            img: mainInsightsTransportation,
            title: 'Transportation',
            textLines: ["Transportation", "Transportation & Logistics Hub", "31 January, 2024"]
        },
        {
            img: mainInsightsConstructionTrends,
            title: 'Construction',
            textLines: ['Construction', "Construction Trends in Egypt", "31 January, 2024"]
        },
        {
            img: mainInsightsArbitration,
            title: 'Green Transportation',
            textLines: ["Transportation", "Green Transportation", "31 January, 2024"]
        },
        {
            img: mainInsightsEnergyGlobalDemand,
            title: 'Renewable',
            textLines: ["Renewable Energy", "COP27 and COP28", "31 January, 2024"]
        },
        {
            img: mainInsightsGafi,
            title: 'Data Privacy',
            textLines: ["Banking & Finance", "Data Privacy", "31 January, 2024"]
        },
        {
            img: mainInsightsInternationalFinance,
            title: 'Merger Control',
            textLines: ["Merger & Acquisition", "Merger Control", "31 January, 2024"]
        },
        {
            img: mainInsightsAviation,
            title: 'Green Transportation',
            textLines: ["Transportation", "Green Transportation", "31 January, 2024"]
        },
        {
            img: mainInsightsHydrogen,
            title: 'Green Transportation',
            textLines: ["Transportation", "Green Transportation", "31 January, 2024"]
        },
        {
            img: mainInsightsArbitrationRules,
            title: 'Green Transportation',
            textLines: ["Transportation", "Green Transportation", "31 January, 2024"]
        },
    ];

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
                    <div style={{ marginBottom: "20px" }}>
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

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        <p
                            style={{
                                color: "#000000",
                                fontFamily: "Montserrat",
                                fontSize: "50px",
                                fontStyle: "italic",
                                fontWeight: "100",
                                lineHeight: "61px",
                                letterSpacing: "0em",
                                textAlign: "left"
                            }}
                        >

                            Generic Insights
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
                        sx={{ marginBottom: "20px" }}
                    >
                        {genericInsightsImages.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <HoverableImage key={item.title} src={item.img} width={'100%'} height={item.height} text={item.textLines} />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        <p
                            style={{
                                color: "#000000",
                                fontFamily: "Montserrat",
                                fontSize: "50px",
                                fontStyle: "italic",
                                fontWeight: "100",
                                lineHeight: "61px",
                                letterSpacing: "0em",
                                textAlign: "left"
                            }}
                        >

                            Practice Related Insights
                        </p>

                        <img
                            src={sectionHeaderArrow}
                            alt="icon"
                            style={{ marginLeft: "10px" }}
                        />
                    </div>

                    <Box>
                        <ImageList variant="masonry" cols={2} gap={32}>
                            {practiceRelatedInsightsImages.map((item) => (
                                <ImageListItem key={item.img}>
                                    {item.component}
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                    {
                        viewMoreInsights && (
                            <Box>
                                <ImageList variant="masonry" cols={2} gap={32}>
                                    {exploreMoreInsightsImages.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <HoverableImage key={item.title} src={item.img} width={'100%'} text={item.textLines} />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>
                        )
                    }


                </Container>
            </ThemeProvider>
        </>
    )
}

export default MainInsights