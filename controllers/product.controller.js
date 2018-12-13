const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
}

exports.product_create = function(req, res){
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(err){
        if(err){
            return next(err);
        }else{
            res.send('Product created successfully');
        }
    })
}

exports.product_details = function(req, res){
    console.log(req.params.id);
    Product.findById(req.params.id, function(err, product){
        if(err){
            return next(err);
        }else{
            res.send(product);
        }
    })
}

exports.product_update = function(req, res){
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product){
        if(err){
            return next(err);
        }else{
            res.send("Product updated");
        }
    })
}

exports.product_delete = function(req, res){
    console.log(req.params.id);
    Product.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return next(err);
        }else{
            res.send('Deleted Successfully');
        }
    })
}