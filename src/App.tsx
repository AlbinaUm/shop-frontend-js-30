import {Container, CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import NewProducts from "./features/products/NewProducts.tsx";
import Products from "./features/products/Products.tsx";
import Register from "./features/users/Register.tsx";
import Login from "./features/users/Login.tsx";
import {ToastContainer} from "react-toastify";
import ProtectedRouter from "./components/UI/ProtectedRouter/ProtectedRouter.tsx";
import {useAppSelector} from "./app/hooks.ts";
import {selectUser} from "./features/users/usersSelectors.ts";

const App = () => {
    const user = useAppSelector(selectUser);

  return (
    <>
      <CssBaseline />
        <ToastContainer />
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products/new" element={
                <ProtectedRouter isAllowed={Boolean(user)}><NewProducts/></ProtectedRouter>
            }/>
            <Route path="*" element={<h1>Not found page</h1>}/>
          </Routes>
        </Container>
      </main>
    </>
  )
};

export default App
