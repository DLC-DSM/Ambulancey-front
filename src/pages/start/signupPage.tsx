import styled from "styled-components"
import { Colors } from "../../Style/colors"
import MiniLogo from "../../assets/MiniLogo"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

function SignupPage() {
    const navigate = useNavigate()

    const toLoginHandler = () => {
        navigate("/login")
    }

    const toKeyHandler = () => {
        navigate("/key")
    }

    return (
        <>
            <Background>
                <LogoContainer>
                    <MiniLogo />
                </LogoContainer>

                <TitleWrapper>
                    <Title>회원가입</Title>
                    <SubTitle>회원가입하여 AMBULANCEY를 이용하세요</SubTitle>
                </TitleWrapper>

                <Form>
                    <Input
                        label="병원 이름"
                        placeholder="병원 이름을 입력해주세요"
                        name="hospital_name"
                    />
                    <Input
                        label="병원 종류"
                        placeholder="병원 종류를 입력해주세요"
                        name="type"
                    />
                    <Input
                        label="병원 주소"
                        placeholder="병원 주소를 입력해주세요"
                        name="address"
                    />
                    <Input
                        label="병원 전화번호"
                        placeholder="병원 전화번호를 입력해주세요"
                        name="phone"
                    />
                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                    />
                    <Input
                        label="병원 소개"
                        placeholder="병원 소개를 입력해주세요"
                        name="description"
                    />
                    <Input
                        label="여는 시간"
                        placeholder="병원이 여는 시간을 입력해주세요 (XX:XX)"
                        name="open_time"
                    />
                    <Input
                        label="닫는 시간"
                        placeholder="병원이 닫는 시간을 입력해주세요 (XX:XX)"
                        name="close_time"
                    />
                    <ButtonWrapper>
                        <Button onClick={toKeyHandler} text="다음으로" />
                        <Ask>
                            이미 계정이 있으신가요?{" "}
                            <Accent onClick={toLoginHandler}>로그인</Accent>
                        </Ask>
                    </ButtonWrapper>
                </Form>
            </Background>
        </>
    )
}

export default SignupPage

const Background = styled.div`
    width: 100%;
    padding: 40px 0;
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
