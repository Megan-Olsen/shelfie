const { default: Axios } = require("axios");

module.exports = {
  getInventory: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory().then(inventory => res.status(200).send(inventory))
        .catch (err => {
            res.status(500).send({errorMessage: "this isn't working"})
            console.log(err)
        })
  },

    
  // addProduct: (req, res, next) {
  //   const {name, price, image_url} = req.body


  //   // const dbInstance = req.app.get('db');

  //   // dbInstance.add_product([ name, price, image_url ]).then( () => res.sendStatus(200) )
  //   //   .catch( (err) => {
  //   //     res.status(500).send({errorMessage: "Its broken you silly goose."});
  //   //     console.log(err)
  //   //   })
  // }


};
