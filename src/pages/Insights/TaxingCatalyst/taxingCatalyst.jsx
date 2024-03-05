import React from 'react'

import mainInsightsTaxingCatalystImage from '../../../assets/Images/Insights/main-insights-taxing-catalyst.jpeg'
import taxingCatalystAdaptation from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'
import taxingCatalystArbitration from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import TaxingCatalystText from './taxingCatalystText'

const TaxingCatalyst = () => {
    const heroDetails = {
        heroImage: mainInsightsTaxingCatalystImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Taxation and Investment Law A Taxing Catalyst"
    };

    const taxingCatalystImages = [
        {
            img: taxingCatalystAdaptation,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: taxingCatalystArbitration,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={taxingCatalystImages}>
            <TaxingCatalystText />
        </PersonalRelatedInsights>
    )
}

export default TaxingCatalyst