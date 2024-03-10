import corporateHero from "../../../assets/Images/PracticeArea/Corporate/corporatehero.jpeg"
import corporateWorkImage from "../../../assets/Images/Team/corporateWork.jpeg"
import corporateRegulatoryImage from "../../../assets/Images/Team/corporateRegulatory.jpeg"
import corporateSupplyChainImage from "../../../assets/Images/Team/corporateSupplyChain.jpeg"
import corporateBiImage from "../../../assets/Images/Team/corporateBi.jpeg"
import corporateDigitalTransformationImage from "../../../assets/Images/Team/corporateDigitalTransformation.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const Corporate = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Business Journey",
            sectionHeaderText: "Elevating Corporate Prosperity Legal Excellence for Your",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Elevations",
            sectionHeaderText: "Our Corporate Triumphs Ascend to",
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
            sectionHeaderText: "The Corporate Industry From a",
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
        heroImage: corporateHero,
        heroPrimaryHeading: "Corporate",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Delivering comprehensive and intricate advise on a wide spectrum of corporate affairs to clients entrenched in pivotal sectors within established and burgeoning markets",
    };

    const corporateImages = [
        {
            img: corporateWorkImage,
            title: "Corporate",
            textLines: [
                "Corporate",
                "Remote and Hybrid Work",
                "Models",
                "31 January, 2024"
            ],
        },
        {
            img: corporateRegulatoryImage,
            title: "Corporate",
            textLines: [
                "Corporate",
                "Regulatory Compliance",
                "and Changes",
                "31 January, 2024",
            ],
        },
    ]

    const genericCorporateImages = [
        {
            img: corporateSupplyChainImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Corporate",
            textLines: [
                "Corporate",
                "Global Supply Chain Resilience",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: corporateBiImage,
            height: "318px",
            title: "Corporate",
            textLines: [
                "Corporate",
                "BI Analytics",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: corporateDigitalTransformationImage,
            height: "318px",
            title: "Corporate",
            textLines: [
                "Corporate",
                "Digital Transformation",
                "31 January, 2024",
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={corporateImages}
            practiceAreaImages={genericCorporateImages}
            sectionHeaders={sectionHeaders}
            teamName={"Corporate"}
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
                The firm’s corporate practice is dedicated to supporting businesses of all sizes and industries. We provide tailored legal solutions to address diverse needs, specializing in entity formation, corporate governance, merger sand acquisitions, joint ventures, and regulatory compliance.

                Our experienced attorneys collaborate closely with each client to develop strategies aligned with their corporate goals. Whether it's establishing legal entities, ensuring compliance with governance standards, or navigating complex transactions, we offer practical advice and innovative solutions to achieve business objectives.

                From startups to multinational corporations, we understand the unique challenges facing each client and are committed to delivering exceptional legal representation. At Afifi Law Office, we navigate the complexities of corporate law with confidence and clarity, helping businesses across industries thrive.
            </p>
        </PracticeArea>
    );
}

export default Corporate