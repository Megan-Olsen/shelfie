module.exports = {
  create: (req, res, next) => {
      const db = req.app.get("db")
      const { name, price, image_url } = req.body

      db.create_product([name, price, image_url])
          .then(() => res.sendStatus(200))
          .catch((error) => {
              res.status(500).send({ errorMessage: "Not working, silly Magpie. Check back later" })
              console.log(error)
          })
  },

  getInventory: (req, res, next) => {
      const db = req.app.get("db")

      db.get_inventory()
          .then((products) => res.status(200).send(products))
          .catch((error) => {
              res.status(500).send({ errorMessage: "Not working, silly Magpie. Check back later" })
              console.log(error)
          })
  },

  deleteProduct: (req, res) => {
      const db = req.app.get("db")
      const { id } = req.params

      db.delete_product(id)
          .then(() => res.sendStatus(200))
          .catch((error) => {
              res.status(500).send({ errorMessage: "Not working, silly Magpie. Check back later" })
              console.log(error)
          })
  },

  updateProduct: async (req, res) => {
      console.log("hit")
      const db = req.app.get("db")
      const { id } = req.params
      const { name, price, image_url } = req.body

      let data = await db
          .update_product(id, name, price, image_url)
          .catch((error) => res.status(500).send(error))

      res.status(200).send(data);
  },
}