import styled from "styled-components";
import { handleColorTransType } from "./helper-styled";

export const LargeHeader = styled.h1`
	font-size: 20px;
	color: ${({ theme }) => theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 36px;
	}
`;

export const Subtitle = styled.p`
	margin: 5px 0;
	font-weight: bold;
	font-size: 16px;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 22px;
	}
`;

export const Bold = styled.p`
	font-weight: bold;
	font-size: 14px;
	letter-spacing: 0.1em;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 16px;
	}
`;
export const Small = styled.p`
	font-size: 11px;
	letter-spacing: 0.1em;
	color: ${({ type, theme }) => handleColorTransType(type, theme) || theme.text};

	@media screen and (min-width: 1120px) {
		font-size: 14px;
	}
`;

export const SmallOverflowingText = styled(Small)`
	overflow: hidden;
	text-overflow: ellipsis;
`;