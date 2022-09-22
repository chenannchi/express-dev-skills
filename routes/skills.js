import { Router } from 'express'
// import { skills } from "../data/skill-data.js"
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

router.get('/', skillsCtrl.index)
router.get("/new",skillsCtrl.new)
router.post("/",skillsCtrl.create)
router.get("/:id",skillsCtrl.show)
router.delete("/:id",skillsCtrl.delete)

export {
  router
}
