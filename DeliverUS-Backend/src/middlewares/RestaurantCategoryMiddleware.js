import { RestaurantCategory } from '../models/models.js'

const restaurantCategoryNoExits = async (req, res, next) => {
    try {
      const numberOfRestaurantCategories = await RestaurantCategory.count({
        where: { name: req.body.name }
      })
      if (numberOfRestaurantCategories === 0) {
        return next()
      }
      return res.status(409).send('Some category belong to this restaurant.')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
  
  export { restaurantCategoryNoExits }






