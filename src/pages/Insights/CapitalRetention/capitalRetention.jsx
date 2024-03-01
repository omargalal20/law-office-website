import React from 'react'

import mainInsightsCapitalRetentionImage from '../../../assets/Images/Insights/main-insights-capital-retention.jpeg'
import mainInsightsLawLaborImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import mainInsightsFinanceImage from '../../../assets/Images/Insights/insights-finance.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import CapitalRetentionText from './capitalRetentionText'

const CapitalRetention = () => {
    const heroDetails = {
        heroImage: mainInsightsCapitalRetentionImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Taxation and Investment Law A Taxing Catalyst"
    };

    const taxingCatalystImages = [
        {
            img: mainInsightsLawLaborImage,
            title: 'Banking & Finance',
            textLines: ["Banking & Finance", "Digital", "Banking Transformation", "31 January, 2024"]
        },
        {
            img: mainInsightsFinanceImage,
            title: 'Green Finance',
            textLines: ["Banking & Finance", "Sustainable", "and Green Finance", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={taxingCatalystImages}>
            <CapitalRetentionText />
        </PersonalRelatedInsights>
    )
}

export default CapitalRetention