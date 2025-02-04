import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification} from "./utils";

export default function Notifications() {
	return (
		<div className="Notifications">
			<button className="notifify-button" aria-label="Close" onClick={console.log("Close button has been clicked")}>
			<img src={closeIcon} alt="closeIcon" width="20px"/>
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<li data="default">New course available</li>
				<li data="urgent">New resume available</li>
				<li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
			</ul>
		</div>
	);
}