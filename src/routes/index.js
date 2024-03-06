import React from "react";
import MainPathConstants from "./MainPathConstants";
import InsightsPathConstants from "./InsightsPathConstants";
import PracticeAreasConstants from "./PracticeAreasConstants";
import TeamPathConstants from "./TeamPathConstants";

const Landing = React.lazy(() => import("../pages/Landing/landing"));
const Contact = React.lazy(() => import("../pages/Contact/contact"));
const About = React.lazy(() => import("../pages/About/about"));
const Dentons = React.lazy(() => import("../pages/Dentons/dentons"));
const Practice = React.lazy(() =>
  import("../pages/PracticeAreas/MainPracticeArea/practiceArea.jsx")
);
const Maps = React.lazy(() => import("../pages/maps"));

const MainInsights = React.lazy(() =>
  import("../pages/Insights/MainInsights/mainInsights")
);
const LaborLawInsights = React.lazy(() =>
  import("../pages/Insights/LaborLaw/laborlaw")
);
const RenewableEnergyInsights = React.lazy(() =>
  import("../pages/Insights/RenewableEnergy/renewableEnergy")
);
const DataPrivacyInsights = React.lazy(() =>
  import("../pages/Insights/DataPrivacy/dataPrivacy")
);
const SustainableMobilityInsights = React.lazy(() =>
  import("../pages/Insights/SustainableMobility/sustainableMobility")
);
const GafiInsights = React.lazy(() => import("../pages/Insights/GAFI/gafi"));
const SustainableFuelsInsights = React.lazy(() =>
  import("../pages/Insights/SustainableFuels/sustainableFuels")
);
const TaxingCatalystInsights = React.lazy(() =>
  import("../pages/Insights/TaxingCatalyst/taxingCatalyst")
);
const EnergyGlobalDemandInsights = React.lazy(() =>
  import("../pages/Insights/EnergyGlobalDemand/energyGlobalDemand")
);
const CapitalRetentionInsights = React.lazy(() =>
  import("../pages/Insights/CapitalRetention/capitalRetention")
);
const ArbitrationResolvingInsights = React.lazy(() =>
  import("../pages/Insights/ArbitrationResolving/arbitrationResolving")
);
const ConferenceOfThePartiesInsights = React.lazy(() =>
  import("../pages/Insights/ConferenceOfTheParties/conferenceOfTheParties")
);
const ConstructionTrendsInsights = React.lazy(() =>
  import("../pages/Insights/ConstructionTrends/constructionTrends")
);
const CrcicaRulesInsights = React.lazy(() =>
  import("../pages/Insights/CRCICARules/crcicaRules")
);
const HydrogenInitiativesInsights = React.lazy(() =>
  import("../pages/Insights/HydrogenInitiatives/hydrogenInitiatives")
);
const InternationalFinanceInsights = React.lazy(() =>
  import("../pages/Insights/InternationalFinance/internationalFinance")
);
const LegalPerspectiveInsights = React.lazy(() =>
  import("../pages/Insights/LegalPerspective/legalPerspective")
);
const MergerControlInsights = React.lazy(() =>
  import("../pages/Insights/MergerControl/mergerControl")
);
const RenewableEnergyFutureInsights = React.lazy(() =>
  import("../pages/Insights/RenewableEnergyFuture/renewableEnergyFuture")
);
const TransportationLogisticsInsights = React.lazy(() =>
  import("../pages/Insights/TransportationLogistics/transportationLogistics")
);

const ArbitrationPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Arbitration/arbitration.jsx")
);

const CompetitionPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Competition/competition.jsx")
);

const CorporateGovernancePracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/CorporateGovernance/corporateGovernance.jsx")
);

const InsolvencyPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Insolvency/insolvency.jsx")
);

const MainPracticeAreaPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/MainPracticeArea/practiceArea.jsx")
);

const RealEstatePracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/RealEstate/realEstate.jsx")
);

const TransportationPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Transportation/transportation.jsx")
);

const AviationPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Aviation/aviation.jsx")
);

const ConstructionPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Construction/construction.jsx")
);

const EmploymentPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Employment/employment.jsx")
);

const JoinVenturesPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/JoinVentures/joinVentures.jsx")
);

const MergerAndAcquisitionPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/MergerAndAcquisition/mergerAndAcquisition.jsx")
);

const RenewableEnergyPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/RenewableEnergy/renewableEnergy.jsx")
);

const WhiteCollarCrimePracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/WhiteCollarCrime/whiteCollarCrime.jsx")
);

const BankingAndFinancePracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/BankingAndFinance/bankingAndFinance.jsx")
);

const CorporatePracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Corporate/corporate.jsx")
);

const EnergyPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Energy/energy.jsx")
);

const LitigationPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Litigation/litigation.jsx")
);

const OilAndGasPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/OilAndGas/oilAndGas.jsx")
);

const TechnologyPracticeArea = React.lazy(() =>
  import("../pages/PracticeAreas/Technology/technology.jsx")
);

const MainTeam = React.lazy(() => import("../pages/Team/mainTeam.jsx"));
const TeamProfile = React.lazy(() => import("../pages/Team/teamProfile.jsx"));

const routes = [
  { path: MainPathConstants.LANDING, element: <Landing /> },
  { path: MainPathConstants.CONTACT, element: <Contact /> },
  { path: MainPathConstants.ABOUT, element: <About /> },
  { path: MainPathConstants.DENTONS, element: <Dentons /> },
  { path: MainPathConstants.PRACTICE_AREAS, element: <Practice /> },
  { path: MainPathConstants.MAPS, element: <Maps /> },
  { path: InsightsPathConstants.MAIN, element: <MainInsights /> },
  { path: InsightsPathConstants.LABOR_LAW, element: <LaborLawInsights /> },
  {
    path: InsightsPathConstants.RENEWABLE_ENERGY,
    element: <RenewableEnergyInsights />,
  },
  {
    path: InsightsPathConstants.DATA_PRIVACY,
    element: <DataPrivacyInsights />,
  },
  {
    path: InsightsPathConstants.SUSTAINABLE_MOBILITY,
    element: <SustainableMobilityInsights />,
  },
  { path: InsightsPathConstants.GAFI, element: <GafiInsights /> },
  {
    path: InsightsPathConstants.SUSTAINABLE_FUELS,
    element: <SustainableFuelsInsights />,
  },
  {
    path: InsightsPathConstants.TAXING_CATALYST,
    element: <TaxingCatalystInsights />,
  },
  {
    path: InsightsPathConstants.ENERGY_GLOBAL_DEMAND,
    element: <EnergyGlobalDemandInsights />,
  },
  {
    path: InsightsPathConstants.CAPITAL_RETENTION,
    element: <CapitalRetentionInsights />,
  },
  {
    path: InsightsPathConstants.ARBITRATION_RESOLVING,
    element: <ArbitrationResolvingInsights />,
  },
  {
    path: InsightsPathConstants.CONFERENCE_OF_THE_PARTIES,
    element: <ConferenceOfThePartiesInsights />,
  },
  {
    path: InsightsPathConstants.CONSTRUCTION_TRENDS,
    element: <ConstructionTrendsInsights />,
  },
  {
    path: InsightsPathConstants.CRCICA_RULES,
    element: <CrcicaRulesInsights />,
  },
  {
    path: InsightsPathConstants.HYDROGEN_INITIATIVES,
    element: <HydrogenInitiativesInsights />,
  },
  {
    path: InsightsPathConstants.INTERNATIONAL_FINANCE,
    element: <InternationalFinanceInsights />,
  },
  {
    path: InsightsPathConstants.LEGAL_PERSPECTIVE,
    element: <LegalPerspectiveInsights />,
  },
  {
    path: InsightsPathConstants.MERGER_CONTROL,
    element: <MergerControlInsights />,
  },
  {
    path: InsightsPathConstants.RENEWABLE_ENERGY_FUTURE,
    element: <RenewableEnergyFutureInsights />,
  },
  {
    path: InsightsPathConstants.TRANSPORTATION_LOGISTICS,
    element: <TransportationLogisticsInsights />,
  },
  {
    path: TeamPathConstants.PROFILE,
    element: <TeamProfile />,
  },
  {
    path: TeamPathConstants.MAIN,
    element: <MainTeam />,
  },
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
  {
    path: PracticeAreasConstants.AVIATION,
    element: <AviationPracticeArea />,
  },
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
  {
    path: PracticeAreasConstants.ENERGY,
    element: <EnergyPracticeArea />,
  },
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
];

export default routes;
