import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function Home() {
	return (
		<Box w="100%" minH="100vh" h="auto" bg="#87929E">
			<Head>
				<title>Mi portafolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div>
					<Navbar />
					<Container />
				</div>
			</main>
		</Box>
	);
}
