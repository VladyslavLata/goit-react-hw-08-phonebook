import { Routes, Route } from "react-router-dom";
import { ContactsPage } from "pages/Contacts";

export const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={ }>
        <Route index element={<Home/>} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path=" login" element={ }/>
        <Route path="register" element={ } />
      </Route>
</Routes>
  )

};
