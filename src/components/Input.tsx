import styled from "styled-components"
import { Colors } from "../Style/colors"
import { useState } from "react"
import { IoMdEye } from "react-icons/io"
import { IoMdEyeOff } from "react-icons/io"

interface Props {
    type?: string
    label?: string
    placeholder?: string
}

function Input({ type = "text", label, placeholder }: Props) {
    const [show, setShow] = useState<Boolean>(false)

    const toggleShowHandler = () => {
        setShow(!show)
    }

    return (
        <>
            <Container>
                <Label>{label}</Label>
                <InputContainer>
                    <InputText
                        type={
                            type == "password"
                                ? !show
                                    ? "password"
                                    : "text"
                                : type
                        }
                        placeholder={placeholder}
                    />

                    {type == "password" &&
                        (show ? (
                            <Icon onClick={toggleShowHandler}>
                                <IoMdEye />
                            </Icon>
                        ) : (
                            <Icon onClick={toggleShowHandler}>
                                <IoMdEyeOff />
                            </Icon>
                        ))}
                </InputContainer>
            </Container>
        </>
    )
}

export default Input

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
    font-size: 18px;
`

const InputContainer = styled.div`
    width: 400px;
    height: 35px;
    border-radius: 12px;
    background: ${Colors.Gray50};
    border: 1px solid ${Colors.Gray200};
    padding: 5px;
    transition: 200ms;

    display: flex;
    justify-content: start;
    align-items: center;

    &:hover {
        border: 1px solid ${Colors.Gray400};
        background: ${Colors.Gray100};
    }

    &:focus {
        border: 1px solid ${Colors.Gray400};
        background: ${Colors.Gray100};
    }
`

const InputText = styled.input`
    font-size: 16px;
    color: ${Colors.Black};
    border: none;
    background: none;
    outline: none;
    width: 350px;

    &::placeholder {
        color: ${Colors.Gray400};
        font-weight: lighter;
    }

    &:hover {
        &::placeholder {
            color: ${Colors.Gray400};
        }
    }
`

const Icon = styled.div`
    margin-right: 5px;
    text-align: center;
    font-size: 24px;
    color: ${Colors.Gray400};
    cursor: pointer;
    margin-left: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`
