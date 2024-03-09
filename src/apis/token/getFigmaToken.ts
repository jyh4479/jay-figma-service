import {postAxios} from "../../config/axios";

const clientId = "38xtOgZp619SLpBgJNOurC";
const secret = "WHahrL8pQrnQIcl1e8xLueIIlcVv78";
const redirectUri = "http://localhost:5173/figma-token"
const grantType = "authorization_code";

const getFigmaToken = () => {
    return postAxios(`https://www.figma.com/api/oauth/token?client_id=${clientId}&client_secret=${secret}&redirect_uri=${redirectUri}&code=s4r53jeXD4RXBI3NaxkUNDO5l&grant_type=${grantType}`);

}

export default getFigmaToken;