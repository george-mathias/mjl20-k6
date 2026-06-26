const config = JSON.parse(open("../config/config.local.json"));

export function retornaBaseUrl() {
    return __ENV.BASE_URL || config.baseUrl
}