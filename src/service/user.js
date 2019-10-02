import request from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function login(params) {
  return request('/api/admin/login', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function refreshToken() {
  return request('/api/admin/refreshToken')
}