import styled from "styled-components"
import { Colors } from "../../Style/colors"
import { useState } from "react"
import { IoMdEye } from "react-icons/io"
import { IoMdEyeOff } from "react-icons/io"

interface Props {
    label?: string
    placeholder?: string
    value?: string
}

function InformInput({ label, placeholder, value }: Props) {
    const [show, setShow] = useState<Boolean>(false)

    const toggleShowHandler = () => {
        setShow(!show)
    }

    return (
        <>
            <Container>
                <Label>{label}</Label>
                <InputContainer id="inpput">
                    <InputText placeholder={placeholder} value={value} />
                </InputContainer>
            </Container>
        </>
    )
}

export default InformInput

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: left;
    flex-direction: column;
    gap: 5px;
`

const Label = styled.label`
    margin-left: 5px;
    color: ${Colors.Black};
    font-size: 20px;
`

const InputContainer = styled.div`
    width: 800px;
    height: 50px;
    border-radius: 12px;
    background: ${Colors.Gray50};
    border: 1px solid ${Colors.Gray200};
    padding: 0 5px;
    transition: 200ms;

    display: flex;
    justify-content: start;
    align-items: center;

    &:hover {
        border: 1px solid ${Colors.Blue500};
        background: ${Colors.Gray100};
    }
`

const InputText = styled.input`
    font-size: 18px;
    color: ${Colors.Black};
    border: none;
    background: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: ${Colors.Gray500};

    &::placeholder {
        color: ${Colors.Gray400};
        font-weight: lighter;
    }

    &:hover {
        &::placeholder {
            color: ${Colors.Gray400};
        }
    }

    &:focus {
        color: black;
    }
`