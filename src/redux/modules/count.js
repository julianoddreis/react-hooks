import { getCount } from '../../services'
const LOAD_COUNT = 'LOAD_COUNT'
const SET_LOADING = 'SET_LOADING'

const initialState = {
  loading: true,
  count: {
    todo: 0,
    done: 0
  }
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_COUNT:
      return {
        ...state,
        loading: false,
        count: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export const loadCount = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: SET_LOADING, payload: true })
    getCount()
      .then(res => {
        dispatch({ type: LOAD_COUNT, payload: res.data })
        resolve()
      })
      .catch(err => reject(err))
      .finally(() => dispatch({ type: SET_LOADING, payload: false }))
  })
