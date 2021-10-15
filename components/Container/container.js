import { Divider, Stack, Flex, Text, Image, UnorderedList } from "@chakra-ui/react";

const container = () => (
	<Flex
		direction={["column", "column", "column", "row"]}
		w={["85%", "85%", "85%", "92%"]}
		paddingLeft={["2px", "65px", "75px", "100px"]}
		paddingTop={["2px", "65px", "75px", "25px"]}
		margin="39px"
	>
		<Image
			src="https://media-exp1.licdn.com/dms/image/C4E03AQECg5KFTw5vBg/profile-displayphoto-shrink_200_200/0/1629295349810?e=1639008000&v=beta&t=v1aVZs6N5j7VCcapk3f572kekdZnOZdcEPxIHSLEiO8"
			alt="Raymundo-Cabrera"
			direction="column"
			boxShadow="dark-lg"
			objectFit="cover"
			boxSize={["99%", "82%", "90%", "35%"]}
		/>

		<Stack
			bgColor="#2F3438"
			direction="column"
			boxShadow="dark-lg"
			color="white"
			padding="40px"
			fontWeight="light"
			letterSpacing="1px"
			spacing={4}
			h={["105vw", "68vw", "68vw", "30vw"]}
			fontSize={["27px", "36px", "42px", "58px"]}
			w={["99%", "90%", "95%", "59%"]}
		>
			<Text paddingLeft="34px">Raymundo Cabrera Mena</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Stack direction="row" spacing={0} padding="5px">
				<Divider variant="solid" orientation="vertical" h="210px" />
				<UnorderedList>
					<Text
						color="white"
						fontWeight="light"
						padding="30px"
						paddingTop="15px"
						fontSize={["18px", "22px", "27px", "30px"]}
					>
						Universidad Autónoma del Estado de Hidalgo
					</Text>

					<Text
						padding="30px"
						paddingTop="0px"
						fontSize={["18px", "22px", "27px", "30px"]}
					>
						Estudiante de Ingenieria de Software
					</Text>
				</UnorderedList>
			</Stack>
		</Stack>
	</Flex>
);
export default container;
