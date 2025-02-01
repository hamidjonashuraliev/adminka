const mongoose = require("mongoose");
const {
    product_collection_enums,
    product_status_enums,
    product_size_enums,
    product_volume_enums,
    product_specs_enums,
} = require("../lib/config");

const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true },
        product_collection: {
            type: String,
            reuired: true,
            enum: {
                values: product_collection_enums,
                message: "{VALUE} is not among permitted enum values",
            },
        },
        product_status: {
            type: String,
            required: false,
            default: "PAUSED",
            enum: {
                values: product_status_enums,
                message: "{VALUE} is not among permitted enum values}",
            },
        },
        product_price: {
            type: Number,
            required: true,
        },
        product_discount: {
            type: Number,
            required: false,
            default: 0,
        },
        product_left_cnt: {
            type: Number,
            required: true,
        },
        product_size: {
            type: String,
            default: "normal",
            required: function () {
                const sized_list = [
                    "smartphone",
                    "keyboard",
                    "mouse",
                    "charger",
                    "earbuds",
                ];
                return sized_list.includes(this.product_collection);
            },
            enum: {
                values: product_size_enums,
                message: "{VALUE} is not among permitted enum values}",
            },
        },
        product_volume: {
            type: String,
            default: 1,
            required: function () {
                return this.product_collection === "laptop";
            },
            enum: {
                values: product_volume_enums,
                message: "{VALUE} is not among permitted enum values}",
            },
        },
        product_specs: {
            type: String,
            default: 1,
            required: true, //todo
            enum: {
                values: product_specs_enums,
                message: "{VALUE} is not among permitted enum values}",
            },
        },
        product_description: { type: String, required: true },
        product_images: { Array, required: false, default: [] },
        product_likes: { type: Number, required: false, default: 0 },
        product_views: { type: Number, required: false, default: 0 },
        store_mb_id: {
            type: Schema.Types.ObjectId,
            ref: "Member",
            required: false,
        },
    },
    { timestamps: true }
); //createdAt, updatedAt

productSchema.index(
    { store_mb_id: 1, product_name: 1, product_size: 1, product_volume: 1, product_specs: 1 },
    { unique: true }
);
module.exports = mongoose.model("Product", productSchema);
