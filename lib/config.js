const mongoose = require("mongoose");

exports.member_type_enums = ["USER", "ADMIN", "PEDAL", "STORE"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETE"];
exports.ordernary_enums = ["Y", "N"];
exports.product_collection_enums = [
    "laptop",
    "smartphone",
    "keyboard",
    "mouse",
    "charger",
    "earbuds",
    "accessory",
];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = [
    "inch",
    "compact",
    "normal",
    "large",
    "tenkeyless",
    "full-size",
    "small",
    "high-power",
    "standart",
    "over-ear",
];
exports.product_volume_enums = ["cm3", "WxHxD", "W", "mAh", "dB", "inch"];
exports.product_specs_enums = [
    "Storage",
    "CPU",
    "RAM",
    "Type",
    "Power Output",
    "Driver Size",
    "Input",
    "Capacity",
    "Connectivity",
    "Bluetooth",
];
/******************************
 *   MONGODB RELETED COMMANDS *
 *****************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if (typeof target === "string") {
        return new mongoose.Types.ObjectId(target);
    } else return target;
};
