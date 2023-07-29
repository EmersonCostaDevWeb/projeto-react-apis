import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    Flex,
    Heading
} from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalStateContext } from '../../Global/GlobalStateContex'
export default function ModalPoke() {
    const { isOpen, setIsOpen, controlModal } = useContext(GlobalStateContext)

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    {controlModal === 1 ? (
                        <>
                            <Flex
                                justifyContent={"center"}
                                alignItems={"center"}
                                flexDirection={"column"}
                                w={"450px"} h={"200px"}>
                                <Heading>Gotcha!!</Heading>
                                <Text fontWeight={"bold"}>
                                    O pokémon foi adicionado ao Pokedex
                                </Text>
                            </Flex>
                        </>
                    ) : (
                        <>
                            <Flex w={"450px"} h={"220px"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                flexDirection={"column"}>
                                <Heading>Oh, no!</Heading>
                                <Text fontWeight={"bold"}>
                                    O pokémon foi removido da Pokedex
                                </Text>
                            </Flex>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
        </>
    )
}