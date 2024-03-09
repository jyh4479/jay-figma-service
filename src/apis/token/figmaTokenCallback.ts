import {getAxios} from "../../config/axios";

// figma client secret = WHahrL8pQrnQIcl1e8xLueIIlcVv78
// client id = 38xtOgZp619SLpBgJNOurC

const clientId = "38xtOgZp619SLpBgJNOurC";
// const secret = "WHahrL8pQrnQIcl1e8xLueIIlcVv78";
const redirectUri = "http://localhost:5173/figma-token"
const scope = "files:read";
const state = "figma-api-state";
const responseType = "code"

const figmaTokenCallback = () => {
    return getAxios(`https://www.figma.com/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&response_type=${responseType}`);
}

export default figmaTokenCallback;