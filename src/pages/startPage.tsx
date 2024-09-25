import styled from "styled-components"
import { Colors } from "../Style/colors"
import Logo from "../assets/Logo"
import Button from "../components/Button"

function StartPage() {
    return (
        <>
            <Background>
                <Container>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    <Button text="시작하기" />
                </Container>
            </Background>
        </>
    )
}

export default StartPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(${Colors.White}, ${Colors.LightBlue50});
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
`
