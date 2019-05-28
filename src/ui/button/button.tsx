import React from "react";

import './button.css';

export const Button = (props: { content: string }) => (
	<a className="rh-button">
		{props.content}
	</a>
);
