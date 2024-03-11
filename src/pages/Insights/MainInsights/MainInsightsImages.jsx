import mainInsightsLaborLawImage from "../../../assets/Images/Insights/main-insights-law-labor.jpeg";
import mainInsightsCopImage from "../../../assets/Images/Insights/main-insights-cop.png";
import mainInsightsDataPrivacyImage from "../../../assets/Images/Insights/main-insights-data-privacy.jpeg";
import mainInsightsMergerControlImage from "../../../assets/Images/Insights/main-insights-merger-control.jpeg";
import mainInsightsGreenTransportationImage from "../../../assets/Images/Insights/main-insights-green-transportation.jpeg";
import mainInsightsTaxation from "../../../assets/Images/Insights/main-insights-taxing-catalyst.jpeg";
import mainInsightsRenewable from "../../../assets/Images/Insights/main-insights-renewable-windmill.jpeg";
import mainInsightsArbitration from "../../../assets/Images/Insights/main-insights-arbitration.jpeg";
import mainInsightsGafi from "../../../assets/Images/Insights/insights-gafi.jpeg";
import mainInsightsInternationalFinance from "../../../assets/Images/Insights/main-insights-international-finance.jpeg";
import mainInsightsEnergyGlobalDemand from "../../../assets/Images/Insights/insights-energy-global-demand.jpeg";
import mainInsightsHydrogen from "../../../assets/Images/Insights/main-insights-hydrogen-initiatives.jpeg";
import mainInsightsCapitalFunds from "../../../assets/Images/Insights/main-insights-capital-funds.jpeg"
import mainInsightsTransportationLogistics from "../../../assets/Images/Insights/main-insights-transportation.jpeg"
import mainInsightsArbitrationRules from "../../../assets/Images/Insights/main-insights-arbitration-rules.jpeg"
import mainInsightsAviation from "../../../assets/Images/Insights/main-insights-aviation.jpeg"
import mainInsightsConstruction from "../../../assets/Images/Insights/main-insights-construction.jpeg"
import mainInsightsRenewableEnergy from "../../../assets/Images/Insights/main-insights-renewable-energy.jpeg"

import InsightsPathConstants from "../../../routes/InsightsPathConstants";

import HoverableImage from "../../../components/Common/HoverableImage/hvImgwith";

export const practiceRelatedInsightsImages = [
    {
        title: "Labour Law",
        component: (
            <HoverableImage
                key={"Labour Law"}
                src={mainInsightsLaborLawImage}
                width={"100%"}
                height={"534px"}
                text={["Employment", "New Labour", "Law", "31 January, 2024"]}
                toPage={InsightsPathConstants.LABOR_LAW}
            />
        ),
    },
    {
        title: "Data Privacy",
        component: (
            <HoverableImage
                key={"Data Privacy"}
                src={mainInsightsDataPrivacyImage}
                width={"100%"}
                height={"321px"}
                text={["Banking & Finance", "Data Privacy", "31 January, 2024"]}
                toPage={InsightsPathConstants.DATA_PRIVACY}
            />
        ),
    },
    {
        title: "Merger Control",
        component: (
            <HoverableImage
                key={"Merger Control"}
                src={mainInsightsMergerControlImage}
                width={"100%"}
                height={"321px"}
                text={["Merger & Acquisition", "Merger Control", "31 January, 2024"]}
                toPage={InsightsPathConstants.MERGER_CONTROL}
            />
        ),
    },
    {
        title: "Renewable",
        component: (
            <HoverableImage
                key={"Renewable"}
                src={mainInsightsCopImage}
                bigWidth={"743px"}
                height={"692px"}
                text={["Renewable Energy", "COP27 and COP28", "31 January, 2024"]}
                toPage={InsightsPathConstants.RENEWABLE_ENERGY}
            />
        ),
    },
    {
        title: "Green Transportation",
        component: (
            <HoverableImage
                key={"Green Transportation"}
                src={mainInsightsGreenTransportationImage}
                height={"778px"}
                text={["Transportation", "Green Transportation", "31 January, 2024"]}
                toPage={InsightsPathConstants.RENEWABLE_ENERGY_FUTURE}
            />
        ),
    },
];

export const exploreMoreInsightsImages = [
    {
        title: "Green Transportation",
        component: (
            <HoverableImage
                key={"Taxation"}
                src={mainInsightsTaxation}
                width={"100%"}
                height={"696px"}
                text={["Renewable Energy", "Taxation and Investment Laws", "31 January, 2024"]}
                toPage={InsightsPathConstants.TAXING_CATALYST}
            />
        ),
    },
    {
        title: "Renewable Energy",
        component: (
            <HoverableImage
                key={"Taxation"}
                src={mainInsightsRenewable}
                width={"100%"}
                height={"692px"}
                text={[
                    "Renewable Energy",
                    "Renewable Energy Target",
                    "31 January, 2024",
                ]}
                toPage={InsightsPathConstants.RENEWABLE_ENERGY}
            />
        ),
    },
    {
        title: "Transportation",
        component: (
            <HoverableImage
                key={"Transportation"}
                src={mainInsightsTransportationLogistics}
                width={"100%"}
                height={"692px"}
                text={[
                    "Transportation",
                    "Transportation & Logistics Hub",
                    "31 January, 2024",
                ]}
                toPage={InsightsPathConstants.TRANSPORTATION_LOGISTICS}
            />
        ),
    },
    {
        title: "Construction",
        component: (
            <HoverableImage
                key={"Construction"}
                src={mainInsightsConstruction}
                width={"100%"}
                height={"692px"}
                text={[
                    "Construction",
                    "Construction Trends in Egypt",
                    "31 January, 2024",
                ]}
                toPage={InsightsPathConstants.CONSTRUCTION_TRENDS}
            />
        ),
    },
    {
        title: "Arbitration",
        component: (
            <HoverableImage
                key={"Arbitration"}
                src={mainInsightsArbitration}
                bigWidth={"767px"}
                height={"692px"}
                text={[
                    "Arbitration",
                    "Arbitration in the Middle East",
                    "31 January, 2024",
                ]}
                toPage={InsightsPathConstants.ARBITRATION_RESOLVING}
            />
        ),
    },
    //
    {
        title: "Banking & Finance",
        component: (
            <HoverableImage
                key={"Banking & Finance"}
                src={mainInsightsCapitalFunds}
                width={"100%"}
                height={"534px"}
                text={["Banking & Finance", "Capital Fund in Foreign", "Currency", "31 January, 2024"]}
                toPage={InsightsPathConstants.TAXING_CATALYST}
            />
        ),
    },
    {
        title: "Gafi",
        component: (
            <HoverableImage
                key={"Gafi"}
                src={mainInsightsGafi}
                width={"100%"}
                height={"321px"}
                text={["Banking & Finance", "Gafi", "31 January, 2024"]}
                toPage={InsightsPathConstants.GAFI}
            />
        ),
    },
    {
        title: "Banking & Finance",
        component: (
            <HoverableImage
                key={"International Finance"}
                src={mainInsightsInternationalFinance}
                width={"100%"}
                height={"321px"}
                text={["Banking & Finance", "International Finance", "31 January, 2024"]}
                toPage={InsightsPathConstants.INTERNATIONAL_FINANCE}
            />
        ),
    },
    {
        title: "Energy Global Demand",
        component: (
            <HoverableImage
                key={"Energy Global Demand"}
                src={mainInsightsEnergyGlobalDemand}
                width={"100%"}
                height={"534px"}
                text={["Energy", "Energy Global", "Demand", "31 January, 2024"]}
                toPage={InsightsPathConstants.ENERGY_GLOBAL_DEMAND}
            />
        ),
    },
    {
        title: "Arbitration",
        component: (
            <HoverableImage
                key={"Arbitration"}
                src={mainInsightsArbitrationRules}
                width={"534%"}
                height={"321px"}
                text={["Arbitration", "Global Arbitration", "31 January, 2024"]}
                toPage={InsightsPathConstants.ARBITRATION_RESOLVING}
            />
        ),
    },
    {
        title: "Aviation",
        component: (
            <HoverableImage
                key={"Aviation"}
                src={mainInsightsAviation}
                width={"100%"}
                height={"321px"}
                text={["Aviation", "Decarbonize Aviation", "31 January, 2024"]}
                toPage={InsightsPathConstants.SUSTAINABLE_MOBILITY}
            />
        ),
    },
    {
        title: "Renewable Energy",
        component: (
            <HoverableImage
                key={"Renewable Energy"}
                src={mainInsightsHydrogen}
                width={"100%"}
                height={"534px"}
                text={["Renewable Energy", "Green Hydrogen", "Initiatives", "31 January, 2024"]}
                toPage={InsightsPathConstants.HYDROGEN_INITIATIVES}
            />
        ),
    },
    {
        title: "Arbitration",
        component: (
            <HoverableImage
                key={"Arbitration"}
                src={mainInsightsArbitrationRules}
                width={"100%"}
                height={"321px"}
                text={["Arbitration", "New Arbitration Rules", "31 January, 2024"]}
                toPage={InsightsPathConstants.ARBITRATION_RESOLVING}
            />
        ),
    },
    {
        title: "Renewable Energy",
        component: (
            <HoverableImage
                key={"Renewable Energy"}
                src={mainInsightsRenewableEnergy}
                width={"100%"}
                height={"270px"}
                text={["Aviation", "6 Billion USD for Green Energy", "31 January, 2024"]}
                toPage={InsightsPathConstants.RENEWABLE_ENERGY}
            />
        ),
    },
];