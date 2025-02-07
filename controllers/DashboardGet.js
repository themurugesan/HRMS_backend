const Image = require("../models/product");
const Userschemadb = require("../models/user");

async function DashboardGet(req, res) {
    try {
        const images = await Image.find();
        const user = req.user;

        // console.log(images,'total data')
        // console.log(user,'it useremail and datasss');
        

        if (!user || !user.email) {
            return res.status(400).send({ message: "User information is missing" });
        }

        const check = await Image.findOne({ email: user.email });
        // console.log(check,'it s a ture data')


        if (check) {

            const myinfoupload = await Userschemadb.updateOne(
                { email: user.email },
                { $set: { myinfo: check } }
            );

            // console.log(myinfoupload,'updated myinfoooo');
            
            

           

            return res.status(200).json( check );
        } else {
            return res.status(200).send({ message: "User not found",code:401 });
        }
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(200).send({ message: "Error fetching images", code: 401 });
    }
}

module.exports = DashboardGet;
