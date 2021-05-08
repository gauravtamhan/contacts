import { useState, useEffect } from 'react';

function useColorScheme() {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const updateDarkMode = (event) => {
        setDarkMode(event.matches);
    };

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', updateDarkMode);

        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', updateDarkMode);
        };
    }, []);

    return darkMode;
}

export default useColorScheme;
