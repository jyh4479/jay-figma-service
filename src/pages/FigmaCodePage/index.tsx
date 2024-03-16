import {useSearchParams} from "react-router-dom";
import styled from "styled-components";
import {Card} from "antd";

const FigmaCodePage = () => {

    const [params] = useSearchParams();

    console.log(params.get('code'));
    console.log(params.get('state'));

    return (
        <StyledCard type={"inner"} title={"Create Figma URL"}>figma code</StyledCard>
    )
}

export default FigmaCodePage;

const StyledCard = styled(Card)`
  width: 600px;
`;