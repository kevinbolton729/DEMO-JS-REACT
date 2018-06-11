// import { message as openMessage } from 'antd';
// import {} from '@/services/api';
// import { parseResponse } from '@/utils/parse';
// Config
// import { API_DOMAIN } from '@/config';
// 常量
// import {} from '@/utils/consts';
// 方法
// import {} from '@/utils/fns';

export default {
  namespace: 'workspace',

  state: {
    loading: true,
  },

  effects: {},

  reducers: {
    changeLoading(state, { payload }) {
      return {
        ...state,
        loading: payload,
      };
    },
  },
};
