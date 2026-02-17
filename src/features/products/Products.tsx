
import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectProducts, selectProductsLoading} from "./store/productsSelectors.ts";
import {useEffect} from "react";
import {fetchProducts} from "./store/productsThunks.ts";
import ProductItem from "./components/ProductItem.tsx";

const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const productsFetchLoading = useAppSelector(selectProductsLoading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Grid container direction='column' spacing={2}>
            <Grid container justifyContent="space-between">
                <Grid size={6}>
                    <Typography variant='h4' sx={{mb: 5}}>
                        Products
                    </Typography>

                    <Grid container direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                        {productsFetchLoading && <CircularProgress />}
                        {(!productsFetchLoading && products.length === 0) ? <Typography variant='h6'>
                           No products yet
                        </Typography> :
                            <>
                             {products.map(product => (
                                 <ProductItem
                                     key={product.id}
                                     title={product.title}
                                     price={product.price}
                                     id={product.id}
                                 />
                             ))}
                            </>
                        }
                    </Grid>
                </Grid>

                <Grid>
                    <Button
                        color='primary'
                        component={NavLink}
                        to='/products/new'
                    >Add product</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Products;