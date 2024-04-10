import { style } from "@vanilla-extract/css";

export const followListWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",

  width: "100%",

  gap: "15rem",
});

export const listWrapper = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const title = style({
  marginBottom: "2rem",
  fontSize: "1.5rem",
});
