import React from 'react'

import mainInsightsEnergyGlobalDemandImage from '../../../assets/Images/Insights/insights-energy-global-demand.jpeg'
import insightsElectrificationImage from '../../../assets/Images/Insights/insights-electrification.jpeg'
import insightsCircularEnergyImage from '../../../assets/Images/Insights/insights-circular-energy.jpeg'

import PersonalRelatedInsights from '../personalRelatedInsights'
import EnergyGlobalDemandText from './energyGlobalDemandText'

const EnergyGlobalDemand = () => {
    const heroDetails = {
        heroImage: mainInsightsEnergyGlobalDemandImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Energy Global Demand Navigating the Energy Sea Egypt's Strategic Optimization for a Dynamic Global Market"
    };

    const EnergyGlobalDemandImages = [
        {
            img: insightsCircularEnergyImage,
            title: 'Electrification',
            textLines: ["Energy", "Electrification of", "Everything", "31 January, 2024"]
        },
        {
            img: insightsElectrificationImage,
            title: 'Circular Energy',
            textLines: ["Energy", "Circular Economy", "Energy", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={EnergyGlobalDemandImages}>
            <EnergyGlobalDemandText />
        </PersonalRelatedInsights>
    )
}

export default EnergyGlobalDemand