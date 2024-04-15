import {api} from './api.service'

export const POST = async (url, data = null, config = null) => {
    var res = await api.post(url, data, config)
    return res?.data
}

export const PUT = async (url, data = null, config = null) => {
    var res = await api.put(url, data, config)
    return res?.data
}

export const PATCH = async (url, data = null, config = null) => {
    var res = await api.patch(url, data, config)
    return res?.data
}

export const GET = async (url, params, config = null) => {
    var res = await api.get(url, {params}, config)
    return res?.data
}