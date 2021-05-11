import styled, { css } from 'styled-components';
import media from "../MediaQueries";


const StyledH2 = styled.h2`
    font-size: 7rem;
    color: ${(props) => props.theme.colors.green};

    letter-spacing: .2rem;

    white-space: nowrap;

    padding: 1rem 4rem;

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    ${({ styling }) =>
        (styling === "schedule" && css`
            justify-self: center;
            margin-bottom: 6rem;
            background-color: ${(props) => props.theme.colors.transBlack_75};
            color: ${(props) => props.theme.colors.white};
        `)
        ||
        (styling === "contact" && css`
            margin-bottom: 2rem;
           
            
            color: ${(props) => props.theme.colors.green};
            text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
            background-color: ${(props) => props.theme.colors.transBlack_75};
            z-index: 1;
        `)
    }

    ${media.width_1200`
        font-size: ${(props) => props.theme.fontSize_br_1200.h2};
    `}

    ${media.width_1000`
        font-size: ${(props) => props.theme.fontSize_br_1000.h2};
    `}

    ${media.width_800`
        font-size: ${(props) => props.theme.fontSize_br_800.h2};
    `}

    ${media.width_500`
        font-size: ${(props) => props.theme.fontSize_br_500.h2};
    `}

    ${media.width_450`
        font-size: ${(props) => props.theme.fontSize_br_450.h2};
        letter-spacing: 0;
    `}

    ${media.width_350`
        font-size: ${(props) => props.theme.fontSize_br_350.h2};
        letter-spacing: 0;
    `}

    ${media.width_300`
        font-size: ${(props) => props.theme.fontSize_br_300.h2};
    `}


`

const H2 = ({ styling, children }) => {
    return (
        <StyledH2 styling={styling}>{children}</StyledH2>
    );
}

export default H2;