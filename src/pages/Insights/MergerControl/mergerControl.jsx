import React from 'react'

import mainInsightsMergerControlImage from '../../../assets/Images/Insights/insights-merger-control.jpeg'
import mergerControlAdaptation from '../../../assets/Images/Insights/taxing-catalyst-adaptation.jpeg'
import mergerControlArbitration from '../../../assets/Images/Insights/taxing-catalyst-arbitration.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import MergerControlText from './mergerControlText'

const MergerControl = () => {
    const heroDetails = {
        heroImage: mainInsightsMergerControlImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Reshaping the Landscape Transformative Changes in Egypt's Merger Control Framework"
    };

    const mergerControlImages = [
        {
            img: mergerControlAdaptation,
            title: 'Adaptions',
            textLines: ["Arbitration", "Adaptions in Arbitration", "Rules", "31 January, 2024"]
        },
        {
            img: mergerControlArbitration,
            title: 'Arbitration',
            textLines: ["Arbitration", "Arbitration in Specifc", "Sectors", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={mergerControlImages}>
            <MergerControlText />
        </PersonalRelatedInsights>
    )
}

export default MergerControl