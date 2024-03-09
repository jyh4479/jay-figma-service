import {postAxios} from "../../config/axios";

const clientId = "38xtOgZp619SLpBgJNOurC";
const secret = "WHahrL8pQrnQIcl1e8xLueIIlcVv78";
const redirectUri = "http://localhost:5173/figma-token"
const grantType = "authorization_code";

//FIXME: secret 정보 env 파일로 빼놓기 or 서비스 사용자에게 입력 받을 수 있는 방법 생각하기
//상단 key는 현재 없앤 상태임

const getFigmaToken = () => {
    return postAxios(`https://www.figma.com/api/oauth/token?client_id=${clientId}&client_secret=${secret}&redirect_uri=${redirectUri}&code=3tK9nNye2FaFl7ptYHbqiu9f5&grant_type=${grantType}`);

}

export default getFigmaToken;