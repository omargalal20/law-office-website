import React from 'react'

import mainInsightsTransportationLogisticsImage from '../../../assets/Images/Insights/main-insights-international-finance.jpeg'
import insightsMaritime from '../../../assets/Images/Insights/sustainable-mobility-maritime.jpeg'
import insightsInfrastructure from '../../../assets/Images/Insights/sustainable-mobility-infrastructure.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import TransportationLogisticsText from './transportationLogisticsText'

const TransportationLogistics = () => {
    const heroDetails = {
        heroImage: mainInsightsTransportationLogisticsImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Transportation & Logistics Hub Ascending the Logistics Ladder Egypt's Strategic Transformation into a Global Transport and Logistics Hub by 2024"
    };

    const transportationLogisticsImages = [
        {
            img: insightsMaritime,
            title: 'Maritime',
            textLines: ["Transportation", "Maritime Transportation", "Advances", "31 January, 2024"]
        },
        {
            img: insightsInfrastructure,
            title: 'Infrastructure',
            textLines: ["Transportation", "Transportation", "Infrastructure Renewal", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={transportationLogisticsImages}>
            <TransportationLogisticsText />
        </PersonalRelatedInsights>
    )
}

export default TransportationLogistics