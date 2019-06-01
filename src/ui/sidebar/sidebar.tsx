import React, { FunctionComponent } from "react";

import "./sidebar.css";

export interface SidebarProps {

}

export const Sidebar: FunctionComponent<SidebarProps> = ({ children }) => (
	<div className="rh-sidebar">
		{/* <div className="rh-sidebar-top">

		</div> */}

		{children}
	</div>
);


export interface SidebarItemProps {
	title: string;
	iconName: string;

	isActive: boolean;
}

export const SidebarItem: FunctionComponent<SidebarItemProps> = ({ isActive }) => (
	<div className={'rh-sidebar-action-item ' + (isActive && 'active')}>
		<span className="border"></span>

		<i className="rh-icon icon-home"></i>
	</div>
);