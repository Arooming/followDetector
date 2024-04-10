import { style } from "@vanilla-extract/css";

export const contentsWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  marginBottom: "1rem",
});

export const followWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",

  gap: "1.2rem",
});

export const loginInfo = style({
  fontSize: "1.3rem",
});

export const followBtn = style({
  padding: "0.3rem 1.3rem",

  borderRadius: "3rem",
  border: "0.1rem solid #FF3333",

  backgroundColor: "#FFE7E7",
  color: "#FF3333",
});

export const unfollowBtn = style({
  padding: "0.3rem 1.3rem",

  borderRadius: "3rem",
  border: "0.1rem solid #3385FF",

  backgroundColor: "#E7FBFF",
  color: "#3385FF",
});
