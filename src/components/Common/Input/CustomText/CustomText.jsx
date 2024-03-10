import { Input, Typography } from "antd";

const CustomText = ({ title, largeInput = false }) => {
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
            {
                largeInput ? (
                    <Input
                        style={{
                            borderColor: "#09283F",
                            width: "648px",
                            height: "131px",
                            border: "2px solid",
                        }}
                    />
                ) : (
                    <Input
                        style={{
                            borderColor: "#09283F",
                            width: "648px",
                            height: "64px",
                            border: "2px solid",
                        }}
                    />
                )
            }
        </>
    )
}

export default CustomText