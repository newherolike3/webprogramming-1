const customers = require("../../models/mongo/customers");
// CRUD
// R-Read อ่านข้อมูล
exports.index = async (req, res, next) => {
    let data = await customers.find();
    res.status(200).json(data);
};

// C-Create เขียนข้อมูล เพิ่มข้อมูล
exports.insert = async (req, res, next) => {
    let data = new customers({
        customerID: req.body.customerID,
        customerTitleName: req.body.customerTitleName,
        customerFirstName: req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        customerAddress: req.body.customerAddress,
        customerTel: req.body.customerTel,
        customerEmail: req.body.customerEmail,
        customerUsername: req.body.customerUsername,
        customerPassword: req.body.customerPassword
    });
    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
};

// U-Update แก้ไขข้อมูล
exports.update = async (req, res, next) => {

    const id = "610770a9bb33d61a5d3baf57";

    let update = await customers.updateOne(
        { _id: id },
        {
            customerID: "20001",
            customerFirstName: "อโนทัย"
        }
    );

    if(update.nModified === 0){
        res.status(400).json({
            error: "ไม่สามารถแก้ไขข้อมูลได้"
        });
    } else {
        res.status(200).json({
            data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
        });
    }

};

// D-Delete ลบข้อมูล
exports.delete = async (req, res, next) => {

    const id = "6107702716b276179dd0c609";

    const data = await customers.deleteOne(
        { _id: id }
    );

    if(data.deletedCount === 0){
        res.status(400).json({
            error: "ไม่สามารถลบข้อมูลได้"
        });
    } else {
        res.status(200).json({
            message: "ลบข้อมูลเรียบร้อยแล้ว"
        });
    }

};