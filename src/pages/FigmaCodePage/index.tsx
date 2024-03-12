import {useSearchParams} from "react-router-dom";

const FigmaCodePage = () => {

    const [params] = useSearchParams();

    console.log(params.get('code'));
    console.log(params.get('state'));

    return (
        <div>figma code</div>
    )
}

export default FigmaCodePage;