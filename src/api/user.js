import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function login (params) {
    return request('/api/login', {
        method: 'POST',
        body: {
            ...params
        }
    })
}
export async function register (params) {
    return request('/api/register', {
        method: 'POST',
        body: {
            ...params
        }
    })
}
export async function getUserList (params) {
    return request(`/api/getUserList?${formatParam(params)}`)
}
