/**
 * Peticion HTTP
 */
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uM78vBf0nGy73OrLFKHshPyzcqzwQHHB`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifsData = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.original.url
        }
    });

    console.log(gifsData);
    return gifsData;
}