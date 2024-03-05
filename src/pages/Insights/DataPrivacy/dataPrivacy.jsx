import React from 'react'

import mainInsightsDataPrivacyImage from '../../../assets/Images/Insights/main-insights-data-privacy.jpeg'
import dataPrivacyInsightAi from '../../../assets/Images/Insights/data-privacy-ai.jpeg'
import dataPrivacyInsightConnectivity from '../../../assets/Images/Insights/data-privacy-connectivity.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import DataPrivacyText from './dataPrivacyText'

const DataPrivacy = () => {
    const heroDetails = {
        heroImage: mainInsightsDataPrivacyImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Navigating the Path to Renewables Egypt and the UAE's Energy Transition Roadmap at COP27 and COP28."
    };

    const dataPrivacyImages = [
        {
            img: dataPrivacyInsightAi,
            title: 'AI',
            textLines: ["Technology", "Artifical Intelligence", "Advancements", "31 January, 2024"]
        },
        {
            img: dataPrivacyInsightConnectivity,
            title: 'Connectivity',
            textLines: ["Technology", "5G and Advanced", "Connectivity", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={dataPrivacyImages}>
            <DataPrivacyText />
        </PersonalRelatedInsights>
    )
}

export default DataPrivacy