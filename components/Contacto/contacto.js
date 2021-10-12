import { Box, Flex, Text, Center, Wrap, WrapItem, HStack, Button, Link } from "@chakra-ui/react";

const Contacto = () => (
	<Flex w="100%" h="100%">
		<Box h="100px" w="100%" padding="30px" bg="#202327" fontSize="27px" color="white">
			<Text textAlign="center">Contacto</Text>

			<Center padding="250px">
				<Wrap spacing="35px" justify="center">
					<WrapItem>
						<HStack>
							<Button colorScheme="facebook">
								<Link href="https://www.facebook.com/raymundo.cabrera.54/">
									Facebook
								</Link>
							</Button>
						</HStack>
					</WrapItem>
					<WrapItem>
						<HStack>
							<Button colorScheme="twitter">
								<Link href="https://twitter.com/Raymundoc13">Twitter</Link>
							</Button>
						</HStack>
					</WrapItem>
					<WrapItem>
						<HStack>
							<Button bgColor="black">
								<Link href="https://github.com/RaymundoCabreraM">Github</Link>
							</Button>
						</HStack>
					</WrapItem>
					<WrapItem>
						<HStack>
							<HStack>
								<Button bgColor="green.600">
									<Link href>Correo Electronico</Link>
								</Button>
							</HStack>
						</HStack>
					</WrapItem>
				</Wrap>
			</Center>
		</Box>
	</Flex>
);
export default Contacto;
