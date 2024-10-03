import styled from "styled-components"
import { Colors } from "../../Style/colors"

interface prop {
    exp: number
}

function StarLeveling({ exp }: prop) {
    const EXP = exp * 20

    return (
        <Border>
            <Range width={EXP} />
        </Border>
    )
}

export default StarLeveling

const Border = styled.div`
    width: 300px;
    height: 12px;
    border: 1px solid ${Colors.Blue500};
    border-radius: 6px;
    display: flex;
    justify-content: start;
    align-items: center;
`

const Range = styled.div`
    width: ${({ width }) => `${width}%`};
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(to right, ${Colors.Blue500}, ${Colors.Blue300});
`
