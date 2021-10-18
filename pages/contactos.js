import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Contacto from "../components/Contacto";

import Footer from "../components/Footer/footer";

export default function Contactos() {
	return (
		<Box bg="#87929E">
			<div>
				<Navbar />
				<Contacto />
			</div>
			<footer>
				<Footer />
			</footer>
		</Box>
	);
}
