import styled from "styled-components"
import { Colors } from "../Style/colors"

interface Props {
    text?: string
}

function Button({ text }: Props) {
    return (
        <>
            <ButtonContainer>{text}</ButtonContainer>
        </>
    )
}

export default Button

const ButtonContainer = styled.button`
    width: 300px;
    height: 40px;
    background: ${Colors.Blue500};
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.White};
    cursor: pointer;
    border-radius: 12px;
`
