import styled from "styled-components"
import { Colors } from "../Style/colors"

interface Props {
    name?: string
    type?: string
}

function SideBar({ name, type }: Props) {
    return (
        <>
            <Container>
                <ProfileContainer>
                    <ProfileImg />
                    <ProfileName>{name}</ProfileName>
                    <ProfileText>{type}</ProfileText>
                    <ProfileText>리뷰 개수 : 24</ProfileText>
                </ProfileContainer>

                <MenuContainer>
                    <ParentMenu>병원 정보</ParentMenu>
                    <ChildMenu>병원 이름</ChildMenu>
                    <ChildMenu>병원 종류</ChildMenu>
                    <ChildMenu>병원 주소</ChildMenu>
                    <ChildMenu>병원 전화번호</ChildMenu>
                </MenuContainer>

                <MenuContainer>
                    <ParentMenu>병원 후기</ParentMenu>
                    <ChildMenu>병원 평점</ChildMenu>
                    <ChildMenu>병원 리뷰</ChildMenu>
                </MenuContainer>
            </Container>
        </>
    )
}

export default SideBar

const Container = styled.div`
    width: 20%;
    height: 85%;
    border: 1px solid ${Colors.Blue500};
    border-left: none;
    border-radius: 0 12px 12px 0;
    background: ${Colors.White};
    position: fixed;
    padding: 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const ProfileContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const ProfileImg = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background: ${Colors.Gray400};
`

const ProfileName = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.Black};
`

const ProfileText = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: medium;
    color: ${Colors.Blue500};
`

const MenuContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const ParentMenu = styled.div`
    width: 100%;
    height: 35px;
    border: 1px solid ${Colors.Blue500};
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Black};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ChildMenu = styled.div`
    width: 100%;
    height: 35px;
    border: 1px solid ${Colors.Blue100};
    border-left: none;
    border-right: none;
    font-size: 16px;
    color: ${Colors.Gray700};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
