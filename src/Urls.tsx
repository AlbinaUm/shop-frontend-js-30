import axiosApi from "./axiosApi.ts";
import {useState} from "react";
import {apiURL} from "./constants.ts";


interface Url {
    _id: string;
    originalUrl: string;
    shortUrl: string;
}


const Urls = () => {
    const [urlForm, setUrlForm] = useState('');
    const [data, setData] = useState<Url | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axiosApi.post<Url>('/urls', {url: urlForm});

        if (response.data) {
            setData(response.data);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setUrlForm(e.target.value)} value={urlForm} />
                <button type="submit">Shorten</button>
            </form>

            {data && <>
                <a target="_blank" href={`${apiURL}/urls/${data.shortUrl}`}>{apiURL}/{data.shortUrl}</a>
            </>}
        </div>
    );
};

export default Urls;