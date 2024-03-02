import React from 'react'

import mainInsightsHydrogenInitiativesImage from '../../../assets/Images/Insights/main-insights-hydrogen-initiatives.jpeg'
import insightsHydrogenInitiativesImage from '../../../assets/Images/Insights/renewable-energy-waves.jpeg'
import insightsGreenImage from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import HydrogenInitiativesText from './hydrogenInitiativesText'

const HydrogenInitiatives = () => {
    const heroDetails = {
        heroImage: mainInsightsHydrogenInitiativesImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Legislative Committee Approves Proposed Law on Incentives for Green Hydrogen Initiatives"
    };

    const hydrogrenInitiativesImages = [
        {
            img: insightsHydrogenInitiativesImage,
            title: 'Wave and Tidal',
            textLines: ["Renewable Energy", "Wave and Tidal", "Energy", "31 January, 2024"]
        },
        {
            img: insightsGreenImage,
            title: 'Employment',
            textLines: ["Renewable Energy", "Green Hydrogen", "Production", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={hydrogrenInitiativesImages}>
            <HydrogenInitiativesText />
        </PersonalRelatedInsights>
    )
}

export default HydrogenInitiatives