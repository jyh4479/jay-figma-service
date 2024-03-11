import {useState} from "react";

const useModal = () => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(true);
    }

    const onOk = () => {
        setOpen(false);
    }

    const onCancel = () => {
        setOpen(false);
    }

    return {open, onClick, onOk, onCancel};
}

export default useModal;