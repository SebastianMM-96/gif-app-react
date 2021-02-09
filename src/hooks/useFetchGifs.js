import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(()=>{
        /**Traer las imagenes */
        getGifs(category)
            .then(imgs => {
                    setState({
                        data : imgs,
                        loading : false
                    });
            })
    }, [])

    return state;
}