import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import { ContactList } from "./views/contactList";
import { AddContact } from "./views/AddContact";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<ContactList />} />
                        <Route path="/add-contact" element={<AddContact />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
