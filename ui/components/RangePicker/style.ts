import styled from "styled-components"


export const RangeBubbleText = styled.span`
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fontFamily};
`

export const RangePickerContainer = styled.div`
	input {
		box-shadow: 0;
		outline: 0;
	}
	.price-slider {
		width: 300px;
		margin: auto;
		text-align: center;
		position: relative;
	}
	.price-slider svg,
	.price-slider input[type="range"] {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	input[type="number"] {
		border: 1px solid #ddd;
		text-align: center;
		font-size: 1.6em;
		-moz-appearance: textfield;
	}
	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	input[type="number"]:invalid,
	input[type="number"]:out-of-range {
		border: 2px solid #e60023;
	}
	input[type="range"] {
		-webkit-appearance: none;
		width: 100%;
	}
	input[type="range"]:focus {
		outline: none;
	}
	input[type="range"]:focus::-webkit-slider-runnable-track {
	}
	input[type="range"]:focus::-ms-fill-lower {
	}
	input[type="range"]:focus::-ms-fill-upper {
	}
	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		border-radius: 1px;
		box-shadow: none;
		background: #4d89e740;

		border: 0;
	}
	input[type="range"]::-webkit-slider-thumb {
		z-index: 2;
		position: relative;
		box-shadow: 0px 0px 0px #000;
		border: 1px solid #1da1f2;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #4d89e7;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -7px;
	}
	input[type="range"]::-moz-range-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		background: #1da1f2;
		border-radius: 1px;
		box-shadow: none;
		border: 0;
	}
	input[type="range"]::-moz-range-thumb {
		z-index: 2;
		position: relative;
		box-shadow: 0px 0px 0px #000;
		border: 1px solid #1da1f2;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #a1d0ff;
		cursor: pointer;
	}
	input[type="range"]::-ms-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	input[type="range"]::-ms-fill-lower,
	input[type="range"]::-ms-fill-upper {
		background: #1da1f2;
		border-radius: 1px;
		box-shadow: none;
		border: 0;
	}
	input[type="range"]::-ms-thumb {
		z-index: 2;
		position: relative;
		box-shadow: 0px 0px 0px #000;
		border: 1px solid #1da1f2;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #a1d0ff;
		cursor: pointer;
	}
`
