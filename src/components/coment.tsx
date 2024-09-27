import styled from "styled-components"
import { Colors } from "../Style/colors"

function coment() {
    return (
        <>
            <Container></Container>
        </>
    )
}

export default coment

const Container = styled.div`
    padding: 5px;
    display: flex;
    justify-items: center;
    align-items: center;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray500};
    border-radius: 12px;
`
