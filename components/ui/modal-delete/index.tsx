import { View, Text } from "react-native";
import React from "react";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "../modal";
import { Center } from "../center";
import { Heading } from "../heading";
import { CloseIcon, Icon } from "../icon";
import { Button, ButtonText } from "../button";
import { Alert } from "react-native";
import { useDeleteUserMutation } from "@/services/api";

const ModalDelete = ({ showModal, onOpenChange, userId }: any) => {

    const [deleteUser] = useDeleteUserMutation();

    const deleteData = async (userId : number) => {
        try{
            await deleteUser(userId).unwrap();
            Alert.alert("Success", "User deleted successfully!"); 
            onOpenChange(false);
        }catch(err) {
            Alert.alert("Error", "Failed to delete user. Please try again.");
        }
    }

    return (
        <Center className="h-[300px]">
        <Modal isOpen={showModal} onClose={onOpenChange} size="md">
            <ModalBackdrop />
            <ModalContent>
            <ModalHeader>
                <Heading size="md" className="text-typography-950">
                Are you sure you want to delete this data?
                </Heading>
                <ModalCloseButton>
                <Icon
                    as={CloseIcon}
                    size="md"
                    className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
                />
                </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
                <Text className="text-typography-900">
                This action cannot be undone. This will permanently delete the
                data and remove your data from our server.
                </Text>
            </ModalBody>
            <ModalFooter>
                <Button
                    action="negative"
                    onPress={() => deleteData(userId)}
                >
                    <ButtonText>Delete It</ButtonText>
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Center>
    );
}

ModalDelete.displayName = 'ModalDelete';

export { ModalDelete };