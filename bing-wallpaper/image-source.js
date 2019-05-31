const BASE_HOST = 'https://www.bing.com'
const BASE_URL = `${BASE_HOST}/HPImageArchive.aspx`
const START = 0
const COUNT = 10

function addParamsToUrl(params) {
    const pairs = Object.keys(params).map(e => `${e}=${params[e]}`)
    return `${BASE_URL}?${pairs.join('&')}`
}

function getModel(region, callback) {
    const url = addParamsToUrl({
                                 "format": 'js',
                                 "idx": START,
                                 "n": COUNT,
                                 "mkt": region
                             })

    httpGET(url, function (data) {
        const targetUrls = data.images.map(e => {
                                e.url = `${BASE_HOST}/${e.url}`
                                return e
                            })
        callback(targetUrls)
    })
}

function httpGET(url, callback) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange =
            () => {
                if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                    callback(JSON.parse(xmlhttp.responseText))
                }
            }
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
}

