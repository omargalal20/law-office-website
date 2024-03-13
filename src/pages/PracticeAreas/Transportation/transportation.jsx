import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import practiceAreaTransportation from "../../../assets/Images/PracticeArea/Transportation/transportationHeroImage.png"
import railImage from "../../../assets/Images/PracticeArea/Transportation/transportation-rail.jpeg"
import electricVehicleImage from "../../../assets/Images/PracticeArea/Transportation/transportation-electric-vehicle.jpeg"
import publicTransportationImage from "../../../assets/Images/PracticeArea/Transportation/transportation-public transport.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const Transportation = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Navigate with Us",
            sectionHeaderText: "Steering Legal Excellence in Transportation",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Horizon",
            sectionHeaderText: "Our Transportation Triumphs Reachs",
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
            sectionHeaderText: "The Transportation Industry From a",
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
        heroImage: practiceAreaTransportation,
        heroPrimaryHeading: "Transportation",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Governments across the globe are recognizing the vital role of efficient infrastructure in economic growth and global trade, fueling massive investments booming the industry.",
    };

    const genericTransportationImages = [
        {
            img: railImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Transportation",
            textLines: [
                "Transportation",
                "High-Speed Rail Developmentsn",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: electricVehicleImage,
            height: "318px",
            title: "Transportation",
            textLines: [
                "Transportation",
                "Electric Vehicle Expansion",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: publicTransportationImage,
            height: "318px",
            title: "Transportation",
            textLines: [
                "Transportation",
                "Upgrading Public Transport",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={practiceAreaImages}
            practiceAreaImages={genericTransportationImages}
            sectionHeaders={sectionHeaders}
            teamName={"Transportation"}
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
                The firm’s transportation team of Afifi specializes in providing legal guidance and representation in matters pertaining to transportation law. With a focus on practical solutions and industry-specific expertise, our team of attorneys assists clients in navigating the complex regulatory and operational challenges inherent in the transportation sector.

                Our attorneys have a deep understanding of the laws and regulations governing various modes of transportation, including road, rail, air, and maritime. We offer comprehensive legal services tailored to meet the unique needs of transportation companies, logistics providers, carriers, shippers, and other stakeholders.

                From regulatory compliance and licensing to contract negotiation and dispute resolution, our transportation department offers a wide range of services designed to help clients achieve their business objectives while minimizing legal risks.
                Whether addressing issues related to cargo claims, freight contracts, insurance coverage, or transportation safety regulations, our attorneys work diligently to provide strategic advice and practical solutions that align with our clients' goals.
            </p>
        </PracticeArea>
    );
}

export default Transportation