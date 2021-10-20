import {
	Divider,
	Stack,
	Flex,
	Text,
	Box,
	UnorderedList,
	Progress,
	ListItem,
} from "@chakra-ui/react";

const body = () => (
	<Flex
		direction={["column", "column", "row", "row"]}
		w={["86%", "87%", "95%", "98%"]}
		paddingLeft={["6px", "26px", "30px", "100px"]}
		paddingTop={["2px", "26px", "55px", "20px"]}
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
			w={["99%", "100%", "95%", "43%"]}
		>
			<Text paddingLeft="5px">Acerca de mi</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box bg="#87929E" boxShadow="dark-lg" w="100%" p={6} color="white">
				<Text margin="15px" fontSize={["12px", "17px", "20px", "21px"]}>
					Actualmente cursando el último año de la carrera, con los conocimientos
					necesarios para la realización de proyectos de software.
				</Text>

				<Text paddingTop="1px" margin="15px" fontSize={["12px", "17px", "20px", "21px"]}>
					Me considero una persona autodidacta, disciplinado, responsable, creativo,
					organizado, puntual, comprometido y colaborativo.
				</Text>
			</Box>
			<Text paddingLeft="5px">Formacion Academica</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box bg="#87929E" w="100%" boxShadow="dark-lg" p={6} color="white">
				<Text
					margin="10px"
					fontWeight="bold"
					paddingTop="1px"
					fontSize={["12px", "17px", "20px", "20px"]}
				>
					Universidad Autonoma del Estado de Hidalgo.
				</Text>
				<Text margin="15px" paddingLeft="10px" fontSize={["12px", "17px", "20px", "21px"]}>
					2017-2021, Licenciatura en Ingenieria de Software.
				</Text>
				<Text margin="15px" paddingLeft="10px" fontSize={["12px", "17px", "20px", "18px"]}>
					Promedio: 9.06
				</Text>
				<Divider variant="solid" h="5px" orientation="horizontal" />
				<Text
					margin="10px"
					fontWeight="bold"
					paddingTop="15px"
					fontSize={["12px", "17px", "20px", "20px"]}
				>
					Centro de Estudios Tecnologicos Industriales y de Servicios No. 91
				</Text>
				<Text margin="15px" paddingLeft="10px" fontSize={["12px", "17px", "20px", "21px"]}>
					2014-2017, B.T. en Programacion.
				</Text>
				<Text margin="15px" paddingLeft="10px" fontSize={["12px", "17px", "20px", "18px"]}>
					Promedio: 7.5
				</Text>
			</Box>

			<Text paddingLeft="5px">Experiencia</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box bg="#87929E" w="100%" p={6} boxShadow="dark-lg" color="white">
				<Text fontWeight="bold" margin="5px" fontSize={["13px", "17px", "20px", "20px"]}>
					Proyecto: Desarrollo de Apps Moviles.
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "18px"]}>
					Agencia Digital Terrabionic S.A. de C.V - UAEH Servicio Social
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "17px"]}>
					Enero - Julio 2021
				</Text>
				<Divider variant="solid" h="5px" orientation="horizontal" />
				<Text fontWeight="bold" margin="5px" fontSize={["13px", "17px", "20px", "20px"]}>
					Proyecto: ASIST-PROY
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "18px"]}>
					RAXE-TECH - UAEH
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "17px"]}>
					Agosto - Diciembre 2020
				</Text>
				<Divider variant="solid" h="5px" orientation="horizontal" />
				<Text fontWeight="bold" margin="5px" fontSize={["13px", "17px", "20px", "20px"]}>
					Proyecto: Costeo de Mano de Obra
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "18px"]}>
					Grupo Holcim - SQDesarrollo
				</Text>
				<Text margin="10px" fontSize={["11px", "17px", "20px", "17px"]}>
					Enero - Julio 2019
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
			marginLeft="5px"
			margin="5px"
			spacing={4}
			minH={["57vw", "58vw", "50vw", "6vw"]}
			fontSize={["27px", "36px", "42px", "44px"]}
			w={["99%", "100%", "95%", "43%"]}
		>
			<Text paddingLeft="5px">Habilidades Tecnicas</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Box
				bg="#87929E"
				w="100%"
				p={4}
				boxShadow="dark-lg"
				color="white"
				paddingLeft="25px"
				padding="15px"
				fontWeight="semibold"
				fontSize={["17px", "22px", "22px", "22px"]}
			>
				<Text>Desarrollo Web</Text>

				<UnorderedList
					margin="25px"
					fontWeight="light"
					spacing="20px"
					fontSize={["12px", "17x", "15px", "18px"]}
				>
					<ListItem>
						HTML5
						<Progress colorScheme="messenger" size="md" value={90} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>90%</Text>
					</ListItem>

					<ListItem>
						CSS - Bootstrap <Progress colorScheme="messenger" size="md" value={85} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>85%</Text>
					</ListItem>
					<ListItem>
						JavaScript - ES6 <Progress colorScheme="messenger" size="md" value={70} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>70%</Text>
					</ListItem>
					<ListItem>
						React - Redux <Progress colorScheme="messenger" size="md" value={70} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>70%</Text>
					</ListItem>
					<ListItem>
						Next.Js - Chakra UI
						<Progress colorScheme="messenger" size="md" value={60} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>60%</Text>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box
				bg="#87929E"
				w="100%"
				p={4}
				boxShadow="dark-lg"
				color="white"
				paddingLeft="25px"
				padding="15px"
				fontWeight="semibold"
				fontSize={["17px", "23px", "23px", "24px"]}
			>
				<Text>Desarrollo de apps moviles</Text>
				<UnorderedList
					margin="25px"
					fontWeight="light"
					fontSize={["12px", "17px", "15px", "18px"]}
				>
					<ListItem>
						Kotlin Android Jetpack
						<Progress colorScheme="messenger" size="md" value={60} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>60%</Text>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box
				bg="#87929E"
				w="100%"
				p={2}
				boxShadow="dark-lg"
				color="white"
				paddingLeft="25px"
				padding="15px"
				fontWeight="semibold"
				fontSize={["17px", "23px", "23px", "24px"]}
			>
				<Text>Desarrollo de Software</Text>
				<UnorderedList
					margin="25px"
					spacing="20px"
					fontWeight="light"
					fontSize={["12px", "17px", "15px", "18px"]}
				>
					<ListItem>
						C , C++ <Progress colorScheme="messenger" size="md" value={70} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>70%</Text>
					</ListItem>
					<ListItem>
						Java <Progress colorScheme="messenger" size="md" value={75} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>75%</Text>
					</ListItem>
					<ListItem>
						Visual Basic .NET , C #{" "}
						<Progress colorScheme="messenger" size="md" value={85} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>85%</Text>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box
				bg="#87929E"
				w="100%"
				p={2}
				color="white"
				boxShadow="dark-lg"
				paddingLeft="25px"
				padding="15px"
				fontWeight="semibold"
				fontSize={["17px", "17px", "23px", "24px"]}
			>
				<Text>Bases de datos</Text>
				<UnorderedList
					margin="25px"
					fontWeight="light"
					spacing="20px"
					fontSize={["12px", "17px", "15px", "18px"]}
				>
					<ListItem>
						SQL Server , MySql
						<Progress colorScheme="messenger" size="md" value={65} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>65%</Text>
					</ListItem>

					<ListItem>
						NoSQL
						<Progress colorScheme="messenger" size="md" value={45} />
						<Text fontSize={["11px", "13x", "14px", "15px"]}>45%</Text>
					</ListItem>
				</UnorderedList>
			</Box>
		</Stack>
	</Flex>
);
export default body;
