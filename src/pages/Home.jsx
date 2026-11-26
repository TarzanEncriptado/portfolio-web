import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Home() {
  return (
    <Container maxW="container.lg" py={20}>
      <VStack spacing={8} align="start">
        <Heading size="2xl">Olá, eu sou Reynaldo</Heading>
        <Text fontSize="xl" color="gray.600">
          Desenvolvedor Full Stack apaixonada por criar soluções web inovadoras e funcionais.
        </Text>
        <Box>
          <Button
            as={RouterLink}
            to="/projects"
            colorScheme="blue"
            size="lg"
            mr={4}
          >
            Ver Projetos
          </Button>
          <Button
            as={RouterLink}
            to="/contact"
            variant="outline"
            size="lg"
          >
            Contato
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default Home
