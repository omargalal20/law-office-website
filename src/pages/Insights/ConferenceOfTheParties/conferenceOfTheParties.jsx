import React from 'react'

import mainInsightsGenericInsightsRenewableImage from '../../../assets/Images/Insights/main-insights-renewable.jpeg'
import conferenceOfThePartiesInsightsWaves from '../../../assets/Images/Insights/renewable-energy-waves.jpeg'
import conferenceOfThePartiesInsightsGreen from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import ConferenceOfThePartiesText from './conferenceOfThePartiesText'


const ConferenceOfTheParties = () => {
    const heroDetails = {
        heroImage: mainInsightsGenericInsightsRenewableImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Navigating the Path to Renewables Egypt and the UAE's Energy Transition Roadmap at COP27 and COP28."
    };

    const ConferenceOfThePartiesImages = [
        {
            img: conferenceOfThePartiesInsightsWaves,
            title: 'Wave and Tidal',
            textLines: ["Renewable Energy", "Wave and Tidal", "Energy", "31 January, 2024"]
        },
        {
            img: conferenceOfThePartiesInsightsGreen,
            title: 'Employment',
            textLines: ["Renewable Energy", "Green Hydrogen", "Production", "31 January, 2024"]
        },
    ]

    return (
        <PersonalRelatedInsights heroDetails={heroDetails} insightImages={ConferenceOfThePartiesImages}>
            <ConferenceOfThePartiesText />
        </PersonalRelatedInsights>
    )
}

export default ConferenceOfTheParties