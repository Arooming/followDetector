import { style } from "@vanilla-extract/css";

const wrapperBasic = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const contentsWrapper = style([
  wrapperBasic,
  {
    flexDirection: "column",

    marginBottom: "1rem",
  },
]);

export const followWrapper = style([
  wrapperBasic,
  {
    marginTop: "1rem",

    gap: "1.2rem",
  },
]);

export const loginInfo = style({
  fontSize: "1.3rem",
});

const followBtnBasic = style({
  padding: "0.3rem 1.3rem",

  borderRadius: "3rem",
});

export const followBtn = style([
  followBtnBasic,
  {
    border: "0.1rem solid #FF3333",

    backgroundColor: "#FFE7E7",
    color: "#FF3333",
  },
]);

export const unfollowBtn = style([
  followBtnBasic,
  {
    border: "0.1rem solid #3385FF",

    backgroundColor: "#E7FBFF",
    color: "#3385FF",
  },
]);
