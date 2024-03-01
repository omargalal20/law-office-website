import React from 'react'

import mainInsightsSustainableFuelsImage from '../../../assets/Images/Insights/main-insights-sustainable-fuels.jpeg'
import insightsAdaptationImage from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'
import insightsArbitrationImage from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import SustainableFuelsText from './sustainableFuelsText'

const SustainableFuels = () => {
    const heroDetails = {
        heroImage: mainInsightsSustainableFuelsImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Energy Global Demand Navigating the Energy Sea Egypt's Strategic Optimization for a Dynamic Global Market"
    };

    const SustainableFuelsImages = [
        {
            img: insightsAdaptationImage,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: insightsArbitrationImage,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={SustainableFuelsImages}>
            <SustainableFuelsText />
        </PersonalRelatedInsights>
    )
}

export default SustainableFuels