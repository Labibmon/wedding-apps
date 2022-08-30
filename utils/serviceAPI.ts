import getConfig from "next/config"
import _ from 'lodash'

const { publicRuntimeConfig } = getConfig() || {}
export const baseApi: string = _.get(publicRuntimeConfig, 'apiUrl') || 'http://localhost:3000/api'