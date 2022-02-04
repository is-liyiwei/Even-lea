import http from '../request';

export function uploadFile(
  file,
  url = 'blob',
  method = 'post',
  otherParams = [],
  otherHeaders = {}
) {
  const formData = new FormData();
  formData.append('file', file);
  for (let i = 0; i < otherParams.length; i++) {
    formData.append(i, otherParams[i]);
  }
  const reqParam = {
    url,
    method,
    data: formData,
    headers: Object.assign(
      {
        'Content-Type': 'multipart/form-data;charset=utf-8'
      },
      otherHeaders
    )
  };
  return http(reqParam);
}

// ---------------------Admin---------------------

// 管理员登录
export function getAdminLogin(body = {}, query = {}) {
  return http({
    url: 'admin/login',
    method: 'get',
    data: body,
    query: query
  });
}

// 删除管理员
export function deleteAdmin(body = {}, query = {}) {
  return http({
    url: 'admin',
    method: 'delete',
    data: body,
    query: query
  });
}

// 获取单个管理员信息
export function getAdmin(body = {}, query = {}) {
  return http({
    url: 'admin',
    method: 'get',
    data: body,
    query: query
  });
}

// 创建管理员
export function postAdmin(body = {}, query = {}) {
  return http({
    url: 'admin',
    method: 'post',
    data: body,
    query: query
  });
}

// 修改管理员
export function putAdmin(body = {}, query = {}) {
  return http({
    url: 'admin',
    method: 'put',
    data: body,
    query: query
  });
}

// 获取管理员列表
export function getAdminList(body = {}, query = {}) {
  return http({
    url: 'admin/list',
    method: 'get',
    data: body,
    query: query
  });
}

// 管理员获取操作组列表
export function getAdminTeamList(body = {}, query = {}) {
  return http({
    url: 'admin/team/list',
    method: 'get',
    data: body,
    query: query
  });
}

// 操作员删除操作群信息
export function deleteAdminTeam(body = {}, query = {}) {
  return http({
    url: 'admin/team',
    method: 'delete',
    data: body,
    query: query
  });
}

// 管理员获取操作组
export function getAdminTeam(body = {}, query = {}) {
  return http({
    url: 'admin/team',
    method: 'get',
    data: body,
    query: query
  });
}

// 操作员添加操作组
export function postAdminTeam(body = {}, query = {}) {
  return http({
    url: 'admin/team',
    method: 'post',
    data: body,
    query: query
  });
}

// 操作员修改操作组
export function putAdminTeam(body = {}, query = {}) {
  return http({
    url: 'admin/team',
    method: 'put',
    data: body,
    query: query
  });
}
// ---------------------Blob---------------------

// 上传视频，返回视频url和第一帧url
export function postBlobVideo(body = {}, query = {}) {
  return http({
    url: 'blob/video',
    method: 'post',
    data: body,
    query: query
  });
}
// ---------------------Client---------------------

// 获取列表
export function getClientList(body = {}, query = {}) {
  return http({
    url: 'client/list',
    method: 'get',
    data: body,
    query: query
  });
}

// 删除
export function deleteClient(body = {}, query = {}) {
  return http({
    url: 'client',
    method: 'delete',
    data: body,
    query: query
  });
}

// 获取单个信息
export function getClient(body = {}, query = {}) {
  return http({
    url: 'client',
    method: 'get',
    data: body,
    query: query
  });
}

// 创建
export function postClient(body = {}, query = {}) {
  return http({
    url: 'client',
    method: 'post',
    data: body,
    query: query
  });
}

// 修改信息
export function putClient(body = {}, query = {}) {
  return http({
    url: 'client',
    method: 'put',
    data: body,
    query: query
  });
}
// ---------------------CodeGen---------------------

// 后端代码
export function postCodegenBackend(body = {}, query = {}) {
  return http({
    url: 'codegen/backend',
    method: 'post',
    data: body,
    query: query
  });
}

// 后端代码块
export function postCodegenBackendSnippet(body = {}, query = {}) {
  return http({
    url: 'codegen/backendSnippet',
    method: 'post',
    data: body,
    query: query
  });
}

// 前端代码
export function postCodegenConsole(body = {}, query = {}) {
  return http({
    url: 'codegen/console',
    method: 'post',
    data: body,
    query: query
  });
}

// 前端代码块
export function postCodegenConsoleSnippet(body = {}, query = {}) {
  return http({
    url: 'codegen/consoleSnippet',
    method: 'post',
    data: body,
    query: query
  });
}
// ---------------------Faq---------------------

// 获取列表
export function getFaqList(body = {}, query = {}) {
  return http({
    url: 'faq/list',
    method: 'get',
    data: body,
    query: query
  });
}

// 删除
export function deleteFaq(body = {}, query = {}) {
  return http({
    url: 'faq',
    method: 'delete',
    data: body,
    query: query
  });
}

// 获取单个信息
export function getFaq(body = {}, query = {}) {
  return http({
    url: 'faq',
    method: 'get',
    data: body,
    query: query
  });
}

// 创建
export function postFaq(body = {}, query = {}) {
  return http({
    url: 'faq',
    method: 'post',
    data: body,
    query: query
  });
}

// 修改信息
export function putFaq(body = {}, query = {}) {
  return http({
    url: 'faq',
    method: 'put',
    data: body,
    query: query
  });
}
// ---------------------Feedback---------------------

// 获取列表
export function getFeedbackList(body = {}, query = {}) {
  return http({
    url: 'feedback/list',
    method: 'get',
    data: body,
    query: query
  });
}

// 删除
export function deleteFeedback(body = {}, query = {}) {
  return http({
    url: 'feedback',
    method: 'delete',
    data: body,
    query: query
  });
}

// 修改信息
export function putFeedback(body = {}, query = {}) {
  return http({
    url: 'feedback',
    method: 'put',
    data: body,
    query: query
  });
}
