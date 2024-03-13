import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import CorporateGovernanceHero from "../../../assets/Images/PracticeArea/CorporateGovernance/CorporateGovernanceHero.jpeg"
import ArbitrationSupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import ArbitrationBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import ArbitrationDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const CorporateGovernance = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Strategies for Success",
            sectionHeaderText: "Mastering CorporateGovernance Dispute Resolution Pioneering Legal",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Heights",
            sectionHeaderText: "Our CorporateGovernance Dispute Victories Scale",
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
            sectionHeaderText: "The CorporateGovernance Industry From a",
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
        heroImage: CorporateGovernanceHero,
        heroPrimaryHeading: "CorporateGovernance",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "From regulatory compliance and environmental considerations to renewable CorporateGovernance projects and international CorporateGovernance transactions. Our deep understanding of the industry's legal,commercial, and technological aspects positions us to offer strategic advice and innovative solutions.",
    };

    const genericCorporateGovernanceImages = [
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
            practiceAreaImages={genericCorporateGovernanceImages}
            sectionHeaders={sectionHeaders}
            teamName={"CorporateGovernance"}
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
                Our CorporateGovernance practice focuses on the essentials to assist companies in navigating the intricate landscape of the CorporateGovernance sector. With a focus on ensuring compliance with CorporateGovernance regulations and fostering sustainable CorporateGovernance practices, our team at Afifi Law Office offers practical guidance and strategic solutions suited to the diverse requirements of our clients.

                We specialize in various aspects of CorporateGovernance law, including regulatory compliance, project development, transactions, and dispute resolution. Our approach prioritizes proactive risk management and effective resolution of CorporateGovernance-related issues to safeguard our clients' interests and promote responsible CorporateGovernance development.

                From advising on renewable CorporateGovernance projects to negotiating CorporateGovernance contracts and resolving disputes, we collaborate closely with clients to address their CorporateGovernance law concerns comprehensively.
            </p>
        </PracticeArea>
    );
}

export default CorporateGovernance