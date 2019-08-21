// 车辆管理
const Car = () => import('@/pages/car-manage')
const CarMain = () => import('@/pages/car-manage/main')
const CarList = () => import('@/pages/car-manage/car_list')
const CarInsurance = () => import('@/pages/car-manage/insurance')
const CarExamine = () => import('@/pages/car-manage/examine')
const CarIllegal = () => import('@/pages/car-manage/illegal')
const CarVersion = () => import('@/pages/car-manage/version')
const CarWarehouse = () => import('@/pages/car-manage/warehouse')
const CarArchives = () => import('@/pages/car-manage/archives')
const CarMaintain = () => import('@/pages/car-manage/maintain')
/* 业务管理 */
const business = () => import('@/pages/business-manage')
const OrderList = () => import('@/pages/business-manage/order-list')
const Main = () => import('@/pages/business-manage/main')
const extract = () => import('@/pages/business-manage/extract')

/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/car',
    component: Car,
    name: 'car-manage',
    meta: {
      name: '车辆管理',
      icon: 'iconcheliang',
      // tabName名称和第一个子路由一致 用于tab的展示
      tabName: '车辆统计'
    },
    children: [
      {
        path: 'main',
        name: 'car-main',
        component: CarMain,
        meta: {
          name: '车辆统计',
          pass: true
        }
      },
      {
        path: 'list',
        name: 'car-list',
        component: CarList,
        meta: {
          name: '车辆列表'
        }
      },
      {
        path: 'insurance',
        name: 'car-insurance',
        component: CarInsurance,
        meta: {
          name: '保单管理'
        }
      },
      {
        path: 'examine',
        name: 'car-examine',
        component: CarExamine,
        meta: {
          name: '年审管理'
        }
      },
      {
        path: 'illegal',
        name: 'car-illegal',
        component: CarIllegal,
        meta: {
          name: '违章管理'
        }
      },
      {
        path: 'version',
        name: 'car-version',
        component: CarVersion,
        meta: {
          name: '车型管理'
        }
      },
      {
        path: 'warehouse',
        name: 'car-warehouse',
        component: CarWarehouse,
        meta: {
          name: '在库车辆'
        }
      },
      {
        path: 'archives',
        name: 'car-archives',
        component: CarArchives,
        meta: {
          name: '档案管理'
        }
      },
      {
        path: 'maintain',
        name: 'car-maintain',
        component: CarMaintain,
        meta: {
          name: '维修保养'
        }
      }
    ]
  },
  {
    path: '/business',
    component: business,
    name: 'business-manage',
    meta: {
      name: '业务管理',
      icon: 'iconyewu',
      tabName: '业务统计'
    },
    children: [
      {
        path: 'main',
        name: 'business-main',
        component: Main,
        meta: {
          name: '业务统计',
          pass: true
        }
      },
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
        meta: {
          name: '订单列表'
        }
      },
      {
        path: 'extract',
        name: 'extract-car',
        component: extract,
        meta: {
          name: '提车退车'
        }
      }
    ]
  },
  {
    path: '/financial',
    component: () => import('@/pages/financial-manage'),
    name: 'financial-manage',
    meta: {
      name: '财务管理',
      icon: 'iconcaiwuguanli',
      tabName: '财务统计'
    },
    children: [
      {
        path: 'main',
        name: 'financial-main',
        component: () => import('@/pages/financial-manage/main'),
        meta: {
          name: '财务统计',
          pass: true
        }
      },
      {
        path: 'firstPayment',
        name: 'first-payment',
        component: () => import('@/pages/financial-manage/first-payment'),
        meta: {
          name: '首期收款'
        }
      },
      {
        path: 'chargeManage',
        name: 'charge-manage',
        component: () => import('@/pages/financial-manage/charge-manage'),
        meta: {
          name: '收费管理'
        }
      },
      {
        path: 'runningWater',
        name: 'running-water',
        component: () => import('@/pages/financial-manage/running-water'),
        meta: {
          name: '流水管理'
        }
      },
      {
        path: 'financialPlan',
        name: 'financial-plan',
        component: () => import('@/pages/financial-manage/financial-plan'),
        meta: {
          name: '金融方案'
        }
      }
    ]
  },
  {
    path: '/driver',
    component: () => import('@/pages/driver-manage'),
    name: 'driver-manage',
    meta: {
      name: '司机管理',
      icon: 'iconsijiguanli'
    },
    children: [
      {
        path: 'list',
        name: 'driver-list',
        component: () => import('@/pages/driver-manage/driver-list'),
        meta: {
          name: '司机列表'
        }
      },
      {
        path: 'carteam',
        name: 'carteam-manage',
        component: () => import('@/pages/driver-manage/carteam-manage'),
        meta: {
          name: '车队管理'
        }
      },
      {
        path: 'illegal',
        name: 'driver-illegal',
        component: () => import('@/pages/driver-manage/driver-illegal'),
        meta: {
          name: '司机违章'
        }
      },
      {
        path: 'compensationClaims',
        name: 'compensation-claims',
        component: () => import('@/pages/driver-manage/compensation-claims'),
        meta: {
          name: '出险理赔'
        }
      }
    ]
  }
]
export default dynamicRoutes
