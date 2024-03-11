import {useState} from "react";

const useSelectState = (initValue: any) => {
    const [value, setValue] = useState(initValue);

    const onChange = (selectedValue: any) => {
        setValue(selectedValue);
    }

    return [value, onChange]
}

export default useSelectState;