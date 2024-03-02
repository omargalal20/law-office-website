import React from 'react'

import mainInsightsLegalPerspectiveImage from '../../../assets/Images/Insights/main-insights-legal-perspective.jpeg'
import legalPerspectiveAdaptation from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'
import legalPerspectiveArbitration from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import LegalPerspectiveText from './legalPerspectiveText'

const LegalPerspective = () => {
    const heroDetails = {
        heroImage: mainInsightsLegalPerspectiveImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Arbitration in the Middle East A Legal Perspective"
    };

    const legalPerspectiveImages = [
        {
            img: legalPerspectiveAdaptation,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: legalPerspectiveArbitration,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={legalPerspectiveImages}>
            <LegalPerspectiveText />
        </PersonalRelatedInsights>
    )
}

export default LegalPerspective