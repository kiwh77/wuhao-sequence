import { useService } from 'pipe-axios'


/**
 * AuthController_img_captcha获取图形验证码
 * @param path
 * @param body
 * @param query
 */
export const AuthController_img_captcha = useService([
  'AuthController_img_captcha', 
  'post', 
  '/auth/captcha/img', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_verifyImgCaptcha验证图形验证码
 * @param path
 * @param body
 * @param query
 */
export const AuthController_verifyImgCaptcha = useService([
  'AuthController_verifyImgCaptcha', 
  'post', 
  '/auth/captcha/img/verify', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_captcha_sms短信验证码
 * @param path
 * @param body
 * @param query
 */
export const AuthController_captcha_sms = useService([
  'AuthController_captcha_sms', 
  'post', 
  '/auth/captcha/sms', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_login登录
 * @param path
 * @param body
 * @param query
 */
export const AuthController_login = useService([
  'AuthController_login', 
  'post', 
  '/auth/login', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_logout注销登录
 * @param path
 * @param body
 * @param query
 */
export const AuthController_logout = useService([
  'AuthController_logout', 
  'post', 
  '/auth/logout', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_refreshToken刷新token
 * @param path
 * @param body
 * @param query
 */
export const AuthController_refreshToken = useService([
  'AuthController_refreshToken', 
  'post', 
  '/auth/refresh/token', 
  {
    default: { params:  } 
  }
])
/**
 * AuthController_register注册
 * @param path
 * @param body
 * @param query
 */
export const AuthController_register = useService([
  'AuthController_register', 
  'post', 
  '/auth/register', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_create创建
 * @param path
 * @param body
 * @param query
 */
export const AssetController_create = useService([
  'AssetController_create', 
  'post', 
  '/house/asset/create', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const AssetController_destroy = useService([
  'AssetController_destroy', 
  'delete', 
  '/house/asset/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_group_create创建分组
 * @param path
 * @param body
 * @param query
 */
export const AssetController_group_create = useService([
  'AssetController_group_create', 
  'post', 
  '/house/asset/group/create', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_group_destroy删除分组
 * @param path
 * @param body
 * @param query
 */
export const AssetController_group_destroy = useService([
  'AssetController_group_destroy', 
  'delete', 
  '/house/asset/group/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_group_list查询分组列表
 * @param path
 * @param body
 * @param query
 */
export const AssetController_group_list = useService([
  'AssetController_group_list', 
  'get', 
  '/house/asset/group/list', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_group_update更新分组
 * @param path
 * @param body
 * @param query
 */
export const AssetController_group_update = useService([
  'AssetController_group_update', 
  'put', 
  '/house/asset/group/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const AssetController_info = useService([
  'AssetController_info', 
  'get', 
  '/house/asset/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const AssetController_list = useService([
  'AssetController_list', 
  'get', 
  '/house/asset/list', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const AssetController_page = useService([
  'AssetController_page', 
  'get', 
  '/house/asset/page', 
  {
    default: { params:  } 
  }
])
/**
 * AssetController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const AssetController_update = useService([
  'AssetController_update', 
  'put', 
  '/house/asset/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_create创建账单
 * @param path
 * @param body
 * @param query
 */
export const BillController_create = useService([
  'BillController_create', 
  'post', 
  '/house/bill/create', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_destroy删除账单
 * @param path
 * @param body
 * @param query
 */
export const BillController_destroy = useService([
  'BillController_destroy', 
  'delete', 
  '/house/bill/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_info查询账单详情
 * @param path
 * @param body
 * @param query
 */
export const BillController_info = useService([
  'BillController_info', 
  'get', 
  '/house/bill/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_list查询账单列表
 * @param path
 * @param body
 * @param query
 */
export const BillController_list = useService([
  'BillController_list', 
  'get', 
  '/house/bill/list', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_page查询账单分页
 * @param path
 * @param body
 * @param query
 */
export const BillController_page = useService([
  'BillController_page', 
  'get', 
  '/house/bill/page', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_createPayMode新增账单支付信息
 * @param path
 * @param body
 * @param query
 */
export const BillController_createPayMode = useService([
  'BillController_createPayMode', 
  'post', 
  '/house/bill/paymode/create', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_deletePayMode删除账单支付信息
 * @param path
 * @param body
 * @param query
 */
export const BillController_deletePayMode = useService([
  'BillController_deletePayMode', 
  'delete', 
  '/house/bill/paymode/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * BillController_update更新账单信息
 * @param path
 * @param body
 * @param query
 */
export const BillController_update = useService([
  'BillController_update', 
  'put', 
  '/house/bill/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_create创建
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_create = useService([
  'CustomerController_create', 
  'post', 
  '/house/customer/create', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_batch_destroy批量删除
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_batch_destroy = useService([
  'CustomerController_batch_destroy', 
  'post', 
  '/house/customer/destroy', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_destroy = useService([
  'CustomerController_destroy', 
  'delete', 
  '/house/customer/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_info = useService([
  'CustomerController_info', 
  'get', 
  '/house/customer/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_list = useService([
  'CustomerController_list', 
  'get', 
  '/house/customer/list', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_page = useService([
  'CustomerController_page', 
  'get', 
  '/house/customer/page', 
  {
    default: { params:  } 
  }
])
/**
 * CustomerController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const CustomerController_update = useService([
  'CustomerController_update', 
  'put', 
  '/house/customer/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_create创建
 * @param path
 * @param body
 * @param query
 */
export const OrderController_create = useService([
  'OrderController_create', 
  'post', 
  '/house/order/create', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const OrderController_destroy = useService([
  'OrderController_destroy', 
  'delete', 
  '/house/order/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const OrderController_info = useService([
  'OrderController_info', 
  'get', 
  '/house/order/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const OrderController_list = useService([
  'OrderController_list', 
  'get', 
  '/house/order/list', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const OrderController_page = useService([
  'OrderController_page', 
  'get', 
  '/house/order/page', 
  {
    default: { params:  } 
  }
])
/**
 * OrderController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const OrderController_update = useService([
  'OrderController_update', 
  'put', 
  '/house/order/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_common查询公共费用
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_common = useService([
  'TAssetController_common', 
  'get', 
  '/house/tasset/common', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_update_common更新公共费用
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_update_common = useService([
  'TAssetController_update_common', 
  'post', 
  '/house/tasset/common', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_info = useService([
  'TAssetController_info', 
  'get', 
  '/house/tasset/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_updateInfo更新物业定义
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_updateInfo = useService([
  'TAssetController_updateInfo', 
  'put', 
  '/house/tasset/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_list = useService([
  'TAssetController_list', 
  'get', 
  '/house/tasset/list', 
  {
    default: { params:  } 
  }
])
/**
 * TAssetController_update更新账单记录
 * @param path
 * @param body
 * @param query
 */
export const TAssetController_update = useService([
  'TAssetController_update', 
  'put', 
  '/house/tasset/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_create创建
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_create = useService([
  'OrgConfController_create', 
  'post', 
  '/org/conf/create', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_destroy = useService([
  'OrgConfController_destroy', 
  'delete', 
  '/org/conf/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_info = useService([
  'OrgConfController_info', 
  'get', 
  '/org/conf/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_list = useService([
  'OrgConfController_list', 
  'get', 
  '/org/conf/list', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_page = useService([
  'OrgConfController_page', 
  'get', 
  '/org/conf/page', 
  {
    default: { params:  } 
  }
])
/**
 * OrgConfController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const OrgConfController_update = useService([
  'OrgConfController_update', 
  'put', 
  '/org/conf/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_create创建
 * @param path
 * @param body
 * @param query
 */
export const OrgController_create = useService([
  'OrgController_create', 
  'post', 
  '/org/create', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const OrgController_destroy = useService([
  'OrgController_destroy', 
  'delete', 
  '/org/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const OrgController_info = useService([
  'OrgController_info', 
  'get', 
  '/org/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const OrgController_list = useService([
  'OrgController_list', 
  'get', 
  '/org/list', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const OrgController_page = useService([
  'OrgController_page', 
  'get', 
  '/org/page', 
  {
    default: { params:  } 
  }
])
/**
 * OrgController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const OrgController_update = useService([
  'OrgController_update', 
  'put', 
  '/org/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_create创建
 * @param path
 * @param body
 * @param query
 */
export const PermController_create = useService([
  'PermController_create', 
  'post', 
  '/rbac/perm/create', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const PermController_destroy = useService([
  'PermController_destroy', 
  'delete', 
  '/rbac/perm/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const PermController_info = useService([
  'PermController_info', 
  'get', 
  '/rbac/perm/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const PermController_list = useService([
  'PermController_list', 
  'get', 
  '/rbac/perm/list', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const PermController_page = useService([
  'PermController_page', 
  'get', 
  '/rbac/perm/page', 
  {
    default: { params:  } 
  }
])
/**
 * PermController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const PermController_update = useService([
  'PermController_update', 
  'put', 
  '/rbac/perm/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_create创建
 * @param path
 * @param body
 * @param query
 */
export const ElementController_create = useService([
  'ElementController_create', 
  'post', 
  '/rbac/res/element/create', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const ElementController_destroy = useService([
  'ElementController_destroy', 
  'delete', 
  '/rbac/res/element/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const ElementController_info = useService([
  'ElementController_info', 
  'get', 
  '/rbac/res/element/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const ElementController_list = useService([
  'ElementController_list', 
  'get', 
  '/rbac/res/element/list', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const ElementController_page = useService([
  'ElementController_page', 
  'get', 
  '/rbac/res/element/page', 
  {
    default: { params:  } 
  }
])
/**
 * ElementController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const ElementController_update = useService([
  'ElementController_update', 
  'put', 
  '/rbac/res/element/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_create创建用户
 * @param path
 * @param body
 * @param query
 */
export const RoleController_create = useService([
  'RoleController_create', 
  'post', 
  '/role/create', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_destroy删除用户
 * @param path
 * @param body
 * @param query
 */
export const RoleController_destroy = useService([
  'RoleController_destroy', 
  'delete', 
  '/role/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_group_create创建用户分组
 * @param path
 * @param body
 * @param query
 */
export const RoleController_group_create = useService([
  'RoleController_group_create', 
  'post', 
  '/role/group/create', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_group_destroy删除用户分组
 * @param path
 * @param body
 * @param query
 */
export const RoleController_group_destroy = useService([
  'RoleController_group_destroy', 
  'delete', 
  '/role/group/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_group_list查询用户分组列表
 * @param path
 * @param body
 * @param query
 */
export const RoleController_group_list = useService([
  'RoleController_group_list', 
  'get', 
  '/role/group/list', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_group_update更新用户分组
 * @param path
 * @param body
 * @param query
 */
export const RoleController_group_update = useService([
  'RoleController_group_update', 
  'put', 
  '/role/group/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_info查询用户详情
 * @param path
 * @param body
 * @param query
 */
export const RoleController_info = useService([
  'RoleController_info', 
  'get', 
  '/role/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_list查询用户列表
 * @param path
 * @param body
 * @param query
 */
export const RoleController_list = useService([
  'RoleController_list', 
  'get', 
  '/role/list', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_page查询用户分页
 * @param path
 * @param body
 * @param query
 */
export const RoleController_page = useService([
  'RoleController_page', 
  'get', 
  '/role/page', 
  {
    default: { params:  } 
  }
])
/**
 * RoleController_update更新用户信息
 * @param path
 * @param body
 * @param query
 */
export const RoleController_update = useService([
  'RoleController_update', 
  'put', 
  '/role/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_create创建
 * @param path
 * @param body
 * @param query
 */
export const ConfController_create = useService([
  'ConfController_create', 
  'post', 
  '/system/conf/create', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const ConfController_destroy = useService([
  'ConfController_destroy', 
  'delete', 
  '/system/conf/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const ConfController_info = useService([
  'ConfController_info', 
  'get', 
  '/system/conf/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const ConfController_list = useService([
  'ConfController_list', 
  'get', 
  '/system/conf/list', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const ConfController_page = useService([
  'ConfController_page', 
  'get', 
  '/system/conf/page', 
  {
    default: { params:  } 
  }
])
/**
 * ConfController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const ConfController_update = useService([
  'ConfController_update', 
  'put', 
  '/system/conf/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_create创建
 * @param path
 * @param body
 * @param query
 */
export const DictController_create = useService([
  'DictController_create', 
  'post', 
  '/system/dict/create', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const DictController_destroy = useService([
  'DictController_destroy', 
  'delete', 
  '/system/dict/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const DictController_info = useService([
  'DictController_info', 
  'get', 
  '/system/dict/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const DictController_list = useService([
  'DictController_list', 
  'get', 
  '/system/dict/list', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const DictController_page = useService([
  'DictController_page', 
  'get', 
  '/system/dict/page', 
  {
    default: { params:  } 
  }
])
/**
 * DictController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const DictController_update = useService([
  'DictController_update', 
  'put', 
  '/system/dict/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_create创建
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_create = useService([
  'FeedbackController_create', 
  'post', 
  '/system/feedback/create', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_destroy = useService([
  'FeedbackController_destroy', 
  'delete', 
  '/system/feedback/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_info = useService([
  'FeedbackController_info', 
  'get', 
  '/system/feedback/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_list = useService([
  'FeedbackController_list', 
  'get', 
  '/system/feedback/list', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_page = useService([
  'FeedbackController_page', 
  'get', 
  '/system/feedback/page', 
  {
    default: { params:  } 
  }
])
/**
 * FeedbackController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const FeedbackController_update = useService([
  'FeedbackController_update', 
  'put', 
  '/system/feedback/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_create创建
 * @param path
 * @param body
 * @param query
 */
export const MessageController_create = useService([
  'MessageController_create', 
  'post', 
  '/system/message/create', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const MessageController_destroy = useService([
  'MessageController_destroy', 
  'delete', 
  '/system/message/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const MessageController_info = useService([
  'MessageController_info', 
  'get', 
  '/system/message/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const MessageController_list = useService([
  'MessageController_list', 
  'get', 
  '/system/message/list', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const MessageController_page = useService([
  'MessageController_page', 
  'get', 
  '/system/message/page', 
  {
    default: { params:  } 
  }
])
/**
 * MessageController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const MessageController_update = useService([
  'MessageController_update', 
  'put', 
  '/system/message/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_create创建
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_create = useService([
  'NoticeController_create', 
  'post', 
  '/system/notice/create', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_destroy = useService([
  'NoticeController_destroy', 
  'delete', 
  '/system/notice/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_info = useService([
  'NoticeController_info', 
  'get', 
  '/system/notice/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_list = useService([
  'NoticeController_list', 
  'get', 
  '/system/notice/list', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_page = useService([
  'NoticeController_page', 
  'get', 
  '/system/notice/page', 
  {
    default: { params:  } 
  }
])
/**
 * NoticeController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const NoticeController_update = useService([
  'NoticeController_update', 
  'put', 
  '/system/notice/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_create创建
 * @param path
 * @param body
 * @param query
 */
export const TaskController_create = useService([
  'TaskController_create', 
  'post', 
  '/system/task/create', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_destroy删除
 * @param path
 * @param body
 * @param query
 */
export const TaskController_destroy = useService([
  'TaskController_destroy', 
  'delete', 
  '/system/task/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_info查询详情
 * @param path
 * @param body
 * @param query
 */
export const TaskController_info = useService([
  'TaskController_info', 
  'get', 
  '/system/task/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_list查询列表
 * @param path
 * @param body
 * @param query
 */
export const TaskController_list = useService([
  'TaskController_list', 
  'get', 
  '/system/task/list', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_page查询分页
 * @param path
 * @param body
 * @param query
 */
export const TaskController_page = useService([
  'TaskController_page', 
  'get', 
  '/system/task/page', 
  {
    default: { params:  } 
  }
])
/**
 * TaskController_update更新信息
 * @param path
 * @param body
 * @param query
 */
export const TaskController_update = useService([
  'TaskController_update', 
  'put', 
  '/system/task/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_create创建用户
 * @param path
 * @param body
 * @param query
 */
export const UserController_create = useService([
  'UserController_create', 
  'post', 
  '/user/create', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_destroy删除用户
 * @param path
 * @param body
 * @param query
 */
export const UserController_destroy = useService([
  'UserController_destroy', 
  'delete', 
  '/user/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_detail查询当前用户详情
 * @param path
 * @param body
 * @param query
 */
export const UserController_detail = useService([
  'UserController_detail', 
  'get', 
  '/user/detail', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_elements查询用户资源
 * @param path
 * @param body
 * @param query
 */
export const UserController_elements = useService([
  'UserController_elements', 
  'get', 
  '/user/elements', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_group_create创建用户分组
 * @param path
 * @param body
 * @param query
 */
export const UserController_group_create = useService([
  'UserController_group_create', 
  'post', 
  '/user/group/create', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_group_destroy删除用户分组
 * @param path
 * @param body
 * @param query
 */
export const UserController_group_destroy = useService([
  'UserController_group_destroy', 
  'delete', 
  '/user/group/destroy/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_group_list查询用户分组列表
 * @param path
 * @param body
 * @param query
 */
export const UserController_group_list = useService([
  'UserController_group_list', 
  'get', 
  '/user/group/list', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_group_update更新用户分组
 * @param path
 * @param body
 * @param query
 */
export const UserController_group_update = useService([
  'UserController_group_update', 
  'put', 
  '/user/group/update/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_info查询用户详情
 * @param path
 * @param body
 * @param query
 */
export const UserController_info = useService([
  'UserController_info', 
  'get', 
  '/user/info/{id}', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_list查询用户列表
 * @param path
 * @param body
 * @param query
 */
export const UserController_list = useService([
  'UserController_list', 
  'get', 
  '/user/list', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_page查询用户分页
 * @param path
 * @param body
 * @param query
 */
export const UserController_page = useService([
  'UserController_page', 
  'get', 
  '/user/page', 
  {
    default: { params:  } 
  }
])
/**
 * UserController_update更新用户信息
 * @param path
 * @param body
 * @param query
 */
export const UserController_update = useService([
  'UserController_update', 
  'put', 
  '/user/update/{id}', 
  {
    default: { params:  } 
  }
])
