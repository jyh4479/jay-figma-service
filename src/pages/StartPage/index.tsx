import {Button, Card, Form, Input, Select} from "antd";
import styled from "styled-components";

const {Option} = Select;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const StartPage = () => {
    return (
        <StyledCard type={"inner"} title={"Create Figma URL"}>
            <Form
                name={"parameter"}
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}>
                <Form.Item
                    label={"Client ID"}
                    name={"clientId"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Redirect URI"}
                    name={"redirectUri"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input addonBefore={selectBefore}/>
                </Form.Item>
                <Form.Item
                    label={"Scope"}
                    name={"scope"}
                    rules={[{required: true, message: ''}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </StyledCard>
    )
}

export default StartPage;


const StyledCard = styled(Card)`
  width: 600px;
`;