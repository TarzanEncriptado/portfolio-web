import { useState } from 'react'
import {
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Aqui você pode adicionar a lógica para enviar o email
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado pelo contato. Retornarei em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading>Entre em Contato</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                rows={6}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" w="100%">
              Enviar Mensagem
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Contact
