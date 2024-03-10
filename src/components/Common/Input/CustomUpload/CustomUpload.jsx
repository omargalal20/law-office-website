import { Button, message, Upload, Typography } from 'antd';
import CustomUploadArrow from "../../../../assets/Images/Misc/Upload-Input-Arrow.svg"

import Stack from "@mui/material/Stack"

const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};

const CustomUpload = ({ title }) => {
    return (
        <>
            <Typography.Title
                style={{
                    fontSize: "25px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    marginTop: "20px",
                }}
            >
                {title}
            </Typography.Title>

            <Stack direction={"row"} spacing={3} alignItems={"center"}>
                <Upload {...props}>
                    <Button style={{ display: "flex", alignItems: "center" }}>
                        <Typography.Text>
                            Upload Files
                        </Typography.Text>
                        <img
                            src={CustomUploadArrow}
                            alt="icon"
                            style={{ marginLeft: "10px" }}
                        />
                    </Button>
                </Upload >
                <Typography.Text style={{ color: "#0000008C" }}>
                    Resume /  Cover Letter/ Additional Documents/ ETC....
                </Typography.Text>
            </Stack>
        </>
    )
}

export default CustomUpload