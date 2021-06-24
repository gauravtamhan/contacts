import { useState, useEffect } from 'react';

function useWindowSize(includeListener = true) {
    const [isSmall, setIsSmall] = useState();

    const updateWindowSize = () => {
        setIsSmall(window.innerWidth < 992);
    };

    useEffect(() => {
        updateWindowSize();

        if (includeListener) window.addEventListener('resize', updateWindowSize);

        return () => window.removeEventListener('resize', updateWindowSize);
    }, [includeListener]);

    return isSmall;
}

export default useWindowSize;
