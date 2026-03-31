const isProd = window.location.hostname !== 'localhost'
export const asset = (path) => isProd ? `/Portfolio/${path}` : `/${path}`