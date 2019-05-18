
//connect to the database
//mongoose.connect('mongodb+srv://nbhatt3:nbhatt3@nbhatt3cluster-fddvu.mongodb.net/test?retryWrites=true');

// create a DB Schema
/*
var todoSchema = new mongoose.Schema({
    item: String
});

//create a model or Collection   - stored as collection on DB
 var Todo = mongoose.model('Todo');
var itemOne = Todo({item: 'Buy Flowers'}).save(function(err){
    if (err) throw err;
        console.log('item Saved');
});

var mongoose = require('mongoose');
*/

var bodyParser = require('body-parser');

var data = [{item: 'Get Milk'}, {item: 'Make Presentation'}, {item: 'Morning Walk'}];

// include bodyParser
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo', {todos: data});
    });

    app.post('/todo',urlencodedParser, function(req,res){
            data.push(req.body);
            res.json(data);
    });

    app.delete('/todo/:item',function(req,res){
        data =  data.filter(function(todo){
                return todo.item.replace(/ /g,'-') !== req.params.item;
        });
     res.json(data);       
    });

};