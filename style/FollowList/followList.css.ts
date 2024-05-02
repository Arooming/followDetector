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

  padding: "1rem 0rem",
  marginBottom: "1rem",

  gap: "1rem",
});

export const title = style({
  color: "white",
  fontSize: "2rem",
});

export const followerNum = style({
  color: "#B3CBE8",
  fontSize: "2.2rem",
});

export const unfollowerNum = style({
  color: "#EFB6B6",
  fontSize: "2.2rem",
});
