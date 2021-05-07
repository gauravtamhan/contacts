import React, { useState, useEffect } from 'react';
import SearchField from './SearchField';
import SectionList from './SectionList';

const sanitize = (str) => str.replace(/[^a-zA-Z ]/g, '');

function ContactList({ contacts, selectedContactId, setSelectedContactId }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [list, setList] = useState(contacts);

    useEffect(() => {
        const search = () => {
            const cleanedSearchTerm = sanitize(searchTerm);
            const regex = cleanedSearchTerm.split('').join('.*');
            const temp = contacts.filter((obj) =>
                `${obj.name.first} ${obj.name.last}`.match(new RegExp(regex, 'i'))
            );

            setList(temp);
            setSelectedContactId(temp[0]?.id.value);
        };

        search();
    }, [searchTerm, contacts, setSelectedContactId]);

    const buildDataSource = () => {
        const result = list.reduce((acc, curr) => {
            const title = curr.name.last[0];
            // eslint-disable-next-line no-param-reassign
            if (!acc[title]) acc[title] = { title, data: [curr] };
            else acc[title].data.push(curr);
            return acc;
        }, {});
        return Object.values(result);
    };

    return (
        <>
            <SearchField
                searchTerm={searchTerm}
                handleChange={(e) => setSearchTerm(e.target.value)}
            />
            <SectionList
                data={buildDataSource()}
                selectedContactId={selectedContactId}
                setSelectedContactId={setSelectedContactId}
            />
        </>
    );
}

export default ContactList;
