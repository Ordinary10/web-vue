// 车辆管理
const Car = () => import('@/pages/car-manage')
const CarList = () => import('@/pages/car-manage/car_list')
const CarInsurance = () => import('@/pages/car-manage/insurance')
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
      icon: ''
    },
    children: [
      {
        path: 'list',
        name: 'car-list',
        component: CarList,
        meta: {
          name: '车辆列表',
          icon: 'icon-quit'
        }
      },
      {
        path: 'insurance',
        name: 'insurance',
        component: CarInsurance,
        meta: {
          name: '保单管理',
          icon: 'icon-product-manage'
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
      icon: ''
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
