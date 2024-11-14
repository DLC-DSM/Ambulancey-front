import styled from "styled-components"
import { Colors } from "../../Style/colors"
import MiniLogo from "../../assets/MiniLogo"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import AuthService from "../../apis/authService"

function SignupPage() {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const toLoginHandler = () => {
        navigate("/login")
    }

    const [input, setInput] = useState({
        hospital_name: "",
        type: "",
        address: "",
        phone: "",
        description: "",
        open_time: "",
        close_time: "",
        password: "",
        authentication_key: "",
    })

    const {
        hospital_name,
        type,
        address,
        phone,
        description,
        open_time,
        close_time,
        password,
        authentication_key,
    } = input

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput((input) => {
            return { ...input, [name]: value }
        })
    }

    const signupHandler = async () => {
        console.log(1)
        setLoading(true)
        if (
            Object.values(input).indexOf("") == -1 // << input의 모든 value중 빈 문자열이 없을 때 << 유효성검사
        ) {
            const result = await AuthService.signup(
                hospital_name,
                type,
                address,
                phone,
                description,
                open_time,
                close_time,
                password,
                authentication_key
            )
            console.log(`error : ${result}`)
            switch (result) {
                case 200:
                    alert("성공")
                    break
                case 401:
                    alert("로그인 후 사용 가능")
                    break
                case 403:
                    alert("권한 없음")
                    break
                case 404:
                    alert("찾을 수 없음")
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
                        value={hospital_name}
                        onChange={onChange}
                    />
                    <Input
                        label="병원 종류"
                        placeholder="병원 종류를 입력해주세요"
                        name="type"
                        value={type}
                        onChange={onChange}
                    />
                    <Input
                        label="병원 주소"
                        placeholder="병원 주소를 입력해주세요"
                        name="address"
                        value={address}
                        onChange={onChange}
                    />
                    <Input
                        label="병원 전화번호"
                        placeholder="병원 전화번호를 입력해주세요"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                    />
                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <Input
                        label="병원 소개"
                        placeholder="병원 소개를 입력해주세요"
                        name="description"
                        value={description}
                        onChange={onChange}
                    />
                    <Input
                        label="여는 시간"
                        placeholder="병원이 여는 시간을 입력해주세요 (00:00:00)"
                        name="open_time"
                        value={open_time}
                        onChange={onChange}
                    />
                    <Input
                        label="닫는 시간"
                        placeholder="병원이 닫는 시간을 입력해주세요 (24:00:00)"
                        name="close_time"
                        value={close_time}
                        onChange={onChange}
                    />
                    <Wrapper>
                        <Input
                            width={275}
                            placeholder="발급된 인증키를 입력해주세요"
                            label="인증키"
                            name="authentication_key"
                            value={authentication_key}
                            onChange={onChange}
                        />
                        <KeyButton>인증키 발급</KeyButton>
                    </Wrapper>
                    <ButtonWrapper>
                        <Button
                            disable={loading}
                            onClick={() => signupHandler()}
                            text="회원가입"
                        />
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
