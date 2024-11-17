import {
  BagHandleOutline,
  BulbOutline,
  ChatbubblesOutline,
  CogOutline,
  FootstepsOutline,
  HomeOutline,
  LockClosedOutline,
  PaperPlaneOutline,
  PersonOutline,
  ShieldOutline,
  WalletOutline,
} from '@vicons/ionicons5';
import { RouteRecordRaw } from 'vue-router';

import { DEFAULT_ROLE_INFO, ROUTE_ROLES, ROUTE_SORT } from '@/constant';
import Layout from '@/layout/index.vue';

import { notFoundRoutes } from './notFound';
import { renderIcon } from './utils';

// 默认路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/liveManage',
    component: Layout,
    meta: {
      title: 'router.liveManage',
      icon: renderIcon(BulbOutline),
      sort: ROUTE_SORT.live,
      roles: [
        DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value,
        DEFAULT_ROLE_INFO.LIVE_ADMIN.role_value,
      ],
    },
    children: [
      {
        name: 'liveOnline',
        path: '/liveManage/liveOnline',
        component: () => import('@/views/live/liveOnline/list/index.vue'),
        meta: {
          title: 'router.liveOnline',
        },
      },
      {
        name: 'liveRecord',
        path: '/liveManage/record',
        component: () => import('@/views/live/record/list/index.vue'),
        meta: {
          title: 'router.liveRecord',
        },
      },
      {
        name: 'liveAnchor',
        path: '/liveManage/anchor',
        component: () => import('@/views/live/anchor/list/index.vue'),
        meta: {
          title: 'router.liveAnchor',
        },
      },
      {
        name: 'liveAudience',
        path: '/liveManage/audience',
        component: () => import('@/views/live/audience/list/index.vue'),
        meta: {
          title: 'router.liveAudience',
        },
      },
      {
        name: 'liveStream',
        path: '/liveManage/stream',
        component: () => import('@/views/live/stream/list/index.vue'),
        meta: {
          title: 'router.liveStream',
          roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
        },
      },
      {
        name: 'liveClient',
        path: '/liveManage/client',
        component: () => import('@/views/live/client/list/index.vue'),
        meta: {
          title: 'router.liveClient',
          roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
        },
      },
      {
        name: 'liveForwardList',
        path: '/liveManage/forwardList',
        component: () => import('@/views/live/forwardList/index.vue'),
        meta: {
          title: 'router.liveForwardList',
          roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
        },
      },
    ],
  },
  {
    path: '/liveRoomManage',
    component: Layout,
    meta: {
      title: 'router.liveRoomManage',
      icon: renderIcon(HomeOutline),
      sort: ROUTE_SORT.live,
      roles: [
        DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value,
        DEFAULT_ROLE_INFO.LIVE_ADMIN.role_value,
      ],
    },
    children: [
      {
        name: 'liveRoomList',
        path: '/liveRoomManage/liveRoomList',
        component: () => import('@/views/liveRoom/list/index.vue'),
        meta: {
          title: 'router.liveRoomList',
        },
      },
      {
        name: 'liveRoomUpdate',
        path: '/liveRoomManage/liveRoomUpdate',
        component: () => import('@/views/liveRoom/update/index.vue'),
        meta: {
          title: 'router.liveRoomUpdate',
        },
      },
    ],
  },
  {
    path: '/wsMessageManage',
    component: Layout,
    meta: {
      title: 'router.wsMessageManage',
      icon: renderIcon(PaperPlaneOutline),
      sort: ROUTE_SORT.live,
      roles: [
        DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value,
        DEFAULT_ROLE_INFO.LIVE_ADMIN.role_value,
      ],
    },
    children: [
      {
        name: 'wsMessageList',
        path: '/wsMessageManage/wsMessageList',
        component: () => import('@/views/wsMessage/list/index.vue'),
        meta: {
          title: 'router.wsMessageList',
        },
      },
      {
        name: 'wsMessageUpdate',
        path: '/wsMessageManage/wsMessageUpdate',
        component: () => import('@/views/wsMessage/update/index.vue'),
        meta: {
          title: 'router.wsMessageUpdate',
        },
      },
    ],
  },
  {
    name: 'user',
    path: '/user',
    component: Layout,
    meta: {
      title: 'router.user',
      icon: renderIcon(PersonOutline),
      sort: ROUTE_SORT.user,
      roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
    },
    children: [
      {
        name: 'userList',
        path: '/user/list',
        component: () => import('@/views/user/list/index.vue'),
        meta: {
          title: 'router.userList',
        },
      },
      {
        name: 'userAdd',
        path: '/user/add',
        component: () => import('@/views/user/add/index.vue'),
        meta: {
          title: 'router.userAdd',
          roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
        },
      },
    ],
  },
  {
    path: '/role',
    component: Layout,
    meta: {
      title: 'router.role',
      icon: renderIcon(LockClosedOutline),
      sort: ROUTE_SORT.role,
      roles: [ROUTE_ROLES.SUPER_ADMIN],
    },
    children: [
      {
        name: 'roleList',
        path: '/role/list',
        component: () => import('@/views/role/list/index.vue'),
        meta: {
          title: 'router.roleList',
        },
      },
      {
        name: 'roleTree',
        path: '/role/tree',
        component: () => import('@/views/role/tree/index.vue'),
        meta: {
          title: 'router.roleTree',
        },
      },
      {
        name: 'addRole',
        path: '/role/add',
        component: () => import('@/views/role/add/index.vue'),
        meta: {
          title: 'router.addRole',
        },
      },
    ],
  },
  {
    name: 'auth',
    path: '/auth',
    component: Layout,
    meta: {
      title: 'router.auth',
      icon: renderIcon(ShieldOutline),
      sort: ROUTE_SORT.auth,
      roles: [ROUTE_ROLES.SUPER_ADMIN],
    },
    children: [
      {
        name: 'authList',
        path: '/auth/list',
        component: () => import('@/views/auth/list/index.vue'),
        meta: {
          title: 'router.authList',
        },
      },
      {
        name: 'authTree',
        path: '/auth/tree',
        component: () => import('@/views/auth/tree/index.vue'),
        meta: {
          title: 'router.authTree',
        },
      },
      {
        name: 'addAuth',
        path: '/auth/add',
        component: () => import('@/views/auth/add/index.vue'),
        meta: {
          title: 'router.addAuth',
        },
      },
    ],
  },
  {
    name: 'liveConfig',
    path: '/liveConfig',
    component: Layout,
    meta: {
      title: 'router.liveConfig',
      icon: renderIcon(CogOutline),
      sort: ROUTE_SORT.liveConfig,
      roles: [ROUTE_ROLES.SUPER_ADMIN],
    },
    children: [
      {
        name: 'liveConfigList',
        path: '/liveConfig/list',
        component: () => import('@/views/liveConfig/list/index.vue'),
        meta: {
          title: 'router.liveConfigList',
        },
      },
      {
        name: 'liveConfigEdit',
        path: '/liveConfig/edit',
        component: () => import('@/views/liveConfig/edit/index.vue'),
        meta: {
          title: 'router.liveConfigEdit',
          hidden: true,
        },
      },
      {
        name: 'forwardConfig',
        path: '/liveConfig/forwardList',
        component: () => import('@/views/liveConfig/forwardConfig/index.vue'),
        meta: {
          title: 'router.forwardConfig',
          roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
        },
      },
    ],
  },
  {
    name: 'order',
    path: '/order',
    component: Layout,
    meta: {
      icon: renderIcon(WalletOutline),
      title: 'router.order',
      sort: ROUTE_SORT.order,
      roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
    },
    children: [
      {
        name: 'orderList',
        path: '/order/list',
        component: () => import('@/views/order/list/index.vue'),
        meta: {
          title: 'router.orderList',
        },
      },
    ],
  },
  {
    name: 'goods',
    path: '/goods',
    component: Layout,
    meta: {
      icon: renderIcon(BagHandleOutline),
      title: 'router.goods',
      sort: ROUTE_SORT.goods,
      roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
    },
    children: [
      {
        name: 'goodsList',
        path: '/goods/list',
        component: () => import('@/views/goods/list/index.vue'),
        meta: {
          title: 'router.goodsList',
        },
      },
      {
        name: 'goodsCreate',
        path: '/goods/create',
        component: () => import('@/views/goods/create/index.vue'),
        meta: {
          title: 'router.goodsCreate',
        },
      },
      {
        name: 'goodsUpdate',
        path: '/goods/update',
        component: () => import('@/views/goods/update/index.vue'),
        meta: {
          title: 'router.goodsUpdate',
          hidden: true,
        },
      },
    ],
  },
  {
    name: 'loginRecord',
    path: '/loginRecord',
    component: Layout,
    meta: {
      icon: renderIcon(FootstepsOutline),
      title: 'router.loginRecord',
      sort: ROUTE_SORT.loginRecord,
      roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
    },
    children: [
      {
        name: 'loginRecordList',
        path: '/loginRecord/list',
        component: () => import('@/views/loginRecord/list/index.vue'),
        meta: {
          title: 'router.loginRecordList',
        },
      },
    ],
  },
  {
    name: 'globalMsg',
    path: '/globalMsg',
    component: Layout,
    meta: {
      icon: renderIcon(ChatbubblesOutline),
      title: 'router.globalMsg',
      sort: ROUTE_SORT.globalMsg,
      roles: [DEFAULT_ROLE_INFO.SUPER_ADMIN.role_value],
    },
    children: [
      {
        name: 'globalMsgList',
        path: '/globalMsg/list',
        component: () => import('@/views/globalMsg/list/index.vue'),
        meta: {
          title: 'router.globalMsgList',
        },
      },
      {
        name: 'globalMsgCreate',
        path: '/globalMsg/create',
        component: () => import('@/views/globalMsg/create/index.vue'),
        meta: {
          title: 'router.globalMsgCreate',
        },
      },
      {
        name: 'globalMsgUpdate',
        path: '/globalMsg/update',
        component: () => import('@/views/globalMsg/update/index.vue'),
        meta: {
          title: 'router.globalMsgUpdate',
        },
      },
    ],
  },
  ...notFoundRoutes, // 404路由一定要放在异步路由的最后
];
