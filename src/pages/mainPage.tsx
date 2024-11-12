import styled from "styled-components"
import { Colors } from "../Style/colors"
import SideBar from "../components/main/SideBar"
import InformInput from "../components/main/InformInput"
import Comment from "../components/main/comment"
import StarRate from "../components/main/StarRating"
import StarLeveling from "../components/main/StarLeveling"
import { useRef, useState } from "react"
import AuthServiceHospital from "../apis/hospital"

function MainPage() {
    const [loading, setLoading] = useState<boolean>(false)
    const [input, setInput] = useState({
        hospital_name: "",
        type: "",
        address: "",
        phone: "",
        description: "",
        open_time: "",
        close_time: "",
    })

    const {
        hospital_name,
        type,
        address,
        phone,
        description,
        open_time,
        close_time,
    } = input

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput((input) => {
            return { ...input, [name]: value }
        })
    }

    const updateHandler = async () => {
        setLoading(true)
        if (
            hospital_name &&
            type &&
            address &&
            phone &&
            description &&
            open_time &&
            close_time
        ) {
            const result = await AuthServiceHospital.update(
                hospital_name,
                type,
                address,
                phone,
                description,
                open_time,
                close_time
            )
            switch (result) {
                case 401:
                    alert(401)
                    break
                case 403:
                    alert(403)
                    break
                case 404:
                    alert(404)
                    break
                case 405:
                    alert(405)
                    break
                default:
                    alert(500)
            }
        }
        setLoading(false)
    }

    const InformRef = useRef<HTMLDivElement>(null)
    const ReviewRef = useRef<HTMLDivElement>(null)

    const onInformClick = () => {
        InformRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const onReviewClick = () => {
        ReviewRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const Reviews = [
        {
            user_id: "서지호",
            content: "아니 집에 가고 싶다니까 안 보내줘요",
            star: 1,
        },
        {
            user_id: "김성민",
            content: "아무나 내 코드 리뷰해주실분",
            star: 3,
        },
        {
            user_id: "양병건",
            content: "코드리뷰 해달라구요?",
            star: 3,
        },
        {
            user_id: "김효정",
            content: "으앙 집가고 싶다",
            star: 5,
        },
        {
            user_id: "김성민",
            content: "재미없어",
            star: 2,
        },
        {
            user_id: "김효정",
            content: "재밌다",
            star: 5,
        },
        {
            user_id: "서지유",
            content: "대마고를 폭파시키게 되.",
            star: 2,
        },
        {
            user_id: "이금규",
            content: "나뭇잎 맛있어 냠냠",
            star: 4,
        },
        {
            user_id: "이현규",
            content: "학생이 미쳤고 선생이 미쳤어요",
            star: 4,
        },
    ]

    function GetNum(arr: any, n: number) {
        return (arr.filter((v: any) => v.star == n).length / arr.length) * 5
    }

    const average =
        Math.ceil(
            (Reviews.filter((v) => v.star).reduce((a, b) => a + b.star, 0) /
                Reviews.length) *
                10
        ) / 10

    const Level = [
        GetNum(Reviews, 5),
        GetNum(Reviews, 4),
        GetNum(Reviews, 3),
        GetNum(Reviews, 2),
        GetNum(Reviews, 1),
    ]

    return (
        <>
            <SideBarContainer>
                <SideBar
                    name="둔산숲정신건강의학과의원"
                    type="정신건강의학과"
                    review={Reviews.length}
                    onInfrom={onInformClick}
                    onReview={onReviewClick}
                />
            </SideBarContainer>
            <Background>
                <Container>
                    <InformContainer ref={InformRef}>
                        <InformTitle>병원 정보</InformTitle>
                        <Form>
                            <InformInput
                                label="병원 이름"
                                placeholder="병원의 이름을 입력해주세요"
                                value={hospital_name}
                                onChange={onChange}
                                name="hospital_name"
                            />
                            <InformInput
                                label="병원 종류"
                                placeholder="병원의 종류를 입력해주세요"
                                value={type}
                                onChange={onChange}
                                name="type"
                            />
                            <InformInput
                                label="병원 주소"
                                placeholder="병원의 주소를 입력해주세요"
                                value={address}
                                onChange={onChange}
                                name="address"
                            />
                            <InformInput
                                label="병원 전화번호"
                                placeholder="병원의 전화번호를 입력해주세요"
                                value={phone}
                                onChange={onChange}
                                name="phone"
                            />
                            <InformInput
                                label="병원 소개"
                                placeholder="병원의 소개를 입력해주세요"
                                value={description}
                                onChange={onChange}
                                name="description"
                            />
                            <InformInput
                                label="여는 시간"
                                placeholder="병원이 여는 시간을 입력해주세요 (XX:XX)"
                                value={open_time}
                                onChange={onChange}
                                name="open_time"
                            />
                            <InformInput
                                label="닫는 시간"
                                placeholder="병원이 닫는 시간을 입력해주세요 (XX:XX)"
                                value={close_time}
                                onChange={onChange}
                                name="close_time"
                            />
                            <SubmitButton onClick={updateHandler} $v={loading}>
                                수정하기
                            </SubmitButton>
                        </Form>
                    </InformContainer>

                    <InformContainer ref={ReviewRef}>
                        <InformTitle>병원 후기</InformTitle>
                        <CommentContainer>
                            <InformSubTitle>병원 별점</InformSubTitle>
                            <StarContainer>
                                <AverageContainer>
                                    <AverageText>평균 별점</AverageText>
                                    <Average>
                                        {average % 1 == 0
                                            ? average + ".0"
                                            : average}
                                        점
                                    </Average>
                                    <StarRate avr={average} />
                                </AverageContainer>

                                <LevelingContainer>
                                    {Level.map((v, i) => {
                                        return (
                                            <Leveling>
                                                <LevelingTitle>
                                                    {5 - i}★
                                                </LevelingTitle>
                                                <StarLeveling exp={v} />
                                            </Leveling>
                                        )
                                    })}
                                </LevelingContainer>
                            </StarContainer>
                        </CommentContainer>

                        <CommentContainer>
                            <InformSubTitle>병원 리뷰</InformSubTitle>
                            {Reviews.map((v) => {
                                return (
                                    <Comment
                                        user={v.user_id}
                                        star={v.star}
                                        content={v.content}
                                    />
                                )
                            })}
                        </CommentContainer>
                    </InformContainer>
                </Container>
            </Background>
        </>
    )
}

export default MainPage

const SideBarContainer = styled.div`
    width: 20%;
    height: 100vh;
    z-index: 999;
    position: fixed;
    display: flex;
    justify-content: left;
    align-items: center;
`

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`

const Container = styled.div`
    z-index: 2;
    margin-left: auto;
    width: 78.65%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
`

const InformContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const InformTitle = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    gap: 20px;
`

const SubmitButton = styled.button`
    width: 20%;
    height: 50px;
    background: ${Colors.Blue500};
    border: none;
    border-radius: 12px;
    color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    background: ${({ $v }) => ($v ? `${Colors.Gray500}` : `${Colors.Blue500}`)};
`

const CommentContainer = styled.div`
    display: flex;
    width: 800px;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const InformSubTitle = styled.div`
    margin-left: 5px;
    color: ${Colors.Black};
    font-size: 20px;
`

const StarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 20px 0;
`

const AverageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const AverageText = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Average = styled.p`
    font-size: 50px;
    font-weight: bolder;
    color: ${Colors.Blue500};
`

const LevelingTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Blue500};
`

const LevelingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`

const Leveling = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
