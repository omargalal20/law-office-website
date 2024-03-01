import React from "react";
import PathConstants from "./PathConstants";
import InsightsPathConstants from "./InsightsPathConstants";

const Landing = React.lazy(() => import("../pages/Landing/landing"));
const Contact = React.lazy(() => import("../pages/Contact/contact"));
const About = React.lazy(() => import("../pages/About/about"));
const Dentons = React.lazy(() => import("../pages/Dentons/dentons"));
const Practice = React.lazy(() => import("../pages/PracticeArea/practiceArea"));
const Maps = React.lazy(() => import("../pages/maps"));
const MainInsights = React.lazy(() => import("../pages/Insights/mainInsights"));
const LaborLawInsights = React.lazy(() => import("../pages/Insights/LaborLaw/laborlaw"));
const RenewableEnergyInsights = React.lazy(() => import("../pages/Insights/RenewableEnergy/renewableEnergy"));
const DataPrivacyInsights = React.lazy(() => import("../pages/Insights/DataPrivacy/dataPrivacy"));
const SustainableMobilityInsights = React.lazy(() => import("../pages/Insights/SustainableMobility/sustainableMobility"));
const GafiInsights = React.lazy(() => import("../pages/Insights/GAFI/gafi"));
const SustainableFuelsInsights = React.lazy(() => import("../pages/Insights/SustainableFuels/sustainableFuels"));
const TaxingCatalystInsights = React.lazy(() => import("../pages/Insights/TaxingCatalyst/taxingCatalyst"));
const EnergyGlobalDemandInsights = React.lazy(() => import("../pages/Insights/EnergyGlobalDemand/energyGlobalDemand"));
const CapitalRetentionInsights = React.lazy(() => import("../pages/Insights/CapitalRetention/capitalRetention"));

const routes = [
  { path: PathConstants.LANDING, element: <Landing /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.DENTONS, element: <Dentons /> },
  { path: PathConstants.PRACTICE_AREAS, element: <Practice /> },
  { path: PathConstants.MAPS, element: <Maps /> },
  { path: InsightsPathConstants.MAIN_INSIGHTS, element: <MainInsights /> },
  { path: InsightsPathConstants.LABOR_LAW_INSIGHTS, element: <LaborLawInsights /> },
  { path: InsightsPathConstants.RENEWABLE_ENERGY_INSIGHTS, element: <RenewableEnergyInsights /> },
  { path: InsightsPathConstants.DATA_PRIVACY_INSIGHTS, element: <DataPrivacyInsights /> },
  { path: InsightsPathConstants.SUSTAINABLE_MOBILITY_INSIGHTS, element: <SustainableMobilityInsights /> },
  { path: InsightsPathConstants.GAFI_INSIGHTS, element: <GafiInsights /> },
  { path: InsightsPathConstants.SUSTAINABLE_FUELS_INSIGHTS, element: <SustainableFuelsInsights /> },
  { path: InsightsPathConstants.TAXING_CATALYST_INSIGHTS, element: <TaxingCatalystInsights /> },
  { path: InsightsPathConstants.ENERGY_GLOBAL_DEMAND_INSIGHTS, element: <EnergyGlobalDemandInsights /> },
  { path: InsightsPathConstants.CAPITAL_RETENTION_INSIGHTS, element: <CapitalRetentionInsights /> },
];

export default routes;
