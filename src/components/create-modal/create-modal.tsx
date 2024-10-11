import { useEffect, useState } from "react"
import { useBarberProductDataMutate } from "../../hooks/useBarberProductMutate";
import { BarberProductData } from "../../interface/BaberProductData";
import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue (value: unknown): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal} : ModalProps) {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess, isLoading}= useBarberProductDataMutate();
    const submit = () => {
        const barberProductData: BarberProductData = {
            image,
            title,
            description,
            price
        }
        mutate(barberProductData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Novo produto/serviço</h2>
                <form className="input-container">
                    <Input label="image" value={image} updateValue={setImage}/>
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="description" value={description} updateValue={setDescription}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                </form>
                <button onClick={submit} className="btn-secondary">{isLoading ? 'Salvando...' : 'Salvar'}</button>
            </div>
        </div>
    )
}