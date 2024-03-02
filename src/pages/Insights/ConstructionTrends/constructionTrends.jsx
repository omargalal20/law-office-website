import React from 'react'

import mainInsightsConstructionTrendsImage from '../../../assets/Images/Insights/main-insights-construction-trends.jpeg'
import constructionTrendsSmartConstruction from '../../../assets/Images/Insights/insights-smart-construction.jpeg'
import constructionTrendsAugmentedReality from '../../../assets/Images/Insights/insights-augmented-reality.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import ConstructionTrendsText from './constructionTrendsText'

const ConstructionTrends = () => {
    const heroDetails = {
        heroImage: mainInsightsConstructionTrendsImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Construction Trends in Egypt Charting the Future of Concrete and Steel Emerging Trends and Untapped Potential in Egypt's Construction Landscape by 2025"
    };

    const constructionTrendsImages = [
        {
            img: constructionTrendsSmartConstruction,
            title: 'Smart Construction',
            textLines: ["Construction", "Smart Construction", "Technologies", "31 January, 2024"]
        },
        {
            img: constructionTrendsAugmentedReality,
            title: 'Augmented Reality',
            textLines: ["Construction", "Augmented Reality in", "Construction", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={constructionTrendsImages}>
            <ConstructionTrendsText />
        </PersonalRelatedInsights>
    )
}

export default ConstructionTrends