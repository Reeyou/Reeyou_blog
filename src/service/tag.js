import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function addTagName(params) {
  return request('/api/admin/addTagName', {
    method: 'POST',
    body: {
      ...params
    }
  })
}

export async function getTagList(params) {
  return request(`/api/admin/getTagList?${formatParam(params)}`)
}

export async function deleteTagName(parmas) {
  return request(`/api/admin/deleteTagName?${formatParam(parmas)}`)
}

export async function updateTagName(params) {
  return request('/api/admin/updateTagName', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
