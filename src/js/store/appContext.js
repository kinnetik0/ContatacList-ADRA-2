import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we Conize our context, by default it's just going to be null.
export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions },
                    }),
            })
        );

        useEffect(() => {
            //
            // Llamar a la acción getContacts cuando el componente se monte
            state.actions.getContacts();
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
