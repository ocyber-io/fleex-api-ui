import { UserFilterInterface, UserFilterResponseInterface } from '../interfaces'
import { AxiosPromise } from 'axios'
import { axiosInstance } from './axiosinstance'

export class StreamOutput {
  static list(data: {
    filter: UserFilterInterface[]
  }): AxiosPromise<UserFilterResponseInterface[]> {
    return axiosInstance({
      url: '/user/filter',
      method: 'post',
      data
    })
  }
}
