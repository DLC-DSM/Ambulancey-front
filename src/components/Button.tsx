import styled from "styled-components"
import { Colors } from "../Style/colors"

interface Props {
    text?: string
    onClick?: () => void
}

function Button({ text, onClick }: Props) {
    return (
        <>
            <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
        </>
    )
}

export default Button

const ButtonContainer = styled.button`
    width: 411.6px;
    height: 40px;
    background: ${Colors.Blue500};
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.White};
    cursor: pointer;
    border-radius: 12px;
`
