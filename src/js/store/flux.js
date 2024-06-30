const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            agenda: "ADRA",
            contacts: [],
        },
        actions: {
            getContacts: async () => {
                try {
                    const agendaName = getStore().agenda;
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`
                    );
                    if (response.status === 404) {
                        await getActions().createAgenda();
                    }
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            createAgenda: async () => {
                const agendaName = getStore().agenda;
                try {
                    await fetch(
                        `https://playground.4geeks.com/contact/agendas/${agendaName}`,
                        {
                            method: "POST",
                        }
                    );
                } catch (error) {
                    console.error("Error creating agenda:", error);
                }
            },

            addContact: async (contact) => {
                try {
                    const agendaName = getStore().agenda;
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(contact),
                        }
                    );
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            updateContact: async (id, updatedContact) => {
                try {
                    const agendaName = getStore().agenda;
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(updatedContact),
                        }
                    );
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const agendaName = getStore().agenda;
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${id}`,
                        {
                            method: "DELETE",
                        }
                    );
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;
