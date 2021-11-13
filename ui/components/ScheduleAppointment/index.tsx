import Button from "@components/Button"
import Flex from "@components/Flex"
import { Block } from "@components/Flex/style"
import Typography from "@components/Typography"
import React from "react"

function ScheduleAppointment() {
	return (
		<Flex direction={"column"}>
			<Typography type={"lightText"}>Schedule an appointment online</Typography>
			<Typography type={"h2"}>We’ll pick it up and bring it back.</Typography>

			<Block style={{ padding: 10 }}>
				<Flex>
					<Typography type={"h4"}>Enter your vehicle information</Typography>
				</Flex>
				<Flex top={30}>
					<Typography type={"h4"}>Choose your appointment date and time</Typography>
				</Flex>
				<Flex top={30}>
					<Typography type={"h4"}>Review and book your appointmet</Typography>
				</Flex>
				<Flex top={30}>
					<Button width={"100%"} label={"Schedule an Appointment"} btnType={"primary"} />
				</Flex>
			</Block>
		</Flex>
	)
}

export default ScheduleAppointment
