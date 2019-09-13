import request from '@/utils/request'

export async function upload(params) {
  return request('/api/upload', {
    method: 'POST',
    body: {
      ...params
    }
  })
}