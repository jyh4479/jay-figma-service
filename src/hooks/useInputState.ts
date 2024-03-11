import {FormEvent, useState} from "react";

const useInputState = (initValue: any) => {
    const [value, setValue] = useState(initValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return [value, onChange];
}

export default useInputState;