import request from '@/utils/request';
import type { LogininforType, LogininforListParams } from './data.d';


/* *
 *
 * @author whiteshader@163.com
 * @datetime  2021/09/16
 * 
 * */


// 查询系统访问记录列表
export async function getLogininforList(params?: LogininforListParams) {
  const queryString = new URLSearchParams(params).toString();
  return request(`/api/monitor/logininfor/list?${queryString}`, {
    data: params,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询系统访问记录详细
export function getLogininfor(infoId: number) {
  return request(`/api/monitor/logininfor/${infoId}`, {
    method: 'GET',
  });
}

// 新增系统访问记录
export async function addLogininfor(params: LogininforType) {
  return request('/api/monitor/logininfor', {
    method: 'POST',
    data: params,
  });
}

// 修改系统访问记录
export async function updateLogininfor(params: LogininforType) {
  return request('/api/monitor/logininfor', {
    method: 'PUT',
    data: params,
  });
}

// 删除系统访问记录
export async function removeLogininfor(ids: string) {
  return request(`/api/monitor/logininfor/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出系统访问记录
export function exportLogininfor(params?: LogininforListParams) {
  const queryString = new URLSearchParams(params).toString();
  return request(`/api/monitor/logininfor/export?${queryString}`, {
    method: 'GET',
  });
}

// 清空登录日志
export async function cleanLogininfor() {
  return request('/api/monitor/logininfor/clean', {
    method: 'DELETE',
  });
}
