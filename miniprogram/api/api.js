import { request } from "../utils/require";

export const apiGetNavList = () => request({
  url: '/nav/get',
  method: 'POST'
})

export const apiGetNewsList = (params) => request({
  url: '/news/get',
  method: 'POST',
  data: params
}) 


export const apiGetNewsDetail = (params) => request({
  url: '/news/detail',
  method: 'POST',
  data: params
})

export const apiGetProductList = (params) => request({
  url: '/product/getlist',
  method: 'POST',
  data: params
}) 


export const apiGetProductDetail = (params) => request({
  url: '/product/detail',
  method: 'POST',
  data: params
})