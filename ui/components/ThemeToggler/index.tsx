import React, { useEffect, useState } from "react"
import { RadioButtonContainer } from "./style"
interface RadioProps {
	onChange: (isChecked: boolean) => void
	checked?: boolean
}
function ThemeToggler(props: RadioProps) {
	const [isChecked, setIsChecked] = useState<boolean>(true)
	useEffect(() => {
		setIsChecked(!!props.checked)
	}, [])
	return (
		<RadioButtonContainer>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => {
					setIsChecked(!isChecked)

					props.onChange(!isChecked)
				}}
				id="switch"
			/>
			<div className="app">
				<div className="body">
					<label for="switch">
						<div className="toggle"></div>
						<div className="names">
							<p className="light">Light</p>
							<p className="dark">Dark</p>
						</div>
					</label>
				</div>
			</div>
		</RadioButtonContainer>
	)
}

export default ThemeToggler
