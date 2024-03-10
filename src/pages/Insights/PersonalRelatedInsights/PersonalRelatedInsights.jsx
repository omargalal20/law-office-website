import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Insight from "../../../components/Common/Insight/Insight";
import Swiper from '../../../components/Common/Swiper/swiper';
import ProfileCard from "../../../components/Common/ProfileCard/profileCard";

import { InsightsInfo } from "../InsightsInfos";

const PersonalRelatedInsights = () => {
    const { insightName } = useParams();

    const [insight, setInsight] = useState({});

    useEffect(() => {
        setInsight(InsightsInfo[insightName] || {});
    }, [insightName]);

    return (
        ((Object.keys(insight).length !== 0)) && (
            <>
                <Insight heroDetails={insight.heroDetails} headerText={insight.headertext} insightImages={insight.relatedInsights} teamName={insight.teamName}>
                    {insight.insightInfo}
                </Insight>

                {
                    (insight.profiles && insight.profiles.length > 0) && (
                        <Swiper key={insightName + "-Our-Experts-Swiper"} sectionHeader={"Our Experts"}>
                            {insight.profiles.map((profile, index) => (
                                <swiper-slide key={index}>
                                    <ProfileCard profileName={profile} profileImage={""} />
                                </swiper-slide>
                            ))}
                        </Swiper>
                    )
                }
            </>
        )
    )
}

export default PersonalRelatedInsights