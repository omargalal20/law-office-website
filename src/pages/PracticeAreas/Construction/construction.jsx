import practiceAreaConstruction from "../../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-hero-image.jpeg"
import constructionTrendsSmartConstruction from '../../../assets/Images/Insights/insights-smart-construction.jpeg'
import constructionTrendsAugmentedReality from '../../../assets/Images/Insights/insights-augmented-reality.jpeg'
import threeDModelingImage from "../../../assets/Images/PracticeArea/Construction/construction3d.jpeg"
import automationImage from "../../../assets/Images/PracticeArea/Construction/constructionAutomation.jpeg"
import resilientImage from "../../../assets/Images/PracticeArea/Construction/constructionResilient.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const Construction = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Construction Industry",
            sectionHeaderText: "Building Legal Foundations Expert Law Services for the",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Heights",
            sectionHeaderText: "Our Construction Victories Build",
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
            sectionHeaderText: "The Construction Industry From a",
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
        heroImage: practiceAreaConstruction,
        heroPrimaryHeading: "Construction",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Expert guidance to client on a global scale, advising on the intricacies of banking and finance matters",
    };

    const ConstructionImages = [
        {
            img: constructionTrendsSmartConstruction,
            title: 'Smart Construction',
            textLines: ["Construction", "Smart Construction", "Technologies", "31 January, 2024"]
        },
        {
            img: constructionTrendsAugmentedReality,
            title: 'Augmented Reality',
            textLines: ["Construction", "Augmented Reality in", "Construction", "31 January, 2024"]
        },
    ];

    const genericConstructionImages = [
        {
            img: threeDModelingImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Construction",
            textLines: [
                "Construction",
                "3D Printing in Construction",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: automationImage,
            height: "318px",
            title: "Construction",
            textLines: [
                "Construction",
                "Construction Automation",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: resilientImage,
            height: "318px",
            title: "Construction",
            textLines: [
                "Construction",
                "Resilient Building Materials",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={ConstructionImages}
            practiceAreaImages={genericConstructionImages}
            sectionHeaders={sectionHeaders}
            teamName={"Construction"}
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
                Our construction team specializes in providing comprehensive legal services tailored to the intricate needs of clients involved in construction projects. As a cornerstone of our practice, we offer a wealth of experience and expertise in navigating the complexities inherent in construction law.

                Our team of seasoned attorneys possesses a deep understanding of the multifaceted legal landscape surrounding construction endeavors. From contract negotiation and drafting to dispute resolution and litigation, we adeptly guide our clients through every stage of the construction process.

                At Afifi Law Office, we recognize the importance of fostering strong client relationships built on trust, communication, and collaboration. We work closely with contractors, subcontractors, developers, architects, engineers, and other stakeholders to ensure that their interests are safeguarded, and their objectives are achieved.

                Whether addressing issues related to project delays, defective workmanship, payment disputes, or regulatory compliance, our construction department is committed to providing strategic legal counsel tailored to each client's unique circumstances.
            </p>
        </PracticeArea>
    );
}

export default Construction