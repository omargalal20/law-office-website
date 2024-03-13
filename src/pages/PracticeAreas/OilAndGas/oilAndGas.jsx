import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import practiceAreaOilAndGas from "../../../assets/Images/PracticeArea/OilAndGas/oil-gas-hero-image.jpeg"
import energyDecarbonizationImage from "../../../assets/Images/PracticeArea/OilAndGas/oil-gas-energy-decarbonization.jpeg"
import geoPoliticsImage from "../../../assets/Images/PracticeArea/OilAndGas/oil-gas-energy-decarbonization.jpeg"
import oilPricingImage from "../../../assets/Images/PracticeArea/OilAndGas/oil-gas-pricing.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const OilAndGas = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Transaction Complexities",
            sectionHeaderText: "Steering You Through Energy",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "Oil and Gas",
            sectionHeaderText: "Our Achievements Soar in",
            sectionStyle: {
                width: "430px",
                fontSize: "60px",
                fontFamily: "Montserrat",
                fontWeight: 300,
                marginTop: "52px",
            }
        },
        thirdSectionHeader: {
            sectionHeaderTitle: "Legal View",
            sectionHeaderText: "The Oil & Gas Industry From a",
            sectionStyle: {
                width: "629px",
                fontSize: "60px",
                fontFamily: "Montserrat",
                fontWeight: 300,
                marginTop: "52px",
            }
        }
    };

    const heroDetails = {
        heroImage: practiceAreaOilAndGas,
        heroPrimaryHeading: "Oil & Gas",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "The global oil and gas landscape demands more than mere legal acumen; it necessitates comprehensive expertise coupled with a knowledge-based approach at the heart of the industry",
    };

    const genericOilAndGasImages = [
        {
            img: energyDecarbonizationImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Oil & Gas",
            textLines: [
                "Oil & Gas",
                "Energy Transition and Decarbonization",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: geoPoliticsImage,
            height: "318px",
            title: "Oil & Gas",
            textLines: [
                "Oil & Gas",
                "Geopolitics and Oil Supply",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: oilPricingImage,
            height: "318px",
            title: "Oil & Gas",
            textLines: [
                "Oil & Gas",
                "Oil Price Volatility",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={practiceAreaImages}
            practiceAreaImages={genericOilAndGasImages}
            sectionHeaders={sectionHeaders}
            teamName={"Oil & Gas"}
        >
            <p
                style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    width: "1166px",
                    fontFamily: "Montserrat",
                    marginTop: "52px",
                }}
            >
                The firm's oil & gas department at Afifi Law Office focuses on providing comprehensive legal services tailored to the dynamic and complex energy sector. Our team of experienced attorneys offers practical solutions and strategic guidance to clients involved in all aspects of the oil and gas industry.
                With a deep understanding of energy law, regulatory frameworks, and industry best practices, our team assists clients in navigating the unique challenges and opportunities presented by the oil and gas sector. From exploration and production to transportation, refining, and distribution, we provide legal counsel across the entire value chain.
                Our services encompass a wide range of areas, including contract negotiation and drafting, regulatory compliance, land use and leasing agreements, environmental permitting, and dispute resolution. We work closely with our clients to identify and mitigate legal risks while maximizing opportunities for growth and profitability.
                At Afifi Law Office, we recognize the importance of staying abreast of developments in the rapidly evolving energy landscape. Our attorneys remain at the forefront of industry trends and regulatory changes to ensure that our clients receive informed and effective legal representation.
            </p>
        </PracticeArea>
    );
}

export default OilAndGas