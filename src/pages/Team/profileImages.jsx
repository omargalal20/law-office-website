import PracticeAreasConstants from '../../routes/PracticeAreasConstants';

import habilAbuElKheirProfilePic from '../../assets/Images/Team/habil.png';
import tamerKandilProfileImage from '../../assets/Images/Team/tamerKandilProfilePic.jpeg';
import mohamedTayelProfileImage from '../../assets/Images/Team/mohamedTayelProfilePic.jpeg';
import hossamElSharawiProfilePic from '../../assets/Images/Team/hossamElSharawiProfilePic.jpeg';
import gamilDorghamProfilePic from '../../assets/Images/Team/gamilDorghamProfilePic.jpeg';
import mahmoudMaherProfilePic from '../../assets/Images/Team/mahmoudMaherProfilePic.png';
import adelFekryProfilePic from '../../assets/Images/Team/adelFekryProfilePic.jpeg';
import aliaSafeiProfilePic from '../../assets/Images/Team/aliaSafeiProfilePic.jpeg';
import andrewAfifiProfilePic from '../../assets/Images/Team/andrewAfifiProfilePic.jpeg';
import asserNegmEldinProfilePic from '../../assets/Images/Team/asserNegmElDinProfilePic.jpeg';
import emilGhobrialProfilePic from '../../assets/Images/Team/emilGhorbielProfilePic.jpeg';
import aminKamalAminProfilePic from '../../assets/Images/Team/aminKamalAminProfilePic.jpeg';
import walidSakrProfilePic from '../../assets/Images/Team/walidSakrProfilePic.jpeg';

// Change Request
import amalAfifiProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import fadySeifProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import ahmedRashedProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import mahrousShafikProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import abanoubTharwatProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import beshoyMeladProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import nancyNashaatProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import maryRizkallaProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import adelRasheedProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import emilLabibHanaProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import gamalAbdelRazakProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';
import hanyEdwardProfilePic from '../../assets/Images/Misc/Image-Not-Found.jpg';

import antitrustChallengesImage from '../../assets/Images/Team/Rectangle 20 (1).png';
import eCommerceImage from '../../assets/Images/Team/Group 58 (1).png';
import globalMergerControlImage from '../../assets/Images/Team/Group 59 (1).png';
import remoteWorkImage from '../../assets/Images/PracticeArea/RealEstate/real-estate-remote-work.jpeg';
import technologyImage from '../../assets/Images/PracticeArea/RealEstate/real-estate-technology.jpeg';
import smartHomesImage from '../../assets/Images/PracticeArea/RealEstate/real-estate-smart-homes.jpeg';

import corporateWorkImage from '../../assets/Images/Team/corporateWork.jpeg';
import corporateRegulatoryImage from '../../assets/Images/Team/corporateRegulatory.jpeg';
import corporateSupplyChainImage from '../../assets/Images/Team/corporateSupplyChain.jpeg';
import corporateBiImage from '../../assets/Images/Team/corporateBi.jpeg';
import corporateDigitalTransformationImage from '../../assets/Images/Team/corporateDigitalTransformation.jpeg';

import WhiteCollarCrimeHero from '../../assets/Images/PracticeArea/WhiteCollarCrime/WhiteCollarCrimeHero.jpeg';
import LitigationHero from '../../assets/Images/PracticeArea/Litigation/LitigationHero.jpeg';
import ArbitrationHero from '../../assets/Images/PracticeArea/Arbitration/arbitrationHero.jpeg';
import ConstructionTrendsHero from '../../assets/Images/Insights/main-insights-construction-trends.jpeg';
import corporateHero from '../../assets/Images/PracticeArea/Corporate/corporatehero.jpeg';
import CorporateGovernanceHero from '../../assets/Images/PracticeArea/CorporateGovernance/CorporateGovernanceHero.jpeg';
import BankingAndFinanceHero from '../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-hero-image.jpeg';
import AviationHero from '../../assets/Images/PracticeArea/Aviation/hero.svg';
import EmploymentHero from '../../assets/Images/PracticeArea/Employment/EmploymentHero.jpeg';
import RealEstateHero from '../../assets/Images/PracticeArea/RealEstate/real-estate-hero-image.jpeg';
import OilAndGasHero from '../../assets/Images/PracticeArea/OilAndGas/oil-gas-hero-image.jpeg';

export const LatestNewsImages = [
  {
    img: antitrustChallengesImage,
    height: '692px',
    rows: 2,
    cols: 2,
    title: 'Competition & Anti-trust ',
    textLines: [
      'Competition & Anti-trust ',
      'Antitrust Challenges Post-Pandemic Era',
      '',
      '31 January, 2024',
    ],
  },
  {
    img: eCommerceImage,
    height: '318px',
    title: 'Competition & Anti-trust ',
    textLines: [
      'Competition & Anti-trust ',
      'E-commerce Competition',
      '31 January, 2024',
    ],
    cols: 2,
  },
  {
    img: globalMergerControlImage,
    height: '318px',
    title: 'Competition & Anti-trust ',
    textLines: [
      'Competition & Anti-trust ',
      'Global Merger Control',
      '31 January, 2024',
    ],
    cols: 2,
  },
  {
    img: corporateSupplyChainImage,
    height: '692px',
    rows: 2,
    cols: 2,
    title: 'Corporate',
    textLines: [
      'Corporate',
      'Global Supply Chain Resilience',
      '',
      '31 January, 2024',
    ],
  },
  {
    img: corporateBiImage,
    height: '318px',
    title: 'Corporate',
    textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
    cols: 2,
  },
  {
    img: corporateDigitalTransformationImage,
    height: '318px',
    title: 'Corporate',
    textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
    cols: 2,
  },
];
export const ProfileImagesData = {
  habilAbuElKheir: {
    profileImage: habilAbuElKheirProfilePic,
    relatedPracticeAreasImages: [
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      },
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: ArbitrationHero,
        title: 'Adaptions',
        textLines: ['Arbitration', 'Arbitration', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.ARBITRATION,
      },
    ],
    latestNewsImages: [
      {
        img: antitrustChallengesImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'Antitrust Challenges Post-Pandemic Era',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: eCommerceImage,
        height: '318px',
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'E-commerce Competition',
          '31 January, 2024',
        ],
        cols: 2,
      },
      {
        img: globalMergerControlImage,
        height: '318px',
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'Global Merger Control',
          '31 January, 2024',
        ],
        cols: 2,
      },
    ],
  },
  tamerKamal: {
    profileImage: tamerKandilProfileImage,
    relatedPracticeAreasImages: [
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      },
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: ArbitrationHero,
        title: 'Adaptions',
        textLines: ['Arbitration', 'Arbitration', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.ARBITRATION,
      },
      {
        img: ConstructionTrendsHero,
        title: 'Construction',
        textLines: ['Construction', 'Construction', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.CONSTRUCTION,
      },
    ],
    latestNewsImages: [
      {
        img: antitrustChallengesImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'Antitrust Challenges Post-Pandemic Era',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: eCommerceImage,
        height: '318px',
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'E-commerce Competition',
          '31 January, 2024',
        ],
        cols: 2,
      },
      {
        img: globalMergerControlImage,
        height: '318px',
        title: 'Competition & Anti-trust ',
        textLines: [
          'Competition & Anti-trust ',
          'Global Merger Control',
          '31 January, 2024',
        ],
        cols: 2,
      },
    ],
  },
  mohamedTayel: {
    profileImage: mohamedTayelProfileImage,
    relatedPracticeAreasImages: [
      {
        img: corporateHero,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: CorporateGovernanceHero,
        title: 'Corporate',
        textLines: [
          'Corporate Governance',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE_GOVERNANCE,
      },
      {
        img: BankingAndFinanceHero,
        title: 'Banking & Finance',
        textLines: [
          'Banking & Finance',
          'Digital',
          'Banking Transformation',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.BANKING_AND_FINANCE,
      },

    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  hossamElSharawi: {
    profileImage: hossamElSharawiProfilePic,
    relatedPracticeAreasImages: [
      {
        img: AviationHero,
        title: 'Aviation',
        textLines: [
          'Aviation',
          'Aviation',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.AVIATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  gamilDorgham: {
    profileImage: gamilDorghamProfilePic,
    relatedPracticeAreasImages: [
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      },
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: RealEstateHero,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Real Estate',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.REAL_ESTATE,
      }
    ],
    latestNewsImages: [
      {
        img: remoteWorkImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          "Remote Work's Effect on Home Buying",
          '',
          '31 January, 2024',
        ],
      },
      {
        img: technologyImage,
        height: '318px',
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Technology in Real Estate',
          '31 January, 2024',
        ],
        cols: 2,
      },
      {
        img: smartHomesImage,
        height: '318px',
        title: 'Real Estate',
        textLines: ['Real Estate', 'Rise of Smart Homes', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  mahmoudMaher: {
    profileImage: mahmoudMaherProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: CorporateGovernanceHero,
        title: 'Corporate',
        textLines: [
          'Corporate Governance',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE_GOVERNANCE,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  adelFekry: {
    profileImage: adelFekryProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  aliaSafei: {
    profileImage: aliaSafeiProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  andrewAfifi: {
    profileImage: andrewAfifiProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: technologyImage,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Technology in Real Estate',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.TECHNOLOGY,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: OilAndGasHero,
        title: 'Oil And Gas',
        textLines: [
          'Oil And Gas',
          'Oil And Gas',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.OIL_AND_GAS,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  asserNegmEldin: {
    profileImage: asserNegmEldinProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: CorporateGovernanceHero,
        title: 'Corporate',
        textLines: [
          'Corporate Governance',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE_GOVERNANCE,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  emilGhobrial: {
    profileImage: emilGhobrialProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: CorporateGovernanceHero,
        title: 'Corporate',
        textLines: [
          'Corporate Governance',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE_GOVERNANCE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  aminKamalAmin: {
    profileImage: aminKamalAminProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
      {
        img: RealEstateHero,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Real Estate',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.REAL_ESTATE,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  walidSakr: {
    profileImage: walidSakrProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  // Change Requests
  adelRasheed: {
    profileImage: adelRasheedProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      },
      {
        img: RealEstateHero,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Real Estate',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.REAL_ESTATE,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  emilLabibhana: {
    profileImage: emilLabibHanaProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  gamalAbdelRazak: {
    profileImage: gamalAbdelRazakProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
      {
        img: WhiteCollarCrimeHero,
        title: 'White Collar Crime',
        textLines: [
          'White Collar Crime',
          'White Collar Crime',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.WHITE_COLLAR_CRIME,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  hanyEdward: {
    profileImage: hanyEdwardProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
      {
        img: RealEstateHero,
        title: 'Real Estate',
        textLines: [
          'Real Estate',
          'Real Estate',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.REAL_ESTATE,
      }
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  nancyNashaat: {
    profileImage: nancyNashaatProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  maryRizkalla: {
    profileImage: maryRizkallaProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  beshoyMelad: {
    profileImage: beshoyMeladProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  amalAfifi: {
    profileImage: amalAfifiProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  fadySeif: {
    profileImage: fadySeifProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  ahmedRashed: {
    profileImage: ahmedRashedProfilePic,
    relatedPracticeAreasImages: [
      {
        img: corporateWorkImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Remote and Hybrid Work',
          'Models',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
      {
        img: corporateRegulatoryImage,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Regulatory Compliance',
          'and Changes',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.CORPORATE,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  abanoubTharwat: {
    profileImage: abanoubTharwatProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
  mahrousShafik: {
    profileImage: mahrousShafikProfilePic,
    relatedPracticeAreasImages: [
      {
        img: LitigationHero,
        title: 'Litigation',
        textLines: ['Litigation', 'Litigation', '', '31 January, 2024'],
        toPage: PracticeAreasConstants.LITIGATION,
      },
      {
        img: EmploymentHero,
        title: 'Employment',
        textLines: [
          'Employment',
          'Employment',
          '',
          '31 January, 2024',
        ],
        toPage: PracticeAreasConstants.EMPLOYMENT,
      },
    ],
    latestNewsImages: [
      {
        img: corporateSupplyChainImage,
        height: '692px',
        rows: 2,
        cols: 2,
        title: 'Corporate',
        textLines: [
          'Corporate',
          'Global Supply Chain Resilience',
          '',
          '31 January, 2024',
        ],
      },
      {
        img: corporateBiImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'BI Analytics', '31 January, 2024'],
        cols: 2,
      },
      {
        img: corporateDigitalTransformationImage,
        height: '318px',
        title: 'Corporate',
        textLines: ['Corporate', 'Digital Transformation', '31 January, 2024'],
        cols: 2,
      },
    ],
  },
};
