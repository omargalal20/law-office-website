import React from "react";
import PathConstants from "./PathConstants";

const Landing = React.lazy(() => import("../pages/Landing/landing"));
const Contact = React.lazy(() => import("../pages/Contact/contact"));
const About = React.lazy(() => import("../pages/About/about"));
const Dentons = React.lazy(() => import("../pages/Dentons/dentons"));
const Practice = React.lazy(() => import("../pages/PracticeArea/practiceArea"));
const Maps = React.lazy(() => import("../pages/maps"));
const MainInsights = React.lazy(() => import("../pages/Insights/mainInsights"));
const InsightsLaborLaw = React.lazy(() => import("../pages/Insights/LaborLaw/laborlaw"));
const InsightsRenewableEnergy = React.lazy(() => import("../pages/Insights/RenewableEnergy/renewableEnergy"));

const routes = [
  { path: PathConstants.LANDING, element: <Landing /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.DENTONS, element: <Dentons /> },
  { path: PathConstants.PRACTICE_AREAS, element: <Practice /> },
  { path: PathConstants.MAPS, element: <Maps /> },
  { path: PathConstants.MAIN_INSIGHTS, element: <MainInsights /> },
  { path: PathConstants.INSIGHTS_LABOR_LAW, element: <InsightsLaborLaw /> },
  { path: PathConstants.INSIGHTS_RENEWABLE_ENERGY, element: <InsightsRenewableEnergy /> },
];

export default routes;
