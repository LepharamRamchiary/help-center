import Card from "../models/card.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createCard = async (req, res) => {
 const { title, description} = req.body
 try {
    const newCard = new Card({title, description})
    await newCard.save()
    res.status(201).json(new ApiResponse(201, newCard, "Card crearted successfully"))
 } catch (error) {
    throw new ApiError(500,"Something went wrong while creating the card")
 }
}

const getAllCard = async (req, res) => {

}

export { getAllCard , createCard}