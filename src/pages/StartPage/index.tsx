import {Button, Card, Form, Input, Modal, Select, Typography} from "antd";
import styled from "styled-components";
import {useInputState, useModal} from "../../hooks";
import {useMemo, useState} from "react";
import useSelectState from "../../hooks/useSelectState.ts";
import userFigmaInfoStore from "../../stores/userFigmaInfoStore.ts";

const {Option} = Select;
const {Link} = Typography;

const SelectBefore = (props) => {

    const {value, onChange} = props;

    return (
        <Select value={value} onChange={onChange}>
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    )
}

const StartPage = () => {

    const {
        clientId: storeClientId,
        setClientId: setStoreClientId,
        clientSecret: storeClientSecret,
        callbackUri,
        setCallbackUri,
        setClientSecret: setStoreClientSecret,
        scope: storeScope
    } = userFigmaInfoStore();

    const [clientId, onClientIdChange] = useInputState(storeClientId);
    const [clientSecret, onClientSecretChange] = useInputState(storeClientSecret);
    const [redirectUriPrefix, onPrefixChange] = useSelectState('http://');
    const [redirectUri, onRedirectUriChange] = useInputState('');
    const [scope, onScopeChange] = useInputState(storeScope);
    const [state, setState] = useState('temp-figma-state');
    const [responseType, setResponseType] = useState('code');

    const modalCtl = useModal();

    const figmaAccessUrl = useMemo(() =>
            `https://www.figma.com/oauth?client_id=${clientId}&redirect_uri=${redirectUriPrefix}${redirectUri}&scope=${scope}&state=${state}&response_type=${responseType}`,
        [clientId, redirectUriPrefix, redirectUri, scope, state, responseType])

    const onCreateUrl = () => {
        setStoreClientId(clientId);
        setStoreClientSecret(clientSecret);
        setCallbackUri(`${redirectUriPrefix}${redirectUri}`);
    }

    return (
        <StyledCard type={"inner"} title={"Create Figma URL"}>
            <Modal title={"Figma access URL"} {...modalCtl}>
                <Link href={figmaAccessUrl}>
                    {figmaAccessUrl}
                </Link>
            </Modal>
            <Form
                name={"parameter"}
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}>
                <Form.Item
                    label={"Client ID"}
                    name={"clientId"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input defaultValue={clientId} value={clientId} onChange={onClientIdChange}/>
                </Form.Item>
                <Form.Item
                    label={"Client Secret"}
                    name={"clientSecret"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input defaultValue={clientSecret} value={clientSecret} onChange={onClientSecretChange}/>
                </Form.Item>
                <Form.Item
                    label={"Redirect URI"}
                    name={"redirectUri"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input addonBefore={<SelectBefore value={redirectUriPrefix} onChange={onPrefixChange}/>}
                           value={redirectUri} onChange={onRedirectUriChange}/>
                </Form.Item>
                <Form.Item
                    label={"Scope"}
                    name={"scope"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={() => {
                        modalCtl.onClick();
                        onCreateUrl();
                    }}>
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </StyledCard>
    );
}

export default StartPage;


const StyledCard = styled(Card)`
  width: 600px;
`;