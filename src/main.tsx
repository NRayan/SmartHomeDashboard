import React from "react";
import ReactDOM from "react-dom/client";
import { Dashboard } from "./pages/dashboard";
import "./styles/global.css";
import "./styles/breakpoints.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { SmartHomeContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<SmartHomeContextProvider>
				<Dashboard />
			</SmartHomeContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
