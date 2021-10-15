import {
	Box,
	Flex,
	Text,
	Stack,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Button,
	Textarea,
} from "@chakra-ui/react";

const Contacto = () => (
	<Flex
		direction={["column", "row", "row", "row"]}
		w={["82%", "85%", "95%", "98%"]}
		paddingLeft={["15px", "65px", "75px", "100px"]}
		paddingTop={["5px", "65px", "75px", "24px"]}
		margin="25px"
	>
		<Stack
			bgColor="#2F3438"
			direction="column"
			boxShadow="dark-lg"
			color="white"
			padding="50px"
			fontWeight="light"
			letterSpacing="1px"
			marginLeft="30px"
			margin="5px"
			spacing={4}
			minH={["57vw", "58vw", "50vw", "6vw"]}
			fontSize={["27px", "36px", "42px", "44px"]}
			w={["99%", "90%", "95%", "43%"]}
		>
			<Text paddingLeft="5px">Redes Sociales</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box bg="#87929E" w="100%" p={3} color="white">
				<Text
					paddingTop="1px"
					color="black"
					margin="15px"
					fontSize={["12px", "17px", "20px", "21px"]}
				>
					<Button colorScheme="blue" variant="solid">
						Linkedln
					</Button>
				</Text>
			</Box>
			<Box bg="#87929E" w="100%" p={3} color="white">
				<Text
					paddingTop="1px"
					color="black"
					margin="15px"
					fontSize={["12px", "17px", "20px", "21px"]}
				>
					<Button colorScheme="blue" variant="solid">
						Facebook
					</Button>
				</Text>
			</Box>
			<Box bg="#87929E" w="100%" p={3} color="white">
				<Text
					paddingTop="1px"
					color="black"
					margin="15px"
					fontSize={["12px", "17px", "20px", "21px"]}
				>
					<Button colorScheme="blue" variant="solid">
						Twitter
					</Button>
				</Text>
			</Box>
			<Box bg="#87929E" w="100%" p={3} color="white">
				<Text
					paddingTop="1px"
					color="black"
					margin="15px"
					fontSize={["12px", "17px", "20px", "21px"]}
				>
					<Button colorScheme="blue" variant="solid">
						Correo Electronico
					</Button>
				</Text>
			</Box>
			<Box bg="#87929E" w="100%" p={3} color="white">
				<Text
					paddingTop="1px"
					color="black"
					margin="15px"
					fontSize={["12px", "17px", "20px", "21px"]}
				>
					<Button colorScheme="blue" variant="solid">
						Github
					</Button>
				</Text>
			</Box>
		</Stack>
		<Stack
			bgColor="#2F3438"
			direction="column"
			boxShadow="dark-lg"
			color="white"
			padding="50px"
			fontWeight="light"
			letterSpacing="1px"
			marginLeft="30px"
			margin="5px"
			spacing={4}
			minH={["57vw", "58vw", "50vw", "6vw"]}
			fontSize={["27px", "36px", "42px", "44px"]}
			w={["99%", "90%", "95%", "43%"]}
		>
			<Text paddingLeft="5px">Contacto</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box bg="#87929E" w="100%" p={5} color="white">
				<Stack
					margin="5px"
					direction="column"
					spacing={0}
					padding="2px"
					w={["99%", "90%", "95%", "100%"]}
				>
					<FormControl id="first-name" isRequired>
						<FormLabel>Nombre</FormLabel>
						<Input placeholder="" />
					</FormControl>
					<FormControl id="email" isRequired>
						<FormLabel paddingTop="20px">Correo Electronico</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormLabel paddingTop="20px">Mensaje</FormLabel>
					<Textarea placeholder="Agrega tu mensaje" />
					<Button colorScheme="blue" variant="solid">
						Enviar
					</Button>
				</Stack>
			</Box>
		</Stack>
	</Flex>
);
export default Contacto;
