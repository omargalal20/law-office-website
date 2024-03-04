import React from "react";
import Hero from "../../../components/Common/Hero";
import HeroPractice from "../../../components/Common/Hero/heroPractice";

import practiceAreaAviation from "../../../assets/Images/PracticeArea/Aviation/hero.svg";
import img1 from "../../../assets/Images/PracticeArea/Aviation/Group 87.svg";
import img2 from "../../../assets/Images/PracticeArea/Aviation/Group 88.png";

import img3 from "../../../assets/Images/PracticeArea/Aviation/Rectangle 20.png";
import img4 from "../../../assets/Images/PracticeArea/Aviation/Group 59.png";
import img5 from "../../../assets/Images/PracticeArea/Aviation/Group 58.png";

import RelatedImagesSection from "../../../components/Common/Section/relatedImagesSection";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import HoverableImage from "../../../components/Common/HoverableImage/hoverableImage";
import HoverableImageWith from "../../../components/Common/HoverableImage/hvImgwith";

const Aviation = () => {
  const heroDetails = {
    heroImage: practiceAreaAviation,
    heroPrimaryHeading: "Aviation",
    heroSecondaryHeading: "Expertise",
    heroSubHeading:
      "Operating seamlessly, Afifi Law Office aviation practice is highly regarded globally and recognized as the preeminent aviation law firm",
  };

  const AviationImages = [
    {
      img: img1,
      title: "Aviation",
      textLines: [
        "Aviation",
        "A New Acquisition Leading The Egyptian Market",
        "",
        "31 January, 2024",
      ],
    },
    {
      img: img2,
      title: "Aviation",
      textLines: [
        "Employment",
        "Logistics Changing the scene",
        "",
        "31 January, 2024",
      ],
    },
  ];

  const genericAviationImages = [
    {
      img: img3,
      height: "692px",
      rows: 2,
      cols: 2,
      title: "Aviation",
      textLines: [
        "Aviation",
        "Sustainable Aviation Fuels (SAF)",
        "",
        "31 January, 2024",
      ],
    },
    {
      img: img4,
      height: "318px",
      title: "Aviation",
      textLines: [
        "Aviation",
        "Electric and Hybrid Aircraft",
        "31 January, 2024",
      ],
      cols: 2,
    },
    {
      img: img5,
      height: "318px",
      title: "Aviation",
      textLines: ["Aviation", "Supersonic Travel Revival", "31 January, 2024"],
      cols: 2,
    },
  ];

  return (
    <>
      <HeroPractice
        backgroundImage={heroDetails.heroImage}
        primaryHeading={heroDetails.heroPrimaryHeading}
        secondaryHeading={heroDetails.heroSecondaryHeading}
        subHeading={heroDetails.heroSubHeading}
        color="black"
        subHeadingWidth={454}
      />
      <div style={{ marginTop: "31px", paddingLeft: "80px" }}>
        <p
          style={{
            fontSize: "50px",
            fontWeight: 300,
            width: "969px",
            fontFamily: "Montserrat",
          }}
        >
          Comprehensive Expertise Spanning The Entire{" "}
          <span
            style={{
              fontWeight: 100,
              fontStyle: "italic",
              fontFamily: "Montserrat",
            }}
          >
            Industry Sector
          </span>
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            width: "1166px",
            fontFamily: "Montserrat",
            marginTop: "52px",
          }}
        >
          The firm’s aviation department specializes in providing comprehensive
          legal services tailored to the unique needs of clients in the aviation
          industry. We offer expertise in regulatory compliance, aircraft
          financing and leasing, liability issues, corporate transactions,
          airline operations, aircraft transactions, insurance and risk
          management. Our team of experienced attorneys provides strategic
          counsel and practical solutions to navigate the complexities of the
          aviation sector. Ranging from airlines to aircraft manufacturers,
          lessors, financiers, or other stakeholders in aviation, we are
          dedicated to assisting them in achieving their business objectives
          while ensuring compliance with applicable laws and regulations. From
          advising on regulatory matters to negotiating financing agreements and
          resolving disputes ,Afifi Law Office is committed to delivering
          exceptional legal representation and personalized service to clients
          across the aviation industry. The firm is regularly contributing to
          the development of aviation law on a domestic scope as well as
          globally on an array of regulations.  
        </p>
        <p
          style={{
            width: "430px",
            fontSize: "60px",
            fontFamily: "Montserrat",
            fontWeight: 300,
            marginTop: "52px",
          }}
        >
          Our Successes Seen{" "}
          <span style={{ fontWeight: 100, fontStyle: "italic" }}>Higher</span>
        </p>
        <RelatedImagesSection insightImages={AviationImages} />
        <p
          style={{
            width: "629px",
            fontSize: "60px",
            fontFamily: "Montserrat",
            fontWeight: 300,
            marginTop: "52px",
          }}
        >
          The Aviation Industry From a{" "}
          <span style={{ fontWeight: 100, fontStyle: "italic" }}>
            Legal View
          </span>
        </p>

        <ImageList
          cols={4}
          gap={32}
          sx={{ marginBottom: "20px", marginTop: "22px" }}
        >
          {genericAviationImages.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <HoverableImageWith
                key={item.title}
                src={item.img}
                width={"518px"}
                bigWidth={"712px"}
                height={item.height}
                text={item.textLines}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};
export default Aviation;
