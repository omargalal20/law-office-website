import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { shuffleArray } from '../../../utils/ShuffleArray';

import Insight from '../../../components/Layout/Insights/Insight';

const Swiper = lazy(() => import('../../../components/Common/Swiper/swiper'));
const ProfileCard = lazy(
  () => import('../../../components/Common/ProfileCard/profileCard')
);

import { InsightsInfo, RelatedInsightsImages } from '../InsightsInfos';

const PersonalRelatedInsights = () => {
  const { insightName } = useParams();

  const [insight, setInsight] = useState({});
  const [relatedInsightsImages, setRelatedInsightsImages] = useState([]);

  const numberOfRelatedInsightImages = 2;

  useEffect(() => {
    const suffledArray = shuffleArray(RelatedInsightsImages);
    setInsight(InsightsInfo[insightName] || {});
    setRelatedInsightsImages(
      suffledArray.slice(0, numberOfRelatedInsightImages)
    );
  }, [insightName]);

  return (
    Object.keys(insight).length !== 0 && (
      <>
        <Insight
          heroDetails={insight.heroDetails}
          headerText={insight.headertext}
          insightImages={relatedInsightsImages}
          teamName={insight.teamName}>
          {insight.insightInfo}
        </Insight>

        <Suspense fallback={<div>Loading...</div>}>
          {insight.profiles && insight.profiles.length > 0 && (
            <Swiper
              key={insightName + '-Our-Experts-Swiper'}
              sectionHeader={'Our Experts'}>
              {insight.profiles.map((profile, index) => (
                <swiper-slide key={index}>
                  <ProfileCard profileName={profile} profileImage={''} />
                </swiper-slide>
              ))}
            </Swiper>
          )}
        </Suspense>
      </>
    )
  );
};

export default PersonalRelatedInsights;
