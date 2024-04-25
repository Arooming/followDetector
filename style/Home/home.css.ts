import { style } from "@vanilla-extract/css";

export const homeWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "calc(100vh - 7rem)",
  padding: "0 15rem",
});

export const homeContents = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "100%",
  height: "30rem",
  padding: "2rem",
  gap: "3rem",

  borderRadius: "2rem",
  border: "0.3rem solid black",

  backgroundColor: "#333",
});

export const tokenLinkBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const tokenLinkBtn = style({
  width: "fit-content",
  padding: "1rem",

  backgroundColor: "#999",
  color: "#f5f5f5",

  borderRadius: "1rem",

  fontSize: "1.5rem",

  textDecoration: "none",
});

export const tokenInfoText = style({
  color: "#f5f5f5",
  fontSize: "1.3rem",
});

export const tokenInputBox = style({
  display: "flex",
  flexDirection: "column",

  gap: "2rem",
});

export const tokenInput = style({
  width: "100%",
  height: "5rem",
  padding: "2rem",

  border: "0.2rem solid #999",
  borderRadius: "1rem",

  "::placeholder": {
    fontSize: "1.3rem",
  },
});

export const tokenInputNextBtn = style({
  width: "100%",
  height: "4.5rem",

  backgroundColor: "#4078c0",
  color: "#f5f5f5",

  borderRadius: "1rem",

  fontSize: "1.7rem",
});
