import HoverableImageWith from "../../../components/Common/HoverableImage/hvImgwith";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const TripleImageGrid = ({ images, width = "518px", bigWidth = "712px" }) => {
    return (
        <ImageList
            cols={4}
            gap={32}
            sx={{ marginBottom: "20px", marginTop: "22px", width: "100%" }}
        >
            {images.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                >
                    <HoverableImageWith
                        key={item.title}
                        src={item.img}
                        width={width}
                        bigWidth={bigWidth}
                        height={item.height}
                        text={item.textLines}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default TripleImageGrid