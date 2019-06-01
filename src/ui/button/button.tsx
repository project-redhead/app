import React, { FunctionComponent } from "react";

import './button.css';

export interface ButtonProps {

}

export const Button: FunctionComponent<ButtonProps> = ({children}) => (
	<a className="rh-button">
		{children}
	</a>
);
