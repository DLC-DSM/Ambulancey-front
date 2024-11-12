import styled from "styled-components"
import { Colors } from "../../Style/colors"

interface Props {
    text?: string
    onClick?: () => void
    value?: string
    disable?: boolean
}

function Button({ text, onClick, disable = true, value }: Props) {
    return (
        <>
            <ButtonContainer onClick={disable ? ()=>{} : onClick} $v={disable} value={value}>
                {text}
            </ButtonContainer>
        </>
    )
}

export default Button

const ButtonContainer = styled.button`
    width: 411.6px;
    height: 40px;
    background: ${({ $v }) => ($v ? `${Colors.Gray500}` : `${Colors.Blue500}`)};
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.White};
    cursor: pointer;
    border-radius: 12px;
`
