import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/home',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue'),
        meta: {
          title: '登录',
          showTabBar: false
        }
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue'),
        meta: {
          title: '主页'
        }
      },
      {
        path: '/plan',
        name: 'Plan',
        component: () => import('../views/plan/Plan.vue'),
        meta: {
          title: '今日安排'
        }
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('../views/list/List.vue'),
        meta: {
          title: '通讯录'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/About.vue'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/home/appointmentApply/appointmentApply.vue'),
    meta:{
      title: '预约申请'
    }
  },
  {
    path: '/initiate',
    name: 'Initiate',
    component: () => import('../views/home/appointmentInitiate/appointmentInitiate.vue'),
    meta:{
      title: '我发起的'
    }
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/home/appointmentJoin/appointmentJoin.vue'),
    meta:{
      title: '我参与的'
    }
  },
  {
    path: '/approval',
    name: 'Approval',
    component: () => import('../views/home/appointmentApproval/appointmentApproval.vue'),
    meta:{
      title: '待我审批'
    }
  },
  {
    path: '/space',
    name: 'Space',
    component: () => import('../views/home/appointmentSpace/appointmentSpace.vue'),
    meta:{
      title: '空间安排'
    }
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import('../views/home/repairEquipment/repairEquipment.vue'),
    meta:{
      title: '设备报修'
    }
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('../views/home/repairRecord/repairRecord.vue'),
    meta:{
      title: '报修记录'
    }
  },
  {
    path: '/handling',
    name: 'Handling',
    component: () => import('../views/home/repairHandling/repairHandling.vue'),
    meta:{
      title: '报修处理'
    }
  },
  {
    path: '/applysuccess',
    name: 'ApplySuccess',
    component: () => import('../views/home/appointmentApply/applySuccess.vue'),
    meta:{
      title: '申请成功'
    }
  },
  {
    path: '/recorddetail',
    name: 'RecordDetail',
    component: () => import('../views/home/repairRecord/repairRecordDetail.vue'),
    meta:{
      title: '记录详情'
    }
  },
  {
    path: '/handlingdetail',
    name: 'HandlingDetail',
    component: () => import('../views/home/repairHandling/handlingDetail.vue'),
    meta:{
      title: '报修详情'
    }
  },
  {
    path: '/approvaldetail',
    name: 'approvalDetail',
    component: () => import('../views/home/appointmentApproval/approvalDetail.vue'),
    meta:{
      title: '审批详情'
    }
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '页面不存在'
    },
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
