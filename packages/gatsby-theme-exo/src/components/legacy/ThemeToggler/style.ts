import styled from "styled-components"

export const RadioButtonContainer = styled.div`
	.body {
		width: 200px;
		overflow: hidden;
		display: flex;
	}

	label,
	.toggle {
		height: 2.8rem;
		border-radius: 100px;
	}
	label {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 100px;
		position: relative;
		margin: 10px;
		cursor: pointer;
	}
	.toggle {
		position: absolute;
		width: 50%;
		background-color: #fff;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	.names {
		font-size: 90%;
		font-weight: bolder;
		width: 65%;
		margin-left: 17.5%;
		margin-top: 0.5%;
		position: absolute;
		display: flex;
		justify-content: space-between;
		user-select: none;
	}
	.dark {
		color: black;
	}
	/* Bottom */

	/* -------- Switch Styles ------------*/
	[type="checkbox"] {
		display: none;
	}
	/* Toggle */
	[type="checkbox"]:checked + .app .toggle {
		transform: translateX(100%);
		background-color: #34323d;
	}
	[type="checkbox"]:checked + .app .dark {
		opacity: 1;
		color: white;
	}
	[type="checkbox"]:checked + .app .light {
		opacity: 1;
		color: white;
	}
	/* App */
	[type="checkbox"]:checked + .app {
		color: white;
	}
	/* Circle */
`
