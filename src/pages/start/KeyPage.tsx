import styled from "styled-components"
import { Colors } from "../../Style/colors"
import MiniLogo from "../../assets/MiniLogo"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function KeyPage() {
    const [key, setKey] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKey(e.target.value)
    }

    const navigate = useNavigate()

    const toMainHandler = () => {
        navigate("/main")
    }

    return (
        <>
            <Background>
                <LogoContainer>
                    <MiniLogo />
                </LogoContainer>

                <TitleWrapper>
                    <Title>인증키 발급</Title>
                    <SubTitle>
                        마지막으로 인증한 후에 AMBULANCEY 서비스를 이용해보세요.
                    </SubTitle>
                </TitleWrapper>

                <Form>
                    <Wrapper>
                        <Input
                            width={275}
                            placeholder="발급된 인증키를 입력해주세요"
                            label="인증키"
                            onChange={onChange}
                            value={key}
                        />
                        <KeyButton>인증키 발급</KeyButton>
                    </Wrapper>

                    <ButtonWrapper>
                        <Button
                            text="인증키 확인"
                            v={key.length ? true : false}
                            value={key}
                        />
                        <Button onClick={toMainHandler} text="회원가입" />
                    </ButtonWrapper>
                </Form>
            </Background>
        </>
    )
}

export default KeyPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(${Colors.White}, ${Colors.LightBlue50});
    gap: 40px;
`

const LogoContainer = styled.div`
    display: felx;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${Colors.Blue500};
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.p`
    color: ${Colors.Blue800};
    font-size: 30px;
    font-weight: 400;
`

const SubTitle = styled.p`
    color: ${Colors.Blue600};
    font-size: 20px;
`

const Form = styled.form`
    width: 450px;
    padding: 40px 20px;
    border: 1px solid ${Colors.Blue800};
    border-radius: 15px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 10px;
`

const KeyButton = styled.div`
    padding: 0 20px;
    height: 46.78px;
    background-color: ${Colors.Blue500};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.White};
    font-size: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
`
