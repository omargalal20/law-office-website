import EnergyHero from "../../../assets/Images/PracticeArea/Energy/energyHero.jpeg"
import EnergyWorkImage from "../../../assets/Images/Team/corporateWork.jpeg"
import EnergyRegulatoryImage from "../../../assets/Images/Team/corporateRegulatory.jpeg"
import EnergySupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import EnergyBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import EnergyDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Common/PracticeArea/practiceArea";

const Energy = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Strategies for Success",
            sectionHeaderText: "Mastering Energy Dispute Resolution Pioneering Legal",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Heights",
            sectionHeaderText: "Our Energy Dispute Victories Scale",
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
            sectionHeaderText: "The Energy Industry From a",
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
        heroImage: EnergyHero,
        heroPrimaryHeading: "Energy",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "From regulatory compliance and environmental considerations to renewable energy projects and international energy transactions. Our deep understanding of the industry's legal,commercial, and technological aspects positions us to offer strategic advice and innovative solutions.",
    };

    const EnergyImages = [
        {
            img: EnergyWorkImage,
            title: "Energy",
            textLines: [
                "Energy",
                "Remote and Hybrid Work",
                "Models",
                "31 January, 2024"
            ],
        },
        {
            img: EnergyRegulatoryImage,
            title: "Energy",
            textLines: [
                "Energy",
                "Regulatory Compliance",
                "and Changes",
                "31 January, 2024",
            ],
        },
    ]

    const genericEnergyImages = [
        {
            img: EnergySupplyChainImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Energy",
            textLines: [
                "Energy",
                "Global Supply Chain Resilience",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: EnergyBiImage,
            height: "318px",
            title: "Energy",
            textLines: [
                "Energy",
                "BI Analytics",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: EnergyDigitalTransformationImage,
            height: "318px",
            title: "Energy",
            textLines: [
                "Energy",
                "Digital Transformation",
                "31 January, 2024",
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={EnergyImages}
            practiceAreaImages={genericEnergyImages}
            sectionHeaders={sectionHeaders}
            teamName={"Energy"}
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
                Our energy practice focuses on the essentials to assist companies in navigating the intricate landscape of the energy sector. With a focus on ensuring compliance with energy regulations and fostering sustainable energy practices, our team at Afifi Law Office offers practical guidance and strategic solutions suited to the diverse requirements of our clients.

                We specialize in various aspects of energy law, including regulatory compliance, project development, transactions, and dispute resolution. Our approach prioritizes proactive risk management and effective resolution of energy-related issues to safeguard our clients' interests and promote responsible energy development.

                From advising on renewable energy projects to negotiating energy contracts and resolving disputes, we collaborate closely with clients to address their energy law concerns comprehensively.
            </p>
        </PracticeArea>
    );
}

export default Energy