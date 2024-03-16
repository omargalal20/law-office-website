import React from 'react';
import MainPathConstants from './MainPathConstants';
import InsightsPathConstants from './InsightsPathConstants';
import PracticeAreasConstants from './PracticeAreasConstants';
import TeamPathConstants from './TeamPathConstants';
import CareersPathConstants from './CareersPathConstants.js';

// Main
const Landing = React.lazy(() => import('../pages/Landing/landing'));
const Contact = React.lazy(() => import('../pages/Contact/contact'));
const About = React.lazy(() => import('../pages/About/about'));
const Dentons = React.lazy(() => import('../pages/Dentons/dentons'));
const Practice = React.lazy(
  () => import('../pages/PracticeAreas/MainPracticeArea/practiceArea.jsx')
);

// Insights
const MainInsights = React.lazy(
  () => import('../pages/Insights/MainInsights/mainInsights.jsx')
);
const PersonalRelatedInsights = React.lazy(
  () =>
    import(
      '../pages/Insights/PersonalRelatedInsights/PersonalRelatedInsights.jsx'
    )
);

// Practice Area
const ArbitrationPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Arbitration/arbitration.jsx')
);

const CompetitionPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Competition/competition.jsx')
);

const CorporateGovernancePracticeArea = React.lazy(
  () =>
    import('../pages/PracticeAreas/CorporateGovernance/corporateGovernance.jsx')
);

const InsolvencyPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Insolvency/insolvency.jsx')
);

const MainPracticeAreaPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/MainPracticeArea/practiceArea.jsx')
);

const RealEstatePracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/RealEstate/realEstate.jsx')
);

const TransportationPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Transportation/transportation.jsx')
);

const AviationPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Aviation/aviation.jsx')
);

const ConstructionPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Construction/construction.jsx')
);

const EmploymentPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Employment/employment.jsx')
);

const JoinVenturesPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/JoinVentures/joinVentures.jsx')
);

const MergerAndAcquisitionPracticeArea = React.lazy(
  () =>
    import(
      '../pages/PracticeAreas/MergerAndAcquisition/mergerAndAcquisition.jsx'
    )
);

const RenewableEnergyPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/RenewableEnergy/renewableEnergy.jsx')
);

const WhiteCollarCrimePracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/WhiteCollarCrime/whiteCollarCrime.jsx')
);

const BankingAndFinancePracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/BankingAndFinance/bankingAndFinance.jsx')
);

const CorporatePracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Corporate/corporate.jsx')
);

const EnergyPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Energy/energy.jsx')
);

const LitigationPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Litigation/litigation.jsx')
);

const OilAndGasPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/OilAndGas/oilAndGas.jsx')
);

const TechnologyPracticeArea = React.lazy(
  () => import('../pages/PracticeAreas/Technology/technology.jsx')
);

const MainTeam = React.lazy(() => import('../pages/Team/mainTeam.jsx'));
const TeamProfile = React.lazy(() => import('../pages/Team/teamProfile.jsx'));

const Careers = React.lazy(() => import('../pages/Careers/Careers.jsx'));
const Interns = React.lazy(
  () => import('../pages/Careers/Interns/Interns.jsx')
);
const Professionals = React.lazy(
  () => import('../pages/Careers/Professionals/Professionals.jsx')
);

const routes = [
  // Main paths
  { path: MainPathConstants.LANDING, element: <Landing /> },
  { path: MainPathConstants.CONTACT, element: <Contact /> },
  { path: MainPathConstants.ABOUT, element: <About /> },
  { path: MainPathConstants.DENTONS, element: <Dentons /> },
  { path: MainPathConstants.PRACTICE_AREAS, element: <Practice /> },

  // Insights paths
  {
    path: InsightsPathConstants.PERSONAL_RELATED_INSIGHTS,
    element: <PersonalRelatedInsights />,
  },
  { path: InsightsPathConstants.MAIN, element: <MainInsights /> },

  // Team paths
  { path: TeamPathConstants.PROFILE, element: <TeamProfile /> },
  { path: TeamPathConstants.MAIN, element: <MainTeam /> },

  // Practice Areas paths
  {
    path: PracticeAreasConstants.ARBITRATION,
    element: <ArbitrationPracticeArea />,
  },
  {
    path: PracticeAreasConstants.COMPETITION,
    element: <CompetitionPracticeArea />,
  },
  {
    path: PracticeAreasConstants.CORPORATE_GOVERNANCE,
    element: <CorporateGovernancePracticeArea />,
  },
  {
    path: PracticeAreasConstants.INSOLVENCY,
    element: <InsolvencyPracticeArea />,
  },
  {
    path: PracticeAreasConstants.MAIN_PRACTICE_AREA,
    element: <MainPracticeAreaPracticeArea />,
  },
  {
    path: PracticeAreasConstants.REAL_ESTATE,
    element: <RealEstatePracticeArea />,
  },
  {
    path: PracticeAreasConstants.TRANSPORTATION,
    element: <TransportationPracticeArea />,
  },
  { path: PracticeAreasConstants.AVIATION, element: <AviationPracticeArea /> },
  {
    path: PracticeAreasConstants.CONSTRUCTION,
    element: <ConstructionPracticeArea />,
  },
  {
    path: PracticeAreasConstants.EMPLOYMENT,
    element: <EmploymentPracticeArea />,
  },
  {
    path: PracticeAreasConstants.JOIN_VENTURES,
    element: <JoinVenturesPracticeArea />,
  },
  {
    path: PracticeAreasConstants.MERGER_AND_ACQUISITION,
    element: <MergerAndAcquisitionPracticeArea />,
  },
  {
    path: PracticeAreasConstants.RENEWABLE_ENERGY,
    element: <RenewableEnergyPracticeArea />,
  },
  {
    path: PracticeAreasConstants.WHITE_COLLAR_CRIME,
    element: <WhiteCollarCrimePracticeArea />,
  },
  {
    path: PracticeAreasConstants.BANKING_AND_FINANCE,
    element: <BankingAndFinancePracticeArea />,
  },
  {
    path: PracticeAreasConstants.CORPORATE,
    element: <CorporatePracticeArea />,
  },
  { path: PracticeAreasConstants.ENERGY, element: <EnergyPracticeArea /> },
  {
    path: PracticeAreasConstants.LITIGATION,
    element: <LitigationPracticeArea />,
  },
  {
    path: PracticeAreasConstants.OIL_AND_GAS,
    element: <OilAndGasPracticeArea />,
  },
  {
    path: PracticeAreasConstants.TECHNOLOGY,
    element: <TechnologyPracticeArea />,
  },

  // Careers
  { path: CareersPathConstants.CAREERS, element: <Careers /> },
  { path: CareersPathConstants.INTERNS, element: <Interns /> },
  { path: CareersPathConstants.PROFESSIONALS, element: <Professionals /> },
];

export default routes;
