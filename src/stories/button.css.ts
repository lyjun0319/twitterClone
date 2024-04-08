import {globalStyle, style} from "@vanilla-extract/css";

export const btnDefault = style({
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    color:"#fff",
    backgroundColor:"#888",
})

export const btnPrimarys = style({
    backgroundColor: "#dc2000"
})

globalStyle('button', {
    border:0,
    borderRadius:7,
    cursor:"pointer",
    backgroundColor:"transparent",
})