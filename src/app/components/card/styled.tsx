import styled from "styled-components";
import { ThemePalette } from "../../settings/types";

export const CardWrapper = styled.div<{ background: ThemePalette }>`
  display: block;
  padding: 24px 32px;
  border-radius: 10px;
  background-color: ${({ theme, background }) => theme.palette[background]};
`;
