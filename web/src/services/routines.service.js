/* eslint-disable import/no-anonymous-default-export */
import http from './base-api'

const list = () => http.get('/routines')
  .then((res) => res.data)

const detail = (id) => http.get(`/routines/${id}`);

export default {
  list,
  detail
}