import mongoose, { Schema } from "mongoose"

const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Card = mongoose.model("Card", cardSchema)
export default Card
