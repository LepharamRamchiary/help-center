import { Router } from "express"
import { createCard, getAllCard } from "../controllers/card.controller.js"

const router = Router()

router.route("/create-card").post(createCard)
router.route("/get-all-cards").get(getAllCard)

export default router