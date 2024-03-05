import practiceAreaRenewableEnergy from "../../../assets/Images/PracticeArea/RenewableEnergy/RenewableEnergyHeroImage.png"
import insightsMaritime from '../../../assets/Images/Insights/sustainable-mobility-maritime.jpeg'
import insightsInfrastructure from '../../../assets/Images/Insights/sustainable-mobility-infrastructure.jpeg'
import railImage from "../../../assets/Images/PracticeArea/RenewableEnergy/RenewableEnergy-rail.jpeg"
import electricVehicleImage from "../../../assets/Images/PracticeArea/RenewableEnergy/RenewableEnergy-electric-vehicle.jpeg"
import publicRenewableEnergyImage from "../../../assets/Images/PracticeArea/RenewableEnergy/RenewableEnergy-public transport.jpeg"

import PracticeArea from "../../../components/Common/PracticeArea/practiceArea";

const RenewableEnergy = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Navigate with Us",
            sectionHeaderText: "Steering Legal Excellence in RenewableEnergy",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Horizon",
            sectionHeaderText: "Our RenewableEnergy Triumphs Reachs",
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
            sectionHeaderText: "The RenewableEnergy Industry From a",
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
        heroImage: practiceAreaRenewableEnergy,
        heroPrimaryHeading: "RenewableEnergy",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Governments across the globe are recognizing the vital role of efficient infrastructure in economic growth and global trade, fueling massive investments booming the industry.",
    };

    const RenewableEnergyImages = [
        {
            img: insightsMaritime,
            title: 'Maritime',
            textLines: ["RenewableEnergy", "Maritime RenewableEnergy", "Advances", "31 January, 2024"]
        },
        {
            img: insightsInfrastructure,
            title: 'Infrastructure',
            textLines: ["RenewableEnergy", "RenewableEnergy", "Infrastructure Renewal", "31 January, 2024"]
        },
    ];

    const genericRenewableEnergyImages = [
        {
            img: railImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "RenewableEnergy",
            textLines: [
                "RenewableEnergy",
                "High-Speed Rail Developmentsn",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: electricVehicleImage,
            height: "318px",
            title: "RenewableEnergy",
            textLines: [
                "RenewableEnergy",
                "Electric Vehicle Expansion",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: publicRenewableEnergyImage,
            height: "318px",
            title: "RenewableEnergy",
            textLines: [
                "RenewableEnergy",
                "Upgrading Public Transport",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={RenewableEnergyImages}
            practiceAreaImages={genericRenewableEnergyImages}
            sectionHeaders={sectionHeaders}
            teamName={"RenewableEnergy"}
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
                The firm’s RenewableEnergy team of Afifi specializes in providing legal guidance and representation in matters pertaining to RenewableEnergy law. With a focus on practical solutions and industry-specific expertise, our team of attorneys assists clients in navigating the complex regulatory and operational challenges inherent in the RenewableEnergy sector.

                Our attorneys have a deep understanding of the laws and regulations governing various modes of RenewableEnergy, including road, rail, air, and maritime. We offer comprehensive legal services tailored to meet the unique needs of RenewableEnergy companies, logistics providers, carriers, shippers, and other stakeholders.

                From regulatory compliance and licensing to contract negotiation and dispute resolution, our RenewableEnergy department offers a wide range of services designed to help clients achieve their business objectives while minimizing legal risks.
                Whether addressing issues related to cargo claims, freight contracts, insurance coverage, or RenewableEnergy safety regulations, our attorneys work diligently to provide strategic advice and practical solutions that align with our clients' goals.
            </p>
        </PracticeArea>
    );
}

export default RenewableEnergy