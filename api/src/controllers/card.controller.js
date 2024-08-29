import Card from "../models/card.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createCard = async (req, res) => {
    const { title, description } = req.body
    try {
        const newCard = new Card({ title, description })
        await newCard.save()
        res.status(201).json(new ApiResponse(201, newCard, "Card crearted successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while creating the card")
    }
}

const getAllCard = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(new ApiResponse(200, cards, "Cards fetched successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching cards")
    }
}

const getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title })
        if (!card) {
            throw new ApiError(404, "Card not found")
        }
        res.status(200).json(new ApiResponse(200, card, "Card fetched successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching card")
    }
}

export { getAllCard, createCard, getCardByTitle }