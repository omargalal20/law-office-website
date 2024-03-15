import { useState, useEffect } from 'react';

import { shuffleArray } from '../../../utils/ShuffleArray';

import { PracticeAreaImages } from '../Images/PracticeAreaImages';

import practiceAreaRenewableEnergy from '../../../assets/Images/PracticeArea/RenewableEnergy/renewableEnergyHero.jpeg';

import renewableEnergySolarEnergy from '../../../assets/Images/PracticeArea/RenewableEnergy/renewableEnergySolarEnergy.jpeg';
import renewableEnergySolarFarms from '../../../assets/Images/PracticeArea/RenewableEnergy/renewableEnergySolarFarms.jpeg';
import renewableEnergyBattery from '../../../assets/Images/PracticeArea/RenewableEnergy/renewableEnergyBattery.jpeg';

import PracticeArea from '../../../components/Layout/PracticeArea/practiceArea';

const RenewableEnergy = () => {
  const [practiceAreaImages, setPracticeAreaImages] = useState([]);

  const numberOfPracticeAreaImages = 2;

  useEffect(() => {
    const suffledArray = shuffleArray(PracticeAreaImages);
    setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
  }, []);

  const sectionHeaders = {
    firstSectionHeader: {
      sectionHeaderTitle: 'Sustainable Expertise',
      sectionHeaderText:
        ' A Renewable Energy Sector  Navigating the Future with',
      sectionStyle: {
        width: '969px',
        fontSize: '50px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
      },
    },
    secondSectionHeader: {
      sectionHeaderTitle: 'New Heights',
      sectionHeaderText: 'Our Renewable Energy Achievements Soar to',
      sectionStyle: {
        width: '430px',
        fontSize: '60px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
        marginTop: '52px',
      },
    },
    thirdSectionHeader: {
      sectionHeaderTitle: 'Legal View',
      sectionHeaderText: 'The RenewableEnergy Industry From a',
      sectionStyle: {
        width: '629px',
        fontSize: '60px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
        marginTop: '52px',
      },
    },
  };

  const heroDetails = {
    heroImage: practiceAreaRenewableEnergy,
    heroPrimaryHeading: 'RenewableEnergy',
    heroSecondaryHeading: 'Expertise',
    heroSubHeading:
      'While governments are leading the surge to greener initiatives, these commitments translate to significant investments in renewable energy projects, encompassing a diverse spectrum of technologies',
  };

  const genericRenewableEnergyImages = [
    {
      img: renewableEnergySolarEnergy,
      height: '692px',
      rows: 2,
      cols: 2,
      title: 'RenewableEnergy',
      textLines: [
        'RenewableEnergy',
        'Advancements in Solar Energy Technology',
        '',
        '31 January, 2024',
      ],
    },
    {
      img: renewableEnergySolarFarms,
      height: '318px',
      title: 'RenewableEnergy',
      textLines: [
        'RenewableEnergy',
        'Floating Solar Farms',
        '31 January, 2024',
      ],
      cols: 2,
    },
    {
      img: renewableEnergyBattery,
      height: '318px',
      title: 'RenewableEnergy',
      textLines: [
        'RenewableEnergy',
        'Battery Storage Solutions',
        '31 January, 2024',
      ],
      cols: 2,
    },
  ];

  return (
    <PracticeArea
      heroDetails={heroDetails}
      relatedImages={practiceAreaImages}
      practiceAreaImages={genericRenewableEnergyImages}
      sectionHeaders={sectionHeaders}
      teamName={'RenewableEnergy'}>
      <p
        style={{
          fontSize: '18px',
          fontWeight: 400,
          width: '1166px',
          fontFamily: 'Montserrat',
          marginTop: '52px',
        }}>
        Afifi Law Office's renewable energy practice focuses on providing
        comprehensive legal services tailored to the evolving landscape of
        renewable energy. Our team of seasoned attorneys offers practical
        solutions and strategic guidance to clients involved in renewable energy
        projects and initiatives. With a deep understanding of renewable energy
        regulations, industry trends, and technological advancements, our
        attorneys assist clients in navigating the complexities of renewable
        energy development, financing, and implementation. From solar and wind
        to hydroelectric and geothermal projects, we assist and advise across
        various renewable energy sectors. Our services encompass a wide range of
        areas, including project development and permitting, regulatory
        compliance, power purchase agreements, financing and investment, and
        merger sand acquisitions within the renewable energy space. We work
        closely with our clients to identify opportunities, mitigate risks, and
        ensure the successful execution of renewable energy projects. We are
        committed to sustainability and environmental stewardship. Our attorneys
        collaborate closely with clients to navigate the legal and regulatory
        challenges associated with renewable energy development while promoting
        responsible and sustainable practices.
      </p>
    </PracticeArea>
  );
};

export default RenewableEnergy;
