import React, { FunctionComponent } from "react";

import "./widget.css";

export interface WidgetProps {
	title: string;
}

export const Widget: FunctionComponent<WidgetProps> = ({ title, children }) => (
	<div className="rh-widget">
		<div className="rh-widget-header">
			{title}
		</div>
		<div className="rh-widget-content">
			{children}
		</div>
	</div>
);