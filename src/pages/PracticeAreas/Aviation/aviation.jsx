import { useState, useEffect } from 'react';

import { shuffleArray } from '../../../utils/ShuffleArray';

import { PracticeAreaImages } from '../Images/PracticeAreaImages';

import practiceAreaAviation from '../../../assets/Images/PracticeArea/Aviation/hero.svg';
import img3 from '../../../assets/Images/PracticeArea/Aviation/Rectangle 20.png';
import img4 from '../../../assets/Images/PracticeArea/Aviation/Group 59.png';
import img5 from '../../../assets/Images/PracticeArea/Aviation/Group 58.png';

import PracticeArea from '../../../components/Layout/PracticeArea/practiceArea';

const Aviation = () => {
  const [practiceAreaImages, setPracticeAreaImages] = useState([]);

  const numberOfPracticeAreaImages = 2;

  useEffect(() => {
    const suffledArray = shuffleArray(PracticeAreaImages);
    setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
  }, []);

  const sectionHeaders = {
    firstSectionHeader: {
      sectionHeaderTitle: 'Industry Sector',
      sectionHeaderText: 'Comprehensive Expertise Spanning The Entire',
      sectionStyle: {
        width: '969px',
        fontSize: '50px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
      },
    },
    secondSectionHeader: {
      sectionHeaderTitle: 'Higher',
      sectionHeaderText: 'Our Successes Seen ',
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
      sectionHeaderText: 'The Aviation Industry From a',
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
    heroImage: practiceAreaAviation,
    heroPrimaryHeading: 'Aviation',
    heroSecondaryHeading: 'Expertise',
    heroSubHeading:
      'Operating seamlessly, Afifi Law Office aviation practice is highly regarded globally and recognized as the preeminent aviation law firm',
  };

  const genericAviationImages = [
    {
      img: img3,
      height: '692px',
      rows: 2,
      cols: 2,
      title: 'Aviation',
      textLines: [
        'Aviation',
        'Sustainable Aviation Fuels (SAF)',
        '',
        '31 January, 2024',
      ],
    },
    {
      img: img4,
      height: '318px',
      title: 'Aviation',
      textLines: [
        'Aviation',
        'Electric and Hybrid Aircraft',
        '31 January, 2024',
      ],
      cols: 2,
    },
    {
      img: img5,
      height: '318px',
      title: 'Aviation',
      textLines: ['Aviation', 'Supersonic Travel Revival', '31 January, 2024'],
      cols: 2,
    },
  ];

  return (
    <PracticeArea
      heroDetails={heroDetails}
      relatedImages={practiceAreaImages}
      practiceAreaImages={genericAviationImages}
      sectionHeaders={sectionHeaders}
      teamName={'Aviation'}>
      <p
        style={{
          fontSize: '18px',
          fontWeight: 400,
          width: '1166px',
          fontFamily: 'Montserrat',
          marginTop: '52px',
        }}>
        The firm’s aviation department specializes in providing comprehensive
        legal services tailored to the unique needs of clients in the aviation
        industry. We offer expertise in regulatory compliance, aircraft
        financing and leasing, liability issues, corporate transactions, airline
        operations, aircraft transactions, insurance and risk management. Our
        team of experienced attorneys provides strategic counsel and practical
        solutions to navigate the complexities of the aviation sector. Ranging
        from airlines to aircraft manufacturers, lessors, financiers, or other
        stakeholders in aviation, we are dedicated to assisting them in
        achieving their business objectives while ensuring compliance with
        applicable laws and regulations. From advising on regulatory matters to
        negotiating financing agreements and resolving disputes ,Afifi Law
        Office is committed to delivering exceptional legal representation and
        personalized service to clients across the aviation industry. The firm
        is regularly contributing to the development of aviation law on a
        domestic scope as well as globally on an array of regulations.
      </p>
    </PracticeArea>
  );
};
export default Aviation;
