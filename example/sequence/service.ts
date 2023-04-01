import { useService } from 'wuhao-network'
import { 
} from './entity'

/**
 * Update an existing pet
 * @return 200 Successful operation
 * @return 400 Invalid ID supplied
 * @return 404 Pet not found
 * @return 405 Validation exception
 */
export const updatePet = useService([
  'updatePet', 
  'put', 
  '/pet',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Add a new pet to the store
 * @return 200 Successful operation
 * @return 405 Invalid input
 */
export const addPet = useService([
  'addPet', 
  'post', 
  '/pet',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Finds Pets by status
 * @return 200 successful operation
 * @return 400 Invalid status value
 */
export const findPetsByStatus = useService([
  'findPetsByStatus', 
  'get', 
  '/pet/findByStatus',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Finds Pets by tags
 * @return 200 successful operation
 * @return 400 Invalid tag value
 */
export const findPetsByTags = useService([
  'findPetsByTags', 
  'get', 
  '/pet/findByTags',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Find pet by ID
 * @return 200 successful operation
 * @return 400 Invalid ID supplied
 * @return 404 Pet not found
 */
export const getPetById = useService([
  'getPetById', 
  'get', 
  '/pet/{petId}',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Updates a pet in the store with form data
 * @return 405 Invalid input
 */
export const updatePetWithForm = useService([
  'updatePetWithForm', 
  'post', 
  '/pet/{petId}',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Deletes a pet
 * @return 400 Invalid pet value
 */
export const deletePet = useService([
  'deletePet', 
  'delete', 
  '/pet/{petId}',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * uploads an image
 * @return 200 successful operation
 */
export const uploadFile = useService([
  'uploadFile', 
  'post', 
  '/pet/{petId}/uploadImage',
  {
    tags: [&#x27;pet&#x27;]
  }
])

/**
 * Returns pet inventories by status
 * @return 200 successful operation
 */
export const getInventory = useService([
  'getInventory', 
  'get', 
  '/store/inventory',
  {
    tags: [&#x27;store&#x27;]
  }
])

/**
 * Place an order for a pet
 * @return 200 successful operation
 * @return 405 Invalid input
 */
export const placeOrder = useService([
  'placeOrder', 
  'post', 
  '/store/order',
  {
    tags: [&#x27;store&#x27;]
  }
])

/**
 * Find purchase order by ID
 * @return 200 successful operation
 * @return 400 Invalid ID supplied
 * @return 404 Order not found
 */
export const getOrderById = useService([
  'getOrderById', 
  'get', 
  '/store/order/{orderId}',
  {
    tags: [&#x27;store&#x27;]
  }
])

/**
 * Delete purchase order by ID
 * @return 400 Invalid ID supplied
 * @return 404 Order not found
 */
export const deleteOrder = useService([
  'deleteOrder', 
  'delete', 
  '/store/order/{orderId}',
  {
    tags: [&#x27;store&#x27;]
  }
])

/**
 * Create user
 * @return default successful operation
 */
export const createUser = useService([
  'createUser', 
  'post', 
  '/user',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Creates list of users with given input array
 * @return 200 Successful operation
 * @return default successful operation
 */
export const createUsersWithListInput = useService([
  'createUsersWithListInput', 
  'post', 
  '/user/createWithList',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Logs user into the system
 * @return 200 successful operation
 * @return 400 Invalid username/password supplied
 */
export const loginUser = useService([
  'loginUser', 
  'get', 
  '/user/login',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Logs out current logged in user session
 * @return default successful operation
 */
export const logoutUser = useService([
  'logoutUser', 
  'get', 
  '/user/logout',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Get user by user name
 * @return 200 successful operation
 * @return 400 Invalid username supplied
 * @return 404 User not found
 */
export const getUserByName = useService([
  'getUserByName', 
  'get', 
  '/user/{username}',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Update user
 * @return default successful operation
 */
export const updateUser = useService([
  'updateUser', 
  'put', 
  '/user/{username}',
  {
    tags: [&#x27;user&#x27;]
  }
])

/**
 * Delete user
 * @return 400 Invalid username supplied
 * @return 404 User not found
 */
export const deleteUser = useService([
  'deleteUser', 
  'delete', 
  '/user/{username}',
  {
    tags: [&#x27;user&#x27;]
  }
])

