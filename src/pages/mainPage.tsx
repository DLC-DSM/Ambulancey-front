import styled from "styled-components"
import { Colors } from "../Style/colors"
import SideBar from "../components/SideBar"
import InformInput from "../components/InformInput"

function MainPage() {
    return (
        <>
            <Background>
                <SideBar name="대덕소프트웨어마이스터병원" type="정신병원" />

                <Container>
                    <InformContainer>
                        <InformTitle>병원 정보</InformTitle>
                        <Form>
                            <InformInput
                                label="병원 이름"
                                placeholder="병원의 이름을 입력해주세요"
                                value="대덕소프트웨어마이스터병원"
                            />
                            <InformInput
                                label="병원 종류"
                                placeholder="병원의 종류 입력해주세요"
                                value="정신병원"
                            />
                            <InformInput
                                label="병원 주소"
                                placeholder="병원의 주소를 입력해주세요"
                                value="대전광역시 유성구 가정북로 76"
                            />
                            <InformInput
                                label="병원 전화번호"
                                placeholder="병원의 전화번호를 입력해주세요"
                                value="042-866-8822"
                            />
                            <SubmitButton>수정하기</SubmitButton>
                        </Form>
                    </InformContainer>

                    <InformContainer>
                        <InformTitle>병원 후기</InformTitle>
                    </InformContainer>
                </Container>
            </Background>
        </>
    )
}

export default MainPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
`

const Container = styled.div`
    margin-left: auto;
    width: 78.65%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
`

const InformContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const InformTitle = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    gap: 20px;
`

const SubmitButton = styled.button`
    width: 20%;
    height: 50px;
    background: ${Colors.Blue500};
    border: none;
    border-radius: 12px;
    color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
`
