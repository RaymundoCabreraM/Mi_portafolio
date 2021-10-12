import {
	Box,
	Divider,
	Stack,
	Center,
	Container,
	Text,
	Image,
	UnorderedList,
} from "@chakra-ui/react";

const container = () => (
	<Container w="100%" minH="75vh" h="auto" m="80px">
		<Box
			d="flex"
			flexDirection="row"
			alignContent="space-evenly"
			w="315%"
			minH="61vh"
			// bgColor="red.200"
		>
			<Center />
			<Image
				src="https://media-exp1.licdn.com/dms/image/C4E03AQECg5KFTw5vBg/profile-displayphoto-shrink_200_200/0/1629295349810?e=1639008000&v=beta&t=v1aVZs6N5j7VCcapk3f572kekdZnOZdcEPxIHSLEiO8"
				alt="Raymundo-Cabrera"
				boxSize="35%"
			/>
			<Center />

			<Box bgColor="#2F3438" flexGrow="4" maxH="535px" maxW="100%">
				<Text
					w="auto"
					h="100px"
					margin="40px"
					color="white"
					fontSize="64px"
					padding="30px"
					// bgColor="red.100"
					fontStyle="normal"
					fontFamily="sans-serif"
				>
					Raymundo Cabrera Mena
				</Text>
				<Divider orientation="horizontal" />

				<Stack direction="row" h="350px" p={14}>
					<Divider orientation="vertical" />
					<UnorderedList
						fontSize="32px"
						color="white"
						padding="15px"
						//	bgColor="red.100"
						fontStyle="normal"
						fontFamily="sans-serif"
					>
						<Text>Universidad Autonoma del Estado de Hidalgo</Text>
						<Text>Estudiante de Ingenieria de Software</Text>
					</UnorderedList>
				</Stack>
			</Box>
		</Box>
	</Container>
);
export default container;
