import React from 'react'

import mainInsightsGafiImage from '../../../assets/Images/Insights/insights-gafi.jpeg'
import insightsAiImage from '../../../assets/Images/Insights/data-privacy-ai.jpeg'
import insightsConnectivityImage from '../../../assets/Images/Insights/data-privacy-connectivity.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import GafiText from './gafiText'

const Gafi = () => {
    const heroDetails = {
        heroImage: mainInsightsGafiImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "GAFI Streamlines Post-Incorporation Services with Lenient Document Requirements"
    };

    const gafiImages = [
        {
            img: insightsAiImage,
            title: 'AI',
            textLines: ["Technology", "Artifical Intelligence", "Advancements", "31 January, 2024"]
        },
        {
            img: insightsConnectivityImage,
            title: 'Connectivity',
            textLines: ["Technology", "5G and Advanced", "Connectivity", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={gafiImages}>
            <GafiText />
        </PersonalRelatedInsights>
    )
}

export default Gafi