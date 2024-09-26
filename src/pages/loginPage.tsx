import styled from "styled-components"
import { Colors } from "../Style/colors"
import MiniLogo from "../assets/MiniLogo"
import Input from "../components/Input"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()

    const toSignupHandler = () => {
        navigate("/signup")
    }

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
                    <Title>로그인</Title>
                    <SubTitle>로그인하여 AMBULANCEY를 이용하세요</SubTitle>
                </TitleWrapper>

                <Form>
                    <Input label="아이디" placeholder="아이디를 입력해주세요" />
                    <Input
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                    />

                    <ButtonWrapper>
                        <Button onClick={toMainHandler} text="로그인" />
                        <Ask>
                            계정이 없으신가요?{" "}
                            <Accent onClick={toSignupHandler}>회원가입</Accent>
                        </Ask>
                    </ButtonWrapper>
                </Form>
            </Background>
        </>
    )
}

export default LoginPage

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

const Ask = styled.p`
    color: ${Colors.Gray500};
    font-size: 16px;
    font-weight: lighter;
`

const Accent = styled.span`
    color: ${Colors.Blue400};
    font-size: 16px;
    font-weight: lighter;
    cursor: pointer;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`
