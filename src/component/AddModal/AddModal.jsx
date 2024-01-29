// AddModal.jsx
import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddModal = ({ isOpen, onAdd, onCancel }) => {
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductImg, setNewProductImg] = useState('');

    const handleAddSubmit = () => {
        onAdd({
            name: newProductName,
            price: parseFloat(newProductPrice) || 0,
            img: newProductImg
        });
    };

    const handleAddCancel = () => {
        onCancel();
    };
    
    return (
        <Modal isOpen={isOpen} toggle={handleAddCancel}>
            <ModalHeader toggle={handleAddCancel}>Agregar Libro</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="newProductName">Nombre:</Label>
                        <Input
                            type="text"
                            name="newProductName"
                            id="newProductName"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newProductPrice">Precio:</Label>
                        <Input
                            type="text"
                            name="newProductPrice"
                            id="newProductPrice"
                            value={newProductPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newProductImg">URL de la imagen:</Label>
                        <Input
                            type="text"
                            name="newProductImg"
                            id="newProductImg"
                            value={newProductImg}
                            onChange={(e) => setNewProductImg(e.target.value)}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleAddSubmit}>Agregar</Button>{' '}
                <Button color="secondary" onClick={handleAddCancel}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
};
export default AddModal;