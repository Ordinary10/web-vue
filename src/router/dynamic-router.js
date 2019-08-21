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
        path: 'extract',
        name: 'extract-car',
        component: extract,
        meta: {
          name: '提车退车'
        }
      },
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
        meta: {
          name: '订单列表'
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
  },
  {
    path: '/collection',
    component: () => import('@/pages/collection-manage'),
    name: 'collection-manage',
    meta: {
      name: '催收管理',
      icon: 'iconcuishouguanli'
    },
    children: [
      {
        path: 'premium',
        name: 'premium-collection',
        component: () => import('@/pages/collection-manage/premium-collection'),
        meta: {
          name: '保费催收'
        }
      },
      {
        path: 'overdue',
        name: 'overdue-list',
        component: () => import('@/pages/collection-manage/overdue-list'),
        meta: {
          name: '逾期列表'
        }
      }
    ]
  },
  {
    path: '/company',
    component: () => import('@/pages/company-manage'),
    name: 'company-manage',
    meta: {
      name: '公司管理',
      icon: 'icongong_si',
      tabName: '公司统计'
    },
    children: [
      {
        path: 'main',
        name: 'company-main',
        component: () => import('@/pages/company-manage/main'),
        meta: {
          name: '公司统计',
          pass: true
        }
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import('@/pages/company-manage/customer'),
        meta: {
          name: '客户管理'
        }
      },
      {
        path: 'stores',
        name: 'stores',
        component: () => import('@/pages/company-manage/stores'),
        meta: {
          name: '门店管理'
        }
      },
      {
        path: 'householder',
        name: 'householder',
        component: () => import('@/pages/company-manage/householder'),
        meta: {
          name: '户主管理'
        }
      },
      {
        path: 'employees',
        name: 'employees',
        component: () => import('@/pages/company-manage/employees'),
        meta: {
          name: '员工管理'
        }
      },
      {
        path: 'financialPlan',
        name: 'financial-plan',
        component: () => import('@/pages/company-manage/financial-plan'),
        meta: {
          name: '金融方案'
        }
      },
      {
        path: 'warehouse',
        name: 'warehouse',
        component: () => import('@/pages/company-manage/warehouse'),
        meta: {
          name: '仓库管理'
        }
      },
      {
        path: 'mechanics',
        name: 'mechanics',
        component: () => import('@/pages/company-manage/mechanics'),
        meta: {
          name: '汽修管理'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/pages/company-manage/role'),
        meta: {
          name: '角色管理'
        }
      }
    ]
  },
  {
    path: '/system',
    component: () => import('@/pages/system-setup'),
    name: 'system-setup',
    meta: {
      name: '系统设置',
      icon: 'iconxitongguanli'
    },
    children: [
      {
        path: 'illegalStatistical',
        name: 'illegal-statistical',
        component: () => import('@/pages/system-setup/illegal-statistical'),
        meta: {
          name: '违章统计'
        }
      },
      {
        path: 'illegalQuery',
        name: 'illegal-query',
        component: () => import('@/pages/system-setup/illegal-query'),
        meta: {
          name: '违章查询'
        }
      },
      {
        path: 'interfaceLog',
        name: 'interface-log',
        component: () => import('@/pages/system-setup/interface-log'),
        meta: {
          name: '接口日志'
        }
      }
    ]
  }
]
export default dynamicRoutes
