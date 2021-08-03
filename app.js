const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

const {initDb} = require("./db/index.js");

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());


// ====================================================================
//                          I N V E N T O R Y
// ====================================================================


// ======================= GET INVENTORY =======================

app.get('/gym/inventory', (req, res) => {
    res.send(initDb.get("inventory"));
});


// ======================= GET INVENTORY BY ID =======================

app.get('/gym/inventory/:id', (req, res) => {
    const item = initDb.get("inventory").find(item => item.id === req.params.id);
    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    } else{
        res.status(200).send(item);
    }
});


// ======================= ADD INVENTORY =======================

app.post('/gym/inventory/create', (req, res) => {
    const body = req.body;

    if(
        body.name === undefined ||
        body.isInGoodContion === undefined ||
        body.quantity === undefined ||
        body.weight === undefined ||
        body.producedBy === undefined ||
        body.image === undefined
    ){
        res.status(400).json({
            errorCode: "ITEM_IN_BODY_NOT_FOUND",
            errorText: "Введены не все данные"
        });
    } else if(
        typeof(body.name) !== "string" ||
        typeof(body.isInGoodContion) !== "boolean" ||
        typeof(body.quantity) !== "number" ||
        typeof(body.weight) !== "number" ||
        typeof(body.producedBy) !== "string" ||
        typeof(body.image) !== "string"
    ){
        res.status(400).json({
            errorCode: "DATA_IS_NOT_VALID",
            errorText: "Введены не верные данные",
            errorSolution: `{ name: string, isInGoodContion: boolean, quantity: number, weight: number, producedBy: string }`
        });
    } else{
        initDb.get("inventory").push({
            id: uuid.v4(),
            name: body.name,
            isInGoodContion: body.isInGoodContion,
            quantity: body.quantity,
            weight: body.weight,
            producedBy: body.producedBy,
            image: body.image
        }).write();

        res.status(200).send("Объект добавлен успешно!");
    }
});


// ======================= UPDATE INVENTORY BY ID =======================

app.put("/gym/inventory/update/:id", (req, res) => {
    const id = req.params.id;
    const item = initDb.get("inventory").find(item => item.id === id).value();

    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    }

    const body = req.body;

    if(body.id !== undefined){
        res.status(400).json({
            errorCode: "CAN_NOT_UPDATE_id",
            errorText: "Нельзя изменять id объекта"
        });
    }
    if(body.name !== undefined){
        if(typeof(body.name) !== "string") error400();

        item.name = body.name;
    }
    if(body.isInGoodContion !== undefined){
        if(typeof(body.isInGoodContion) !== "boolean") error400();
        
        item.isInGoodContion = body.isInGoodContion;
    }
    if(body.quantity !== undefined){
        if(typeof(body.quantity) !== "number") error400();
        
        item.quantity = body.quantity;
    }
    if(body.weight !== undefined){
        if(typeof(body.weight) !== "number") error400();
        
        item.weight = body.weight;
    }
    if(body.producedBy !== undefined){
        if(typeof(body.producedBy) !== "string") error400();
        
        item.producedBy = body.producedBy;
    }
    if(body.image !== undefined){
        if(typeof(body.image) !== "string") error400();
        
        item.image = body.image;
    }

    // Error 400
    function error400(){
        res.status(400).json({
            errorCode: "DATA_IS_NOT_VALID",
            errorText: "Введены не верные данные",
            errorSolution: `{ name: string, isInGoodContion: boolean, quantity: number, weight: number, producedBy: string, image: string }`
        });
    }

    // No error
    initDb.get("inventory").find({id}).assign(item).write();
    res.status(200).send("Изменения прошли успешно!");
});


// ======================= DELETE INVENTORY BY ID =======================

app.delete("/gym/inventory/delete/:id", (req, res) => {
    const id = req.params.id;
    const item = initDb.get("inventory").find(item => item.id === id).value();

    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    } else{
        const index = initDb.get("inventory").findIndex(arrayItem => arrayItem === item);

        initDb.get("inventory").splice(index, 1).write();
        res.status(200).send("Объект успешно удален!");
    }
});



// ====================================================================
//                          T R A I N E R S
// ====================================================================


// ======================= GET TRAINERS =======================

app.get("/gym/trainers", (req, res) => {
    res.send(initDb.get("trainers"));
});


// ======================= GET TRAINERS BY ID =======================

app.get("/gym/trainers/:id", (req, res) => {
    const item = initDb.get("trainers").find(item => item.id === req.params.id)
    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    } else{
        res.status(200).send(item);
    }
    res.send(item);
});


// ======================= ADD TRAINERS =======================

app.post("/gym/trainers/add", (req, res) => {
    const body = req.body;

    if(
        body.name === undefined ||
        body.age === undefined ||
        body.specialization === undefined ||
        body.wage === undefined ||
        body.image === undefined
    ){
        res.status(400).json({
            errorCode: "ITEM_IN_BODY_NOT_FOUND",
            errorText: "Введены не все данные"
        });
    } else if(
        typeof(body.name) !== "string" ||
        typeof(body.age) !== "number" ||
        typeof(body.specialization) !== "string" ||
        typeof(body.wage) !== "number" ||
        typeof(body.image) !== "string"
    ){
        res.status(400).json({
            errorCode: "DATA_IS_NOT_VALID",
            errorText: "Введены не верные данные",
            errorSolution: `{ name: string, age: number, specialization: string, wage: number }`
        });
    } else{
        initDb.get("trainers").push({
            id: uuid.v4(),
            name: body.name,
            age: body.age,
            specialization: body.specialization,
            wage: body.wage,
            image: body.image
        }).write();

        res.status(200).send("Объект добавлен успешно!");
    }
});


// ======================= UPDATE TRAINERS BY ID =======================

app.put("/gym/trainers/update/:id", (req, res) => {
    const id = req.params.id;
    const item = initDb.get("trainers").find(item => item.id === id).value();

    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    }

    const body = req.body;

    if(body.id !== undefined){
        res.status(400).json({
            errorCode: "CAN_NOT_UPDATE_id",
            errorText: "Нельзя изменять id объекта"
        });
    }
    if(body.name !== undefined){
        if(typeof(body.name) !== "string") error400();

        item.name = body.name;
    }
    if(body.age !== undefined){
        if(typeof(body.age) !== "number") error400();

        item.age = body.age;
    }
    if(body.specialization !== undefined){
        if(typeof(body.specialization) !== "string") error400();

        item.specialization = body.specialization;
    }
    if(body.wage !== undefined){
        if(typeof(body.wage) !== "number") error400();

        item.wage = body.wage;
    }
    if(body.image !== undefined){
        if(typeof(body.image) !== "number") error400();

        item.image = body.image;
    }

    // Error 400
    function error400(){
        res.status(400).json({
            errorCode: "DATA_IS_NOT_VALID",
            errorText: "Введены не верные данные",
            errorSolution: `{ name: string, age: number, specialization: string, wage: number, image: string }`
        });
    }

    // No error
    initDb.get("trainers").find({id}).assign(item).write();
    res.status(200).send("Изменения прошли успешно!");
});


// ======================= DELETE TRAINERS BY ID =======================

app.delete("/gym/trainers/delete/:id", (req, res) => {
    const item = initDb.get("trainers").find(item => item.id === req.params.id);

    if(item === undefined){
        res.status(404).json({
            errorCode: "ITEM_NOT_FOUND",
            errorText: "Объекта с таким id не найдено"
        });
    } else{
        const index = initDb.get("trainers").findIndex(arrayItem => arrayItem === item);


        initDb.get("trainers").splice(index, 1).write();
        res.status(200).send("Объект успешно удален!")
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});