import EmploymentHero from "../../../assets/Images/PracticeArea/Employment/EmploymentHero.jpeg"
import ArbitrationWorkImage from "../../../assets/Images/Team/corporateWork.jpeg"
import ArbitrationRegulatoryImage from "../../../assets/Images/Team/corporateRegulatory.jpeg"
import ArbitrationSupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import ArbitrationBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import ArbitrationDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const Employment = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Strategies for Success",
            sectionHeaderText: "Mastering Employment Dispute Resolution Pioneering Legal",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Heights",
            sectionHeaderText: "Our Employment Dispute Victories Scale",
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
            sectionHeaderText: "The Employment Industry From a",
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
        heroImage: EmploymentHero,
        heroPrimaryHeading: "Employment",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "From regulatory compliance and environmental considerations to renewable Employment projects and international Employment transactions. Our deep understanding of the industry's legal,commercial, and technological aspects positions us to offer strategic advice and innovative solutions.",
    };

    const EmploymentImages = [
        {
            img: ArbitrationWorkImage,
            title: "Arbitration",
            textLines: [
                "Arbitration",
                "Remote and Hybrid Work",
                "Models",
                "31 January, 2024"
            ],
        },
        {
            img: ArbitrationRegulatoryImage,
            title: "Arbitration",
            textLines: [
                "Arbitration",
                "Regulatory Compliance",
                "and Changes",
                "31 January, 2024",
            ],
        },
    ]

    const genericEmploymentImages = [
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
            relatedImages={EmploymentImages}
            practiceAreaImages={genericEmploymentImages}
            sectionHeaders={sectionHeaders}
            teamName={"Employment"}
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
                Our Employment practice focuses on the essentials to assist companies in navigating the intricate landscape of the Employment sector. With a focus on ensuring compliance with Employment regulations and fostering sustainable Employment practices, our team at Afifi Law Office offers practical guidance and strategic solutions suited to the diverse requirements of our clients.

                We specialize in various aspects of Employment law, including regulatory compliance, project development, transactions, and dispute resolution. Our approach prioritizes proactive risk management and effective resolution of Employment-related issues to safeguard our clients' interests and promote responsible Employment development.

                From advising on renewable Employment projects to negotiating Employment contracts and resolving disputes, we collaborate closely with clients to address their Employment law concerns comprehensively.
            </p>
        </PracticeArea>
    );
}

export default Employment