import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Contacto from "../components/Contacto";

export default function Contactos() {
	return (
		<Box w="100%" minH="100vh" h="auto" bg="#87929E">
			<main>
				<div>
					<Navbar />
					<Contacto />
				</div>
			</main>
		</Box>
	);
}
