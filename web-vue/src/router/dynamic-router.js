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
const extract = () => import('@/pages/business-manage/extract')

/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/car',
    component: Car,
    name: 'car-manage',
    meta: {
      name: '车辆管理',
      icon: 'md-car'
    },
    children: [
      {
        path: '',
        name: 'car-main',
        component: CarMain,
        meta: {
          // name: '统计',
          name: '',
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
      icon: 'md-clipboard'
    },
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
        meta: {
          name: '订单列表',
          icon: 'icon-home'
        }
      },
      {
        path: 'extract',
        name: 'extract-car',
        component: extract,
        meta: {
          name: '提车退车',
          icon: 'icon-product-manage'
        }
      }
    ]
  }
]
export default dynamicRoutes
