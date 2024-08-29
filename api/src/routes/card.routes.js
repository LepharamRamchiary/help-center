import { Router } from "express"
import { createCard, getAllCard, getCardByTitle } from "../controllers/card.controller.js"

const router = Router()

router.route("/").post(createCard)
router.route("/").get(getAllCard)
router.route("/:title").get(getCardByTitle)

export default router