import React, { useState, useEffect } from 'react';
import Details from './Details';
import Empty from './Empty';

function ContactDetails({ selectedContact }) {
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

    return selectedContact ? <Details contact={selectedContact} /> : <Empty darkMode={darkMode} />;
}

export default ContactDetails;
