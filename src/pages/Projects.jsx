import { Container, Heading, SimpleGrid, Box, Text, Image, Link } from '@chakra-ui/react'

function Projects() {
  const projects = [
    {
      title: 'Sistema de Verificação',
      description: 'Sistema de verificação de email usando React e NestJS',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com/yourusername/verification-system',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ]

  return (
    <Container maxW="container.lg" py={20}>
      <Heading mb={10}>Meus Projetos</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image src={project.image} alt={project.title} />
              <Box p={6}>
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text color="gray.600">{project.description}</Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Projects
