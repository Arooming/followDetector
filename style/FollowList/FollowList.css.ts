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

export const titleWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "1rem",
});

export const title = style({
  marginBottom: "1rem",
  fontSize: "1.5rem",
});
