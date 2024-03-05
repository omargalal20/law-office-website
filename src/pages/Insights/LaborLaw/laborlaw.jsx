import React from 'react'

import mainInsightsLaborLawImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import laborLawInsightsHybrid from '../../../assets/Images/Insights/labor-law-insights-hybrid.jpeg'
import laborLawInsightsBenefits from '../../../assets/Images/Insights/labor-law-insights-1.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import LaborLawText from './laborLawText'

const LaborLaw = () => {
    const heroDetails = {
        heroImage: mainInsightsLaborLawImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "New A Balancing Act: Egypt's New Labor Law Navigates a Complex Landscape"
    };

    const laborLawImages = [
        {
            img: laborLawInsightsHybrid,
            title: 'Hybrid Work',
            textLines: ["Employment", "Hybrid Work", "Models", "31 January, 2024"]
        },
        {
            img: laborLawInsightsBenefits,
            title: 'Employment',
            textLines: ["Employment", "Flexible Benefits", "Packages", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={laborLawImages}>
            <LaborLawText />
        </PersonalRelatedInsights>
    )
}

export default LaborLaw;