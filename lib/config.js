const mongoose = require("mongoose");

exports.member_type_enums = ["USER", "ADMIN", "PEDAL", "STORE"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordernary_enums = ["Y", "N"];
exports.product_collection_enums = [
    "laptop",
    "smartphone",
    "keyboard",
    "monitor",
    "headphone",
    "planshet",
    "usb",
    "vr",
    "watch",
    "mouse",
    "charger",
    "airpods",
    "accessory"
];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETE"];
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
    "over-ear"
];
exports.product_volume_enums = ["sm³", "WxHxD", "W", "mAh", "dB"];
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
    "Resolution",
    "Bluetooth"
];

/******************************
 *   MONGODB RELETED COMMANDS *
 *****************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if (typeof target === "string") {
        return new mongoose.Types.ObjectId(target);
    } else return target;
};
