export const API_URL_BASE = process.env.VUE_APP_API_URL;

export const API_URL_STATS = (id: number) => API_URL_BASE + '/stats/' + id;
export const API_URL_TIPS = API_URL_BASE + '/tips';
export const API_URL_NEWS = API_URL_BASE + '/news';