import { style } from "@vanilla-extract/css";

export const headerWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "7rem",
  padding: "1rem 2rem",
  backgroundColor: "#252525",
});

export const headerTitle = style({
  paddingLeft: "2rem",
  fontSize: "2rem",
  color: "#fafbfc",
});
