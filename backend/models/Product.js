const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            ref: "User",
        },
        title: {
            type: String
        },
        category: {
            type: String
        },
        price:{
            type: Number
        },
        image: {
            type: Object,
            default: {},
        },
        description: {
            type: String
        },
        rating:[
            {
                rate: Number
            },
            {
                count: Number
            }
        ],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;


