import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode');

    useEffect(() => {
        let body = document.getElementsByTagName("body");
        if (value) {
            body.classList.add(value):
        } else {
                body.classList.remove(value);
            }
    },[value])

    return [value, setValue];

}
