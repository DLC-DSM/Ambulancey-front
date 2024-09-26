import styled from "styled-components"
import { Colors } from "../Style/colors"
import SideBar from "../components/SideBar"

function MainPage() {
    return (
        <>
            <Background>
                <SideBar name="대덕소프트웨어마이스터병원" type="정신병원" />
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
