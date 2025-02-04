const assert = require("assert");
const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");

class Store {
    constructor() {
        this.memberModel = MemberModel;
    }
    async getAllStoresData() {
        try {
            let result = await this.memberModel
                .find({
                    mb_type: "STORE"
                })
                .exec();

            assert.ok(result, Definer.general_err1);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Store;
