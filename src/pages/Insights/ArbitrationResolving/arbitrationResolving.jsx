import React from 'react'

import mainInsightsArbitrationResolvingImage from '../../../assets/Images/Insights/main-insights-arbitration-resolving.jpeg'
import insightsArbitration from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'
import insightsAdaptation from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import ArbitrationResolvingText from './arbitrationResolvingText'

const ArbitrationResolving = () => {
    const heroDetails = {
        heroImage: mainInsightsArbitrationResolvingImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "The Rise of Arbitration Resolving International Finance Disputes with Speed and Expertise"
    };

    const arbitrationResolvingImages = [
        {
            img: insightsAdaptation,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: insightsArbitration,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={arbitrationResolvingImages}>
            <ArbitrationResolvingText />
        </PersonalRelatedInsights>
    )
}

export default ArbitrationResolving