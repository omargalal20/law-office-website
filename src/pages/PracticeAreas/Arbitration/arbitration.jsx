import ArbitrationHero from "../../../assets/Images/PracticeArea/Arbitration/arbitrationHero.jpeg"
import ArbitrationWorkImage from "../../../assets/Images/Team/corporateWork.jpeg"
import ArbitrationRegulatoryImage from "../../../assets/Images/Team/corporateRegulatory.jpeg"
import ArbitrationSupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import ArbitrationBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import ArbitrationDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Common/PracticeArea/practiceArea";

const Arbitration = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Experts in Law",
            sectionHeaderText: "Resolving Disputes with Precision: Your Arbitration",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Peaks",
            sectionHeaderText: "Our Arbitration Successes Reach",
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
            sectionHeaderText: "The Arbitration Industry From a",
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
        heroImage: ArbitrationHero,
        heroPrimaryHeading: "Arbitration",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Our highly regarded arbitration practice delivers a customized service, precisely tailored to meet the unique requirements of each disputes and representing a wide array of clientele, raging from corporations and investors to financial institutions, governments and state-owned entities.",
    };

    const arbitrationImages = [
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

    const genericArbitrationImages = [
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
            relatedImages={arbitrationImages}
            practiceAreaImages={genericArbitrationImages}
            sectionHeaders={sectionHeaders}
            teamName={"Arbitration"}
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
                Our highly regarded arbitration practice provides essential legal services to clients seeking alternative dispute resolution. With a focus one efficiency and effectiveness, our team specializes in guiding clients through the arbitration process, from initial negotiations to final resolution.

                We offer expertise in drafting arbitration agreements, representing clients in arbitration proceedings, and enforcing arbitral awards. Our approach emphasizes strategic planning and advocacy to achieve favorable outcomes for our clients.

                Whether it's resolving commercial disputes, international arbitration matters, or investor-state disputes, we provide practical guidance and tailored solutions to meet the unique needs of each case.
            </p>
        </PracticeArea>
    );
}

export default Arbitration