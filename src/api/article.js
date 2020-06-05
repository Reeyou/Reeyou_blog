import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function addArticle (params) {
    return request('/api/addArticle', {
        method: 'POST',
        body: {
            ...params
        }
    })
}
export async function getArticleList (params) {
    return request(`/api/getArticleList?${formatParam(params)}`)
}
