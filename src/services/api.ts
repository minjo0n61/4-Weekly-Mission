import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_LINKBRARY_BASEURL;

const apiInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//인터셉터: 요청 보내기 전 수행
apiInstance.interceptors.request.use(
  (config) => {
    //localStorage에서 accessToken 가져오기
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//인터셉터: 응답 받고 처리 전 수행
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(`!![ERROR] ${error.response.data.message}`);
    return Promise.reject(error);
  },
);

//기존 fetchData 함수 변형하여 axios 적용
//특정 API에 대한 에러 분기 처리 적용 연습
export async function fetchData(endPoint: string) {
  try {
    const response = await apiInstance.get(endPoint);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.error('404: Data not found');
      } else if (error.response?.status === 401) {
        console.error('401: Unauthorized');
      }
    } else {
      console.error(`${error}`);
    }
  }
}

export function getFolder() {
  return fetchData('/sample/folder');
}

export function getUser(userId = '1') {
  return fetchData(`/users/${userId}`);
}

export function getFolderList(userId = '1') {
  return fetchData(`/users/${userId}/folders`);
}

export function getLinkList({ userId = '4', folderId = '' }) {
  return fetchData(`/users/${userId}/links?folderId=${folderId}`);
}

export default apiInstance;
