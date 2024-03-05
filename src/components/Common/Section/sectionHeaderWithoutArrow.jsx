const SectionHeaderWithoutArrow = ({ sectionInfo }) => {
    const { sectionHeaderTitle, sectionHeaderText, sectionStyle } = sectionInfo
    
    return (
        <p
            style={sectionStyle}
        >
            {sectionHeaderText}{" "}
            <span style={{ fontWeight: 100, fontStyle: "italic" }}>{sectionHeaderTitle}</span>
        </p>
    )
}

export default SectionHeaderWithoutArrow