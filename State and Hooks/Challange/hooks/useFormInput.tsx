import { useState } from "react";

const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (text: string) => {
        setValue(text);
    };

    return {
        value,
        onChangeText: handleChange,
    };
}

export default useFormInput;
