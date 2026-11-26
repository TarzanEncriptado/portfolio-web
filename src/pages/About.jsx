import { Container, Heading, Text, VStack, Box, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

function About() {
  const skills = [
    {
      icon: FaReact,
      title: 'Frontend',
      description: 'React, HTML, CSS, JavaScript',
    },
    {
      icon: FaNodeJs,
      title: 'Backend',
      description: 'Node.js, Express, NestJS',
    },
    {
      icon: FaDatabase,
      title: 'Database',
      description: 'MongoDB, PostgreSQL',
    },
  ]

  return (
    <Container maxW="container.lg" py={20}>
      <VStack spacing={10} align="start">
        <Box>
          <Heading mb={6}>Sobre Mim</Heading>
          <Text fontSize="lg" color="gray.600">
            Sou uma desenvolvedora Full Stack com experiência em criar aplicações web
            modernas e escaláveis. Minha paixão é resolver problemas complexos através
            de soluções tecnológicas elegantes e eficientes.
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="lg" mb={8}>Habilidades</Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            {skills.map((skill) => (
              <Box key={skill.title} p={6} boxShadow="md" borderRadius="lg">
                <Icon as={skill.icon} w={10} h={10} color="blue.500" mb={4} />
                <Heading size="md" mb={2}>{skill.title}</Heading>
                <Text color="gray.600">{skill.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default About
