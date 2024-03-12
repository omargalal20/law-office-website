import HoverableImageWith from "../HoverableImage/hvImgwith"

import Stack from "@mui/material/Stack"

const TripleImageGrid = ({ images, width = "518px", bigWidth = "712px" }) => {
    const [firstImage, secondImage, thirdImage] = images

    return (
        <Stack direction={"row"} spacing={4} sx={{ marginBottom: "20px" }}>
            <HoverableImageWith
                key={"Technology"}
                src={firstImage.img}
                width={"100%"}
                height={"692px"}
                text={firstImage.textLines}
            />

            <Stack spacing={4}>
                <HoverableImageWith
                    key={"Oil & Gas"}
                    src={secondImage.img}
                    width={"100%"}
                    height={"318px"}
                    text={secondImage.textLines}
                />

                <HoverableImageWith
                    key={"Renewable Energy"}
                    src={thirdImage.img}
                    width={"100%"}
                    height={"318px"}
                    text={thirdImage.textLines}
                />
            </Stack>
        </Stack>
    )
}

export default TripleImageGrid