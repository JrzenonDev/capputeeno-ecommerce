"use client";

import { styled } from "styled-components";

export const DefaultPageLayout = styled.div`
  padding: 12px 24px;
  height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`;
