import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from '../types'

export const name = 'userAuthActions'

export function fetch(email, password) {
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email,
    password
  }
}

export function* executeFetchToken({ email, password }) {
  const url = api.fetch.formatUrl()
  const body = api.fetch.serialize(email, password)
  try {
    const res = yield call(api.fetch.request, url, body)
    yield put(fetchSuccess(res.data.message))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess(message) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    message
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken)
]

export default sagas
