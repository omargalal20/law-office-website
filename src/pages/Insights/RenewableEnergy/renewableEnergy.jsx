import React from 'react'

import mainInsightsGenericInsightsRenewableImage from '../../../assets/Images/Insights/main-insights-renewable-windmill.jpeg'
import RenewableEnergyInsightsWaves from '../../../assets/Images/Insights/renewable-energy-waves.jpeg'
import RenewableEnergyInsightsGreen from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import RenewableEnergyText from './renewableEnergyText'


const RenewableEnergy = () => {
    const heroDetails = {
        heroImage: mainInsightsGenericInsightsRenewableImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "A Nation Powered by Sunshine Egypt's 2030 Renewable Energy Target"
    };

    const renewableEnergyImages = [
        {
            img: RenewableEnergyInsightsWaves,
            title: 'Wave and Tidal',
            textLines: ["Renewable Energy", "Wave and Tidal", "Energy", "31 January, 2024"]
        },
        {
            img: RenewableEnergyInsightsGreen,
            title: 'Employment',
            textLines: ["Renewable Energy", "Green Hydrogen", "Production", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={renewableEnergyImages}>
            <RenewableEnergyText />
        </PersonalRelatedInsights>
    )
}

export default RenewableEnergy