import React from "react";
import TextCard from "../../components/Common/TextCard/TextCard";
import HoverableImageWith from "../../components/Common/HoverableImage/hvImgwith";

import RelatedImagesSection from "../../components/Common/Section/relatedImagesSection";

import img1 from "../../assets/Images/Team/Rectangle 20 (1).png";
import img2 from "../../assets/Images/Team/Group 58 (1).png";
import img3 from "../../assets/Images/Team/Group 59 (1).png";

import img4 from "../../assets/Images/Team/Group 87 (3).png";
import img5 from "../../assets/Images/Team/Group 88 (2).png";

import hero from "../../assets/Images/Team/hero.png";
import habil from "../../assets/Images/Team/habil.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import HeroTeam from "../../components/Common/Hero/heroTeam";

const Habil = () => {
  const genericHabilImages = [
    {
      img: img1,
      height: "692px",
      rows: 2,
      cols: 2,
      title: "Competition & Anti-trust ",
      textLines: [
        "Competition & Anti-trust ",
        "Antitrust Challenges Post-Pandemic Era",
        "",
        "31 January, 2024",
      ],
    },
    {
      img: img2,
      height: "318px",
      title: "Competition & Anti-trust ",
      textLines: [
        "Competition & Anti-trust ",
        "E-commerce Competition",
        "31 January, 2024",
      ],
      cols: 2,
    },
    {
      img: img3,
      height: "318px",
      title: "Competition & Anti-trust ",
      textLines: [
        "Competition & Anti-trust ",
        "Global Merger Control",
        "31 January, 2024",
      ],
      cols: 2,
    },
  ];

  const HabilImages = [
    {
      img: img4,
      title: "Employment",
      textLines: ["Employment", "Hybrid Work Models", "", "31 January, 2024"],
    },
    {
      img: img5,
      title: "Employment",
      textLines: [
        "Employment",
        "Flexible Benefits Packages",
        "",
        "31 January, 2024",
      ],
    },
  ];

  const teamName = "Habil Abu El-Kheir";
  const teamPosition = "Managing Associate";
  const teamInfo =
    "Cairo, Egypt / Email: habil.abuelkhair@afifioffice.com / T: +20 2 2735 4010 Ext. 134";
  const qualif =
    "LLB - Faculty of Law, Alexandria University, 1985 Admitted before the Court of Cassation";
  const lang = "Arabic";
  const about =
    "Habil is a Managing Associate joined Afifi in 1989. He is specialized in criminal law litigation subject to the Penalties and Criminal Procedures Law of Egypt, with more than 25 years of experience he handled a variety of complex litigation matters, including commercial and corporate litigation, arbitration and mediation, construction litigation, property claims. He is also experienced in dispute resolution in matters related to labor, civil and commercial laws. Due to his experience before the Notary Public of Egypt, he is an expert in the sale and mortgage contract registration. His broad experience in business matters and drafting skills make him particularly able to assist business owners and individuals with estate planning matters. Mr. Habil also has extensive experience with real estate financing, commercial foreclosures, representation of creditors in workouts and bankruptcy reorganization. Habil provides our clients with the utmost legal assistance within the Egyptian judicial system. ";

  return (
    <div>
      <HeroTeam
        backgroundImage={hero}
        teamImage={habil}
        teamName={teamName}
        teamPosition={teamPosition}
        teamInfo={teamInfo}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <TextCard qualif={qualif} lang={lang} about={about} />
        </div>
        <div>
          <p
            style={{
              fontSize: "50px",
              fontWeight: 400,
              fontFamily: "Montserrat",
            }}
          >
            Related{" "}
            <span
              style={{ fontSize: "50px", fontWeight: 100, fontStyle: "italic" }}
            >
              Practice Areas
            </span>
          </p>
          <RelatedImagesSection insightImages={HabilImages} />
        </div>
        <div style={{ paddingLeft: "125px", marginTop: "50px" }}>
          <p
            style={{
              fontSize: "50px",
              fontWeight: 400,
              fontFamily: "Montserrat",
            }}
          >
            Latest{" "}
            <span
              style={{ fontSize: "50px", fontWeight: 100, fontStyle: "italic" }}
            >
              News
            </span>
          </p>

          <ImageList
            cols={4}
            gap={32}
            sx={{ marginBottom: "20px", marginTop: "22px" }}
          >
            {genericHabilImages.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <HoverableImageWith
                  key={item.title}
                  src={item.img}
                  width={"560px"}
                  bigWidth={"712px"}
                  height={item.height}
                  text={item.textLines}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};
export default Habil;
