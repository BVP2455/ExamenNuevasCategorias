import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import * as RestaurantCategoryMiddleware from '../middlewares/RestaurantCategoryMiddleware.js'
import { hasRole, isLoggedIn } from '../middlewares/AuthMiddleware.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(
      RestaurantCategoryController.index)
    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantCategoryMiddleware.restaurantCategoryNoExits,
      RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryController.create)
}
export default loadFileRoutes
