import React from "react";
import MainPathConstants from "./MainPathConstants";
import InsightsPathConstants from "./InsightsPathConstants";
import PracticeAreasConstants from "./PracticeAreasConstants";
import TeamPathConstants from "./TeamPathConstants";

const AviationPracticeArea = React.lazy(() =>
  import("../pages/PracticeArea/Aviation/aviation.jsx")
);

const Habil = React.lazy(() => import("../pages/Team/habil.jsx"));
const Landing = React.lazy(() => import("../pages/Landing/landing"));
const Contact = React.lazy(() => import("../pages/Contact/contact"));
const About = React.lazy(() => import("../pages/About/about"));
const Dentons = React.lazy(() => import("../pages/Dentons/dentons"));
const Practice = React.lazy(() => import("../pages/PracticeArea/practiceArea"));
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
    path: PracticeAreasConstants.AVIATION,
    element: <AviationPracticeArea />,
  },
  {
    path: TeamPathConstants.HABIL,
    element: <Habil />,
  },
];

export default routes;
