import { account } from './type'
import syqRequest from '..'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: account): Promise<any> {
  return syqRequest.request({
    url: LoginAPI.AccountLogin,
    method: 'post',
    data: account
  })
}

export function getUserById(id: number): Promise<any> {
  return syqRequest.request({
    url: LoginAPI.UserInfo + id,
    method: 'get'
  })
}

export function getUserMenus(id: number): Promise<any> {
  return syqRequest.request({
    url: LoginAPI.UserMenus + id + '/menu',
    method: 'get'
  })
}
