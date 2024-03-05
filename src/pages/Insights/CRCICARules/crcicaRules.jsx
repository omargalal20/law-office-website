import React from 'react'

import mainInsightsCrcicaRulesImage from '../../../assets/Images/Insights/main-insights-crcica-rules.jpeg'
import crciraRulesAdaptation from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'
import crciraRulesArbitration from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import CrcicaRulesText from './crcicaRulesText'

const CrcicaRules = () => {
    const heroDetails = {
        heroImage: mainInsightsCrcicaRulesImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "A New Dawn for International Arbitration Unveiling the CRCICA Rules 2024"
    };

    const crciraRulesImages = [
        {
            img: crciraRulesAdaptation,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: crciraRulesArbitration,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={crciraRulesImages}>
            <CrcicaRulesText />
        </PersonalRelatedInsights>
    )
}

export default CrcicaRules