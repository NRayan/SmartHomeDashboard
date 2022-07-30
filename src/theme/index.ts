export type ThemeProps = {
    colors: {
        background: string,
        background_Secondarys:string,
        primary: string,
        text: string,
        text_Secondary: string
    },
    boxShadow: string,
    defaultBorder: string
}

export const theme: ThemeProps =
{
	colors: {
		background: "#121220",
		background_Secondarys:"#151423",
		primary: "#007EF5",
		text: "#FFF",
		text_Secondary: "#8A88B7"
	},
	boxShadow: "-7px -7px 15px 0px #211F37",
	defaultBorder: "1px solid #1C1B2F"
};