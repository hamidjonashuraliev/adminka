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
    "inch 13-17",
    "inch 24-32",
    "inch 8-12",
    "inch 1.4-1.6",
    "compact",
    "large",
    "normal",
    "compact"

];
exports.product_volume_enums = ["84(sm³)",
    "42(sm³)",
    "2160(sm³)",
    "4.5(sm³)",
    "2400(sm³)",
    "288(sm³)",
    "90(sm³)",
    "40(sm³)",
    "dB",
    "mAh",
    "W"
];
exports.product_specs_enums = [
    "Storage Laptop",
    "CPU Laptop",
    "RAM Laptop",
    "Connectivity Laptop",
    "Storage Smartphone",
    "CPU Smartphone",
    "RAM Smartphone",
    "Connectivity Smartphone",
    "Battery Smartphone",
    "Storage Planshet",
    "CPU Planshet",
    "Connectivity Planshet",
    "RAM Planshet",
    "Battery Planshet",
    "Storage USB",
    "Type USB",
    "Connectivity USB",
    "Storage Watch",
    "CPU Watch",
    "Connectivity Watch",
    "Battery Watch",
    "Type Keyboard",
    "Input Keyboard",
    "Connectivity Keyboard",
    "Type Mouse",
    "Input Mouse",
    "Connectivity Mouse",
    "Type Charger",
    "Power Output Charger",
    "Input Charger",
    "Type VR",
    "Input VR",
    "Connectivity VR",
    "Type Monitor",
    "Input Monitor",
    "Connectivity Monitor",
    "Resolution Monitor",
    "Power Output Headphone",
    "Driver Size Headphone",
    "Bluetooth Headphone",
    "Power Output AirPods",
    "Driver Size AirPods",
    "Bluetooth AirPods"
];

/******************************
 *   MONGODB RELETED COMMANDS *
 *****************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if (typeof target === "string") {
        return new mongoose.Types.ObjectId(target);
    } else return target;
};
