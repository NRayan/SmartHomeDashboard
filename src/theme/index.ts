export type ThemeProps = {
    colors: {
        background: string,
        primary: string,
        stoke:string,
        text: string
    },
    boxShadow:string
}

export const theme: ThemeProps =
{
	colors: {
		background: "#121220",
		primary: "#007EF5",
		stoke: "#26243F",
		text: "#FFF"
	},
	boxShadow:"0px 0px 10px 0px #26243F"
};