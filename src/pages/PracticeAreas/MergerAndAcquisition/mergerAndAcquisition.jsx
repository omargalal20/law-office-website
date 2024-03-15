import { useState, useEffect } from 'react';

import { shuffleArray } from '../../../utils/ShuffleArray';

import { PracticeAreaImages } from '../Images/PracticeAreaImages';

import mergerAndAcquisitionHero from '../../../assets/Images/PracticeArea/MergerAndAcquisition/mergerAndAcquisitionHero.jpeg';
import mergerAndAcquisitionFintech from '../../../assets/Images/PracticeArea/MergerAndAcquisition/mergerAndAcquisitionFintech.jpeg';
import mergerAndAcquisitionEquity from '../../../assets/Images/PracticeArea/MergerAndAcquisition/mergerAndAcquisitionEquity.jpeg';
import mergerAndAcquisitionSustainable from '../../../assets/Images/PracticeArea/MergerAndAcquisition/mergerAndAcquisitionSustainable.jpeg';

import PracticeArea from '../../../components/Layout/PracticeArea/practiceArea';

const MergerAndAcquisition = () => {
  const [practiceAreaImages, setPracticeAreaImages] = useState([]);

  const numberOfPracticeAreaImages = 2;

  useEffect(() => {
    const suffledArray = shuffleArray(PracticeAreaImages);
    setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
  }, []);

  const sectionHeaders = {
    firstSectionHeader: {
      sectionHeaderTitle: 'Business Growth',
      sectionHeaderText:
        'Mastering Mergers & Acquisitions - Your Legal Architects for',
      sectionStyle: {
        width: '969px',
        fontSize: '50px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
      },
    },
    secondSectionHeader: {
      sectionHeaderTitle: 'Unprecedented Heights',
      sectionHeaderText: 'Our Mergers & Acquisitions Successes Reach',
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
      sectionHeaderText: 'Mergers & Acquisitions Industry From a',
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
    heroImage: mergerAndAcquisitionHero,
    heroPrimaryHeading: 'Merger & Acquisition',
    heroSecondaryHeading: 'Expertise',
    heroSubHeading:
      'Navigating the complexities of mergers and acquisitions, we provide practical solutions to an array of business transactions.',
  };

  const genericMergerAndAcquisitionImages = [
    {
      img: mergerAndAcquisitionFintech,
      height: '692px',
      rows: 2,
      cols: 2,
      title: 'Fintech',
      textLines: [
        'Merger & Acquisition',
        'M&A in the Fintech Sector',
        '',
        '31 January, 2024',
      ],
    },
    {
      img: mergerAndAcquisitionEquity,
      height: '318px',
      title: 'Equity',
      textLines: [
        'Merger & Acquisition',
        'Floating Solar Farms',
        '31 January, 2024',
      ],
      cols: 2,
    },
    {
      img: mergerAndAcquisitionSustainable,
      height: '318px',
      title: 'Sustainable',
      textLines: [
        'mergerAndAcquisition',
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
      practiceAreaImages={genericMergerAndAcquisitionImages}
      sectionHeaders={sectionHeaders}
      teamName={'mergerAndAcquisition'}>
      <p
        style={{
          fontSize: '18px',
          fontWeight: 400,
          width: '1166px',
          fontFamily: 'Montserrat',
          marginTop: '52px',
        }}>
        The firm’s mergers & acquisitions team specializes in providing
        comprehensive legal services to clients involved in corporate
        transactions. With a focus on practical solutions and industry
        expertise, our team of attorneys assists clients in navigating the
        complexities of mergers, acquisitions, divestitures, and other strategic
        transactions. Our attorneys have a deep understanding of corporate law,
        securities regulations, and transactional structures, allowing us to
        offer tailored advice and guidance throughout the entire M&A process.
        From due diligence and negotiation to drafting transaction documents and
        closing, we work diligently to help achieve strategic objectives while
        minimizing legal risks. In addition to traditional M&A transactions, our
        M&A team also advises clients on joint ventures, strategic alliances,
        and other corporate partnerships. We collaborate closely with our
        clients to develop customized strategies that align with their business
        goals and objectives. Whether representing buyers, sellers, investors,
        or financial institutions, our attorneys are committed to delivering
        exceptional results and guiding our clients through every stage of the
        transaction with professionalism and efficiency.
      </p>
    </PracticeArea>
  );
};

export default MergerAndAcquisition;
