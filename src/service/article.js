import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function addArticle(params) {
  return request('/api/admin/addArticle', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function getArticleList(params) {
  return request(`/api/admin/getArticleList?${formatParam(params)}`)
}