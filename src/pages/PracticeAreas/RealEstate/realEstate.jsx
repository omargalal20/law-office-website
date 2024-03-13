import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import practiceAreaRealEstate from "../../../assets/Images/PracticeArea/RealEstate/real-estate-hero-image.jpeg"
import remoteWorkImage from "../../../assets/Images/PracticeArea/RealEstate/real-estate-remote-work.jpeg"
import technologyImage from "../../../assets/Images/PracticeArea/RealEstate/real-estate-technology.jpeg"
import smartHomesImage from "../../../assets/Images/PracticeArea/RealEstate/real-estate-smart-homes.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const RealEstate = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Securing Your Future",
            sectionHeaderText: "Legal Expertise,",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "Real Estate",
            sectionHeaderText: "Our Triumphs Reach New Heights in",
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
            sectionHeaderText: "The Real Estate Industry From a",
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
        heroImage: practiceAreaRealEstate,
        heroPrimaryHeading: "Real Estate",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "The global oil and gas landscape demands more than mere legal acumen; it necessitates comprehensive expertise coupled with a knowledge-based approach at the heart of the industry",
    };

    const genericRealEstateImages = [
        {
            img: remoteWorkImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Real Estate",
            textLines: [
                "Real Estate",
                "Remote Work's Effect on Home Buying",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: technologyImage,
            height: "318px",
            title: "Real Estate",
            textLines: [
                "Real Estate",
                "Technology in Real Estate",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: smartHomesImage,
            height: "318px",
            title: "Real Estate",
            textLines: [
                "Real Estate",
                "Rise of Smart Homes",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={practiceAreaImages}
            practiceAreaImages={genericRealEstateImages}
            sectionHeaders={sectionHeaders}
            teamName={"Real Estate"}
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
                At the core of real estate practice, Afifi is committed to providing comprehensive legal services crafted to meet the diverse needs of clients in the real estate industry. Our expertise spans various areas including property transactions, land use and zoning, real estate finance, construction law, and property management.

                In close collaboration with clients, our experienced attorneys develop customized strategies aligned with their objectives. Whether it involves navigating intricate transactions, resolving disputes, or ensuring regulatory compliance, we offer practical advice and innovative solutions to empower clients in the dynamic real estate market.

                From facilitating property acquisitions to guiding development projects and managing leasing agreements, we are dedicated to delivering exceptional legal representation and personalized services.
            </p>
        </PracticeArea>
    );
}

export default RealEstate