import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Batman"])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Venom'])
    // }

    return (
        <div>
            <h1 className="animate__animated animate__bounceInDown">GIF App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

