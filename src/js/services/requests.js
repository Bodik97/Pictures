const postData = async (url, data) => {   //асинхронна операція . тому добавили await
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text(); //ця частина також запускається асинхронно , тому добавили await
};

const getResource = async (url) => {   //асинхронна операція . тому добавили await
    let res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could you not fetch ${url}, status: ${res.status}`);
    }

    return await res.text(); //ця частина також запускається асинхронно , тому добавили await
};

export {postData, getResource};