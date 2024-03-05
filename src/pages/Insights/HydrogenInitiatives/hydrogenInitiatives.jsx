import React from 'react'

import mainInsightsHydrogenInitiativesImage from '../../../assets/Images/Insights/main-insights-hydrogen-initiatives.jpeg'
import insightsHydrogenInitiativesImage from '../../../assets/Images/Insights/renewable-energy-waves.jpeg'
import insightsGreenImage from '../../../assets/Images/Insights/renewable-energy-green.jpeg'

import PersonalRelatedInsights from '../../../components/Common/PersonalRelatedInsight/personalRelatedInsights'
import HydrogenInitiativesText from './hydrogenInitiativesText'
import Swiper from '../../../components/Common/Swiper/swiper'
import ProfileCard from '../../../components/Common/ProfileCard/profileCard'

const HydrogenInitiatives = () => {
    const heroDetails = {
        heroImage: mainInsightsHydrogenInitiativesImage,
        heroPrimaryHeading: 'Insights',
        heroSecondaryHeading: 'Insights',
        heroSubHeading: "Legislative Committee Approves Proposed Law on Incentives for Green Hydrogen Initiatives"
    };

    const hydrogrenInitiativesImages = [
        {
            img: insightsHydrogenInitiativesImage,
            title: 'Wave and Tidal',
            textLines: ["Renewable Energy", "Wave and Tidal", "Energy", "31 January, 2024"]
        },
        {
            img: insightsGreenImage,
            title: 'Employment',
            textLines: ["Renewable Energy", "Green Hydrogen", "Production", "31 January, 2024"]
        },
    ]

    const profiles = [
        "Habil-Abu-El-Kheir",
        "Tamer-Kamal",
        "Hossam-El-Sharawi"
    ]

    return (
        <>
            <PersonalRelatedInsights heroDetails={heroDetails} insightImages={hydrogrenInitiativesImages}>
                <HydrogenInitiativesText />
            </PersonalRelatedInsights>

            <Swiper key={"Hydrogen-Initiatives-Our-Experts"} sectionHeader={"Our Experts"}>
                {
                    profiles.map(profile => (
                        <swiper-slide>
                            <ProfileCard key={profile} profileName={profile} />
                        </swiper-slide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default HydrogenInitiatives