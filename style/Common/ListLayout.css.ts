import { style } from "@vanilla-extract/css";

export const contentsWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  marginBottom: "1rem",
});

export const loginInfo = style({
  marginTop: "1rem",

  fontSize: "1.3rem",
});
