import styled from "styled-components";
import { generalColors, lightTheme, darkTheme } from "./Themes-Style.styled";

// Buttons inside TransactionOutput
export const ArrowButton = styled.button`
	color: ${lightTheme.blue};
	margin: 1em;
`
export const NewButton = styled.button`
	padding: 0.5em 1em;
	border-radius: 10px;
	background-color: ${generalColors.lightBlue};
`

export const TransactionDetails = styled.button`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1em;
    align-items: center;
    width: 100%;
    margin: 1.5em 0;
`

// App
export const ShowSidebarButton = styled.button`
    display: block;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        display: none;
    }
`