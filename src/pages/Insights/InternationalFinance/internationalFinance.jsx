import React from 'react'

import mainInsightsInternationalFinanceImage from '../../../assets/Images/Insights/main-insights-international-finance.jpeg'
import mainInsightsLawLaborImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import mainInsightsFinanceImage from '../../../assets/Images/Insights/insights-finance.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import InternationalFinanceText from './internationalFinanceText'

const InternationalFinance = () => {
    const heroDetails = {
        heroImage: mainInsightsInternationalFinanceImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "International Finance A Catalyst for Prosperity International Finance Corporation Injects USD 7 Billion into Egypt's Economic Engine"
    };

    const internationalFinanceImages = [
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
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={internationalFinanceImages}>
            <InternationalFinanceText />
        </PersonalRelatedInsights>
    )
}

export default InternationalFinance