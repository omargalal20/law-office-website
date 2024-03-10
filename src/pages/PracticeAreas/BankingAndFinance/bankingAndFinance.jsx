import practiceAreaBankingAndFinance from "../../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-hero-image.jpeg"
import mainInsightsLawLaborImage from '../../../assets/Images/Insights/main-insights-law-labor.jpeg'
import mainInsightsFinanceImage from '../../../assets/Images/Insights/insights-finance.jpeg'
import machineLearningimage from "../../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-machine-learning.jpeg"
import centralBankImage from "../../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-central-bank.jpeg"
import blockchainImage from "../../../assets/Images/PracticeArea/BankingAndFinance/banking-and-finance-blockchaing.jpeg"

import PracticeArea from "../../../components/Layout/PracticeArea/practiceArea";

const BankingAndFinance = () => {
    const sectionHeaders = {
        firstSectionHeader: {
            sectionHeaderTitle: "Financial Domains",
            sectionHeaderText: "Our Advisory Scope Encompasses An Array Of",
            sectionStyle: {
                width: "969px",
                fontSize: "50px",
                fontFamily: "Montserrat",
                fontWeight: 300,
            }
        },
        secondSectionHeader: {
            sectionHeaderTitle: "New Peaks",
            sectionHeaderText: "Our Financial Achievements Scale",
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
            sectionHeaderText: "The Banking & Finance Industry From a",
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
        heroImage: practiceAreaBankingAndFinance,
        heroPrimaryHeading: "Banking & Finance",
        heroSecondaryHeading: "Expertise",
        heroSubHeading:
            "Expert guidance to client on a global scale, advising on the intricacies of banking and finance matters",
    };

    const BankingAndFinanceImages = [
        {
            img: mainInsightsLawLaborImage,
            title: 'Banking & Finance',
            textLines: ["Banking & Finance", "Digital", "Banking Transformation", "31 January, 2024"]
        },
        {
            img: mainInsightsFinanceImage,
            title: 'Green Finance',
            textLines: ["Banking & Finance", "Sustainable", "and Green Finance", "31 January, 2024"]
        },
    ];

    const genericBankingAndFinanceImages = [
        {
            img: machineLearningimage,
            height: "692px",
            rows: 2,
            cols: 2,
            title: "Banking & Finance",
            textLines: [
                "Banking & Finance",
                "AI and Machine Learning in Finance",
                "",
                "31 January, 2024",
            ],
        },
        {
            img: centralBankImage,
            height: "318px",
            title: "Banking & Finance",
            textLines: [
                "Banking & Finance",
                "Blockchain in Banking",
                "31 January, 2024",
            ],
            cols: 2,
        },
        {
            img: blockchainImage,
            height: "318px",
            title: "Banking & Finance",
            textLines: [
                "Banking & Finance",
                "Blockchain in Banking",
                "31 January, 2024"
            ],
            cols: 2,
        },
    ];

    return (
        <PracticeArea
            heroDetails={heroDetails}
            relatedImages={BankingAndFinanceImages}
            practiceAreaImages={genericBankingAndFinanceImages}
            sectionHeaders={sectionHeaders}
            teamName={"Banking & Finance"}
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
                Our banking and finance exceptional team delivers essential legal services to clients within the financial sector. Specializing in regulatory compliance, transaction structuring, risk management, and dispute resolution, our team provides practical guidance and strategic solutions tailored to meet the industry's demands.

                Covering a wide spectrum of areas crucial to banking and finance, we navigate complex financial regulations, ensuring adherence to legal requirements and mitigating inherent risks. Our focus extends to advising on loan agreements, facilitating mergers and acquisitions in the financial sector, and representing clients in regulatory investigations.

                With a deep understanding of the industry's intricacies, Afifi Law Office is committed to providing clients with high-quality legal representation and actionable advice to navigate the challenges and opportunities in the dynamic banking and finance landscape.
            </p>
        </PracticeArea>
    );
}

export default BankingAndFinance