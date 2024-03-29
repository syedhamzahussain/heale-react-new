import { useCallback, useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback(() => setState((prevState) => !prevState), []);

    return [state, toggle];
};

export default useToggle;