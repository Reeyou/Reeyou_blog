import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function addTagName (params) {
    return request('/api/addTagName', {
        method: 'POST',
        body: {
            ...params
        }
    })
}

export async function getTagList (params) {
    return request(`/api/getTagList?${formatParam(params)}`)
}

export async function deleteTagName (parmas) {
    return request(`/api/deleteTagName?${formatParam(parmas)}`)
}

export async function updateTagName (params) {
    return request('/api/updateTagName', {
        method: 'POST',
        body: {
            ...params
        }
    })
}
