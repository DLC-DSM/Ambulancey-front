import styled from "styled-components"
import { Colors } from "../../Style/colors"

interface Props {
    text?: string
    onClick?: () => void
    value?: string
    v?: boolean
}

function Button({ text, onClick, v = true, value }: Props) {
    return (
        <>
            <ButtonContainer
                onClick={onClick}
                v={v}
                value={value}
            >
                {text}
            </ButtonContainer>
        </>
    )
}

export default Button

const ButtonContainer = styled.button`
    width: 411.6px;
    height: 40px;
    background: ${({ v }) => (v ? `${Colors.Blue500}` : `${Colors.Gray500}`)};
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.White};
    cursor: pointer;
    border-radius: 12px;
`
