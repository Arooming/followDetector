import { style } from "@vanilla-extract/css";

export const LoadingPageItemContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "calc(100vh - 7rem)",
});

export const LottieWrapper = style({
  width: "25rem",
  height: "25rem",
});
