import request from '@/utils/request';
import type { JobLogType, JobLogListParams } from './data.d';


/* *
 *
 * @author whiteshader@163.com
 * @datetime  2021/09/16
 * 
 * */


// 查询定时任务调度日志列表
export async function getJobLogList(params?: JobLogListParams) {
  const queryString = new URLSearchParams(params).toString();
  return request(`/api/monitor/jobLog/list?${queryString}`, {
    data: params,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询定时任务调度日志详细
export function getJobLog(jobJobLogId: number) {
  return request(`/api/monitor/jobLog/${jobJobLogId}`, {
    method: 'GET',
  });
}

// 新增定时任务调度日志
export async function addJobLog(params: JobLogType) {
  return request('/api/monitor/jobLog', {
    method: 'POST',
    data: params,
  });
}

// 修改定时任务调度日志
export async function updateJobLog(params: JobLogType) {
  return request('/api/monitor/jobLog', {
    method: 'PUT',
    data: params,
  });
}

// 删除定时任务调度日志
export async function removeJobLog(ids: string) {
  return request(`/api/monitor/jobLog/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出定时任务调度日志
export function exportJobLog(params?: JobLogListParams) {
  const queryString = new URLSearchParams(params).toString();
  return request(`/api/monitor/jobLog/export?${queryString}`, {
    method: 'GET',
  });
}

// 清空调度日志
export function cleanJobLog() {
  return request('/api/monitor/jobLog/clean', {
    method: 'DELETE',
  });
}
