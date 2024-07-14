function Get(url, options) {
    return new Promise((resolve, reject) => {
        get(url, options, (res, err) => {
            if (res && res.res.statusCode === 200) {
                resolve(res.body.json());
            }
            reject("error");
        });
    });
}

function Post(url, query, options) {
    return new Promise((resolve, reject) => {
        get(url, query, options, (res, err) => {
            if (res && res.res.statusCode === 200) {
                resolve(res.body.json());
            }
            reject("error");
        });
    });
}

export { Get, Post };
