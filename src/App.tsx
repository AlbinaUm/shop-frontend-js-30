import {Container, CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import Products from "./features/products/Products.tsx";
import NewProducts from "./features/products/NewProducts.tsx";

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/products/new" element={<NewProducts/>}/>
            <Route path="*" element={<h1>Not found page</h1>}/>
          </Routes>
        </Container>
      </main>
    </>
  )
};

export default App
