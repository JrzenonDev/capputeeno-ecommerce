import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

export const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

export const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  line-height: 150%;
`;
