import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import JoinVenturesHero from "../../../assets/Images/PracticeArea/JoinVentures/JoinVenturesHero.jpeg"
import ArbitrationSupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import ArbitrationBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import ArbitrationDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const JoinVentures = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Strategies for Success",
            sectionHeaderText: "Mastering JoinVentures Dispute Resolution Pioneering Legal",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Heights",
            sectionHeaderText: "Our JoinVentures Dispute Victories Scale",
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
            sectionHeaderText: "The JoinVentures Industry From a",
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
        heroImage: JoinVenturesHero,
        heroPrimaryHeading: "JoinVentures",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "From regulatory compliance and environmental considerations to renewable JoinVentures projects and international JoinVentures transactions. Our deep understanding of the industry's legal,commercial, and technological aspects positions us to offer strategic advice and innovative solutions.",
    };

    const genericJoinVenturesImages = [
        {
            img: ArbitrationSupplyChainImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Arbitration",
            textLines: [
                "Arbitration",
                "Global Supply Chain Resilience",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: ArbitrationBiImage,
            height: "318px",
            title: "Arbitration",
            textLines: [
                "Arbitration",
                "BI Analytics",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: ArbitrationDigitalTransformationImage,
            height: "318px",
            title: "Arbitration",
            textLines: [
                "Arbitration",
                "Digital Transformation",
                "31 January, 2024",
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={practiceAreaImages}
            practiceAreaImages={genericJoinVenturesImages}
            sectionHeaders={sectionHeaders}
            teamName={"JoinVentures"}
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
                Our JoinVentures practice focuses on the essentials to assist companies in navigating the intricate landscape of the JoinVentures sector. With a focus on ensuring compliance with JoinVentures regulations and fostering sustainable JoinVentures practices, our team at Afifi Law Office offers practical guidance and strategic solutions suited to the diverse requirements of our clients.

                We specialize in various aspects of JoinVentures law, including regulatory compliance, project development, transactions, and dispute resolution. Our approach prioritizes proactive risk management and effective resolution of JoinVentures-related issues to safeguard our clients' interests and promote responsible JoinVentures development.

                From advising on renewable JoinVentures projects to negotiating JoinVentures contracts and resolving disputes, we collaborate closely with clients to address their JoinVentures law concerns comprehensively.
            </p>
        </PracticeArea>
    );
}

export default JoinVentures