import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";
import Cards from "../components/Proyectos/cards";

export default function Proyecto() {
	return (
		<Box w="100%" minH="100vh" h="auto" bg="#87929E">
			<div>
				<Navbar />
				<Proyectos />
				<Cards />
			</div>
		</Box>
	);
}
