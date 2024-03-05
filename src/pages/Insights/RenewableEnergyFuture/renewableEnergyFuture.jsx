import React from 'react'

import mainInsightsRenewableEnergyFutureImage from '../../../assets/Images/Insights/main-insights-renewable-energy-future.jpeg'
import renewableEnergyFutureWaves from '../../../assets/Images/Insights/renewable-energy-waves.jpeg'
import renewableEnergyFutureGreen from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import RenewableEnergyFutureText from './renewableEnergyFutureText'

const RenewableEnergyFuture = () => {
    const heroDetails = {
        heroImage: mainInsightsRenewableEnergyFutureImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "A New Dawn for International Arbitration Unveiling the CRCICA Rules 2024"
    };

    const renewableEnergyFutureImages = [
        {
            img: renewableEnergyFutureWaves,
            title: 'Wave and Tidal',
            textLines: ["Renewable Energy", "Wave and Tidal", "Energy", "31 January, 2024"]
        },
        {
            img: renewableEnergyFutureGreen,
            title: 'Employment',
            textLines: ["Renewable Energy", "Green Hydrogen", "Production", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={renewableEnergyFutureImages}>
            <RenewableEnergyFutureText />
        </PersonalRelatedInsights>
    )
}

export default RenewableEnergyFuture