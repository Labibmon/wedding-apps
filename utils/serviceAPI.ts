import { publicRuntimeConfig } from "./configNext"
import _ from 'lodash'

export const baseApi: string = _.get(publicRuntimeConfig, 'apiUrl') || 'http://localhost:3000/api'