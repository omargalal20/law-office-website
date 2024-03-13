import { useState, useEffect } from "react";

import { shuffleArray } from "../../../utils/ShuffleArray";

import { PracticeAreaImages } from "../Images/PracticeAreaImages"

import practiceAreaTechnology from "../../../assets/Images/PracticeArea/Technology/technology-hero-image.jpeg"
import autonomousImage from "../../../assets/Images/PracticeArea/Technology/technology-autonomous.jpeg"
import quantumComputing from "../../../assets/Images/PracticeArea/Technology/technology-quantum-computing.jpeg"
import arImage from "../../../assets/Images/PracticeArea/Technology/technology-ar.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const Technology = () => {
    const [practiceAreaImages, setPracticeAreaImages] = useState([]);

    const numberOfPracticeAreaImages = 2

    useEffect(() => {
        const suffledArray = shuffleArray(PracticeAreaImages);
        setPracticeAreaImages(suffledArray.slice(0, numberOfPracticeAreaImages));
    }, []);

    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Innovate Today",
            sectionHeaderText: "Empowering Your Future with Cutting-Edge Technology",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "Technology",
            sectionHeaderText: "Our Innovations Ascend Beyond in",
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
            sectionHeaderText: "The Technology Industry From a",
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
        heroImage: practiceAreaTechnology,
        heroPrimaryHeading: "Technology",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Support and guidance throughout the digital transformation process are paramount as organizations across various industry sectors increasingly embrace and enhance IT systems",
    };

    const genericTechnologyImages = [
        {
            img: autonomousImage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Technology",
            textLines: [
                "Technology",
                "Autonomous Vehicle Technology",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: quantumComputing,
            height: "318px",
            title: "Technology",
            textLines: [
                "Technology",
                "Quantum Computing",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: arImage,
            height: "318px",
            title: "Technology",
            textLines: [
                "Technology",
                "AR and VR Expansion",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={practiceAreaImages}
            practiceAreaImages={genericTechnologyImages}
            sectionHeaders={sectionHeaders}
            teamName={"Technology"}
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
                At the realm of the technology practice, we are dedicated to providing comprehensive legal services tailored to meet the diverse needs of clients in the technology sector. Our expertise spans various areas including intellectual property, data privacy and cybersecurity, technology transactions, regulatory compliance and litigation.

                Working closely with clients, our experienced attorneys develop customized strategies aligned with their objectives. Whether it involves navigating complex technology transactions, protecting intellectual property rights, ensuring compliance with data privacy regulations, or resolving disputes, we offer practical advice and innovative solutions to empower clients in the fast-paced technology industry.
                From drafting technology agreements to advising on regulatory matters and representing clients in technology-related disputes, Afifi Law Office is at the forefront of delivering exceptional legal representation.
            </p>
        </PracticeArea>
    );
}

export default Technology