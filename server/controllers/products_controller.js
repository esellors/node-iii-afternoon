module.exports = {
   create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name, description, price, image_url} = req.body;

      dbInstance.create_product(name, description, price, image_url)
         .then(() => res.sendStatus(200))
         .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error);
         });
   },
   getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.read_product(req.params.id)
         .then(() => res.sendStatus(200))
         .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error);
         });
   },
   getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.read_products()
         .then(() => res.sendStatus(200))
         .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error);
         });
   },
   update: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.update_product(req.params.id, req.query.desc)
         .then(() => res.sendStatus(200))
         .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error);
         });
   },
   delete: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.read_product(req.params.id)
         .then(() => res.sendStatus(200))
         .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error);
         });
   }
}