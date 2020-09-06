module.exports = {
  getInventory: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory().then(inventory => res.status(200).send(inventory))
        .catch (err => {
            res.status(500).send({errorMessage: "this isn't working"})
            console.log(err)
        })
  },
};
// getAll: (req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.read_products()
//         .then( products => res.status(200).send( products ) )
//         .catch( err => {
//             res.status(500).send({errorMessage: "Its broken you silly goose."});
//             console.log(err)
//      } );
// },