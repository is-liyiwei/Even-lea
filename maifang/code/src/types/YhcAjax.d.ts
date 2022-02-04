export declare class YhcAjax {
    uploadFile: (
      file: any,
      url: string,
      method?: string,
      otherParams?: [],
      otherHeaders?: object
    ) => void;
    uploadFileByVideo: (
      file: any,
      url: string,
      method?: string,
      otherParams?: [],
      otherHeaders?: object
    ) => void;
  getAdminLogin: (body: object, query: object) => void;
  deleteAdmin: (body: object, query: object) => void;
  getAdmin: (body: object, query: object) => void;
  postAdmin: (body: object, query: object) => void;
  putAdmin: (body: object, query: object) => void;
  getAdminList: (body: object, query: object) => void;
  getAdminTeamList: (body: object, query: object) => void;
  deleteAdminTeam: (body: object, query: object) => void;
  getAdminTeam: (body: object, query: object) => void;
  postAdminTeam: (body: object, query: object) => void;
  putAdminTeam: (body: object, query: object) => void;
  postBlobVideo: (body: object, query: object) => void;
  getClientList: (body: object, query: object) => void;
  deleteClient: (body: object, query: object) => void;
  getClient: (body: object, query: object) => void;
  postClient: (body: object, query: object) => void;
  putClient: (body: object, query: object) => void;
  postCodegenBackend: (body: object, query: object) => void;
  postCodegenBackendSnippet: (body: object, query: object) => void;
  postCodegenConsole: (body: object, query: object) => void;
  postCodegenConsoleSnippet: (body: object, query: object) => void;
  getFaqList: (body: object, query: object) => void;
  deleteFaq: (body: object, query: object) => void;
  getFaq: (body: object, query: object) => void;
  postFaq: (body: object, query: object) => void;
  putFaq: (body: object, query: object) => void;
  getFeedbackList: (body: object, query: object) => void;
  deleteFeedback: (body: object, query: object) => void;
  putFeedback: (body: object, query: object) => void;
}
