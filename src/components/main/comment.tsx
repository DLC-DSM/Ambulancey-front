import styled from "styled-components"
import { Colors } from "../../Style/colors"

interface Props {
    user?: string
    content?: string
    star: number
}

function Comment({ user, content, star }: Props) {
    return (
        <>
            <Container>
                <ProfileContainer>
                    <User>{user}</User>
                    <Star>{"★".repeat(star) + "☆".repeat(5 - star)}</Star>
                </ProfileContainer>
                <Content>{content}</Content>
            </Container>
        </>
    )
}

export default Comment

const Container = styled.div`
    width: 760px;
    padding: 15px 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray500};
    border-radius: 12px;
    gap: 10px;
`

const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
`

const User = styled.p`
    font-size: 20px;
    font-weight: 450;
    color: ${Colors.Gray600};
`

const Star = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Blue500};
    margin-left: auto;
`

const Content = styled.p`
    width: 100%;
    color: ${Colors.Gray500};
    font-size: 16px;
`
