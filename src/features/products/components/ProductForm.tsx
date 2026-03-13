import {Button, CircularProgress, Grid, MenuItem, TextField} from "@mui/material";
import React, {useEffect, useState} from 'react';
import type {ProductMutation} from "../../../types";
import FileInput from "../../../components/UI/FileInput/FileInput.tsx";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {fetchCategories} from "../../categories/store/categoriesThunks.ts";
import {selectCategories} from "../../categories/store/categoriesSelectors.ts";

interface Props {
    onSubmit: (product: ProductMutation) => void;
    loading?: boolean;
}

const ProductForm: React.FC<Props> = ({onSubmit, loading=false}) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);
    const [form, setForm] = useState<ProductMutation>({
        category: ' ',
        title: '',
        price: '',
        description: '',
        image: null,
    });

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files) {
            setForm(prevState => ({...prevState, [name]: files[0]}));
        }
    };

    return categories && (
        <form
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid container direction="column" spacing={2}>
                <Grid>
                    <TextField
                        select
                        id="category_id" label="Category"
                        value={form.category}
                        onChange={inputChangeHandler}
                        name="category_id"
                    >
                        <MenuItem value=' ' disabled>Select Category</MenuItem>
                        {categories.map(category => (
                            <MenuItem key={category._id} value={category._id}>{category.title}</MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid>
                    <TextField
                        id="title" label="Title"
                        value={form.title}
                        onChange={inputChangeHandler}
                        name="title"
                    />
                </Grid>

                <Grid>
                    <TextField
                        id="price" label="Price"
                        value={form.price}
                        onChange={inputChangeHandler}
                        name="price"
                    />
                </Grid>

                <Grid>
                    <TextField
                        multiline rows={3}
                        id="description" label="Description"
                        value={form.description}
                        onChange={inputChangeHandler}
                        name="description"
                    />
                </Grid>

                <Grid>
                    <FileInput
                        label='image'
                        name='image'
                        onChange={fileInputChangeHandler}
                    />
                </Grid>

                <Grid>
                    <Button disabled={loading} type="submit" color="primary" variant="contained">Create</Button>
                    {loading && <CircularProgress/>}
                </Grid>
            </Grid>
        </form>
    );
};

export default ProductForm;