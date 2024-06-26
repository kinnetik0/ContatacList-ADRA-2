const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/ADRA/contacts");
					if (!response.ok) {
						throw new Error("HTTP error " + response.status);
					}
					let data = await response.json();
					setStore({ contacts: data.contacts });
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},

			addContact: async contact => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/ADRA/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					});
					if (!response.ok) {
						throw new Error("HTTP error " + response.status);
					}
					getActions().getContacts();
				} catch (error) {
					console.error("Error adding contact:", error);
				}
			},

			updateContact: async (id, updatedContact) => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/ADRA/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					});
					if (!response.ok) {
						throw new Error("HTTP error " + response.status);
					}
					getActions().getContacts();
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},

			deleteContact: async id => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/ADRA/contacts/${id}`, {
						method: "DELETE"
					});
					if (!response.ok) {
						throw new Error("HTTP error " + response.status);
					}
					getActions().getContacts();
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			}
		}
	};
};

export default getState;
