import {Button, Card} from "antd";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Card type={"inner"} title={"Figma API web service"}>
            <Button type={"primary"} onClick={() => navigate("/start")}>Get started</Button>
        </Card>
    )
}

export default HomePage;