import React from 'react'

import mainInsightsSustainableMobilityImage from '../../../assets/Images/Insights/main-insights-green-transportation.jpeg'
import sustainableMobilityMaritime from '../../../assets/Images/Insights/sustainable-mobility-maritime.jpeg'
import sustainableMobilityInfrastructure from '../../../assets/Images/Insights/sustainable-mobility-infrastructure.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import SustainableMobilityText from './sustainableMobilityText'

const SustainableMobility = () => {
    const heroDetails = {
        heroImage: mainInsightsSustainableMobilityImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Green Transportation Navigating the Transition to Sustainable Mobility"
    };

    const sustainableMobilityImages = [
        {
            img: sustainableMobilityMaritime,
            title: 'Maritime',
            textLines: ["Transportation", "Maritime Transportation", "Advances", "31 January, 2024"]
        },
        {
            img: sustainableMobilityInfrastructure,
            title: 'Infrastructure',
            textLines: ["Transportation", "Transportation", "Infrastructure Renewal", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={sustainableMobilityImages}>
            <SustainableMobilityText />
        </PersonalRelatedInsights>
    )
}

export default SustainableMobility