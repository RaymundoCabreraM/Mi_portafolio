import { Divider, Stack, Flex, Text, Image, UnorderedList } from "@chakra-ui/react";

const container = () => (
	<Flex
		direction={["column", "column", "column", "row"]}
		w={["88%", "88%", "92%", "92%"]}
		paddingLeft={["2px", "25px", "50px", "100px"]}
		paddingTop={["2px", "65px", "75px", "25px"]}
		margin="27px"
	>
		<Image
			src="https://media-exp1.licdn.com/dms/image/C4E03AQECg5KFTw5vBg/profile-displayphoto-shrink_200_200/0/1629295349810?e=1639008000&v=beta&t=v1aVZs6N5j7VCcapk3f572kekdZnOZdcEPxIHSLEiO8"
			alt="Raymundo-Cabrera"
			direction="column"
			boxShadow="dark-lg"
			boxSize={["101%", "95%", "95%", "36%"]}
			h={["110vw", "68vw", "28vw", "32vw"]}
		/>

		<Stack
			bgColor="#2F3438"
			direction="column"
			boxShadow="dark-lg"
			color="white"
			padding="25px"
			fontWeight="light"
			letterSpacing="1px"
			spacing={4}
			h={["110vw", "68vw", "28vw", "32vw"]}
			fontSize={["28px", "35px", "45px", "52px"]}
			w={["100%", "95%", "98%", "59%"]}
		>
			<Text paddingLeft="35px">Raymundo Cabrera Mena</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Stack direction="row" spacing={0} padding="0px">
				<UnorderedList>
					<Text
						color="white"
						fontWeight="light"
						padding="15px"
						paddingTop="10px"
						fontSize={["17px", "25px", "20px", "27px"]}
					>
						Universidad Autónoma del Estado de Hidalgo
					</Text>

					<Text padding="15px" fontSize={["17px", "25px", "20px", "27px"]}>
						Estudiante de Ingenieria de Software
					</Text>
				</UnorderedList>
			</Stack>
		</Stack>
	</Flex>
);
export default container;
