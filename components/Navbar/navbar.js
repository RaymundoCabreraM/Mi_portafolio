/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Box, Stack, Flex, useDisclosure, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			fontSize="18px"
			wrap="wrap"
			padding={8}
			bg="#343A40"
			color="white"
			{...props}
		>
			<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
				<HamburgerIcon />
			</Box>

			<Stack
				direction={{ base: "column", md: "row-reverse" }}
				display={{ base: isOpen ? "block" : "none", md: "flex" }}
				width={{ base: "full", md: "auto" }}
				alignItems="center"
				flexGrow={1}
				mt={{ base: 5, md: 0 }}
			>
				<Link href="/contactos" textAlign="center" paddingRight="8">
					Contacto
				</Link>
				<Link href="/proyectos" textAlign="center" paddingRight="8">
					Proyectos
				</Link>
				<Link href="/#" textAlign="center" paddingRight="8">
					Inicio
				</Link>
			</Stack>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 5, md: 0 }}
			/>
		</Flex>
	);
};

export default Navbar;
