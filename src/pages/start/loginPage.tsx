import styled from "styled-components"
import { Colors } from "../../Style/colors"
import MiniLogo from "../../assets/MiniLogo"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import AuthService from "../../apis/authService"
import { useState } from "react"

function LoginPage() {
    const [username, setName] = useState<string>("")
    const [password, setPw] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const loginHandler = async () => {
        console.log(1)
        setLoading(true)
        if (username && password) {
            const result = await AuthService.login(username, password)
            switch (result) {
                case 200:
                    alert("성공")
                    break
                case 404:
                    alert("없는 계정")
                    break
                case 405:
                    alert("허용되지 않은 메소드")
                    break
                default:
                    alert("서버 오류")
            }
        }
        setLoading(false)
    }

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value)
    }

    const navigate = useNavigate()

    const toSignupHandler = () => {
        navigate("/signup")
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
                    <Input
                        label="병원 이름"
                        placeholder="병원의 이름을 입력해주세요"
                        name="hospital_name"
                        value={username}
                        onChange={changeName}
                    />
                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        value={password}
                        onChange={changePw}
                    />

                    <ButtonWrapper>
                        <Button
                            disable={loading}
                            onClick={() => loginHandler()}
                            text="로그인"
                        />
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

const Form = styled.div`
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
