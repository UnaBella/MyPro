import request from '@/utils/request'

export function getHomeData(data) {
  console.log('getHomeData', data)
  return request({
    url: '/llback/HomePage/AllMessage',
    method: 'post',
    data
  })
}
