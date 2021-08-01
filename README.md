# Локальный API с базой данных для ведения учета тренажерного зала


---
__Установка локального API__
```
git clone https://github.com/maksim4k1/Gym_API
```
__Ссылка на приложение__
https://github.com/maksim4k1/Gym

>__Важно!__
API запускается по ссылке http://localhost:3030/

---
### Для запуска проекта используйте
```
npm start
```
### Для загрузки всех пакетов используйте
```
npm install
```

---
## Запросы для взаимодейсвия с инвентарем
__Возможности API:__
* Просмотр инвентаря
* Добавление нового инвентаря
* Редактирование инвентаря
* Удаление инвентаря

1. __Просмотр инвентаря__
```
// GET запрос
http://localhost:3030/gym/inventory/
```
2. __Просмотр спорт инвентаря по id__
```
// GET запрос по id
http://localhost:3030/gym/inventory/:id
```
3. __Добавление нового инвентаря__
```
// POST запрос
http://localhost:3030/gym/inventory/create

// Пример отправки POST запроса
const object = {
    name: string,
    isInGoodContion: boolean,
    quantity: number,
    weight: number,
    producedBy: string
}
await fetch(`http://localhost:3030/gym/inventory/create`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
});
```
4. __Редактирование инвентаря__
```
// PUT запрос
http://localhost:3030/gym/inventory/update/:id

// Пример отправки PUT запроса
const object = {
    name: string,
    isInGoodContion: boolean,
    quantity: number,
    weight: number,
    producedBy: string
}
await fetch(`http://localhost:3030/gym/inventory/update/:id`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
});
```
5. __Удаление инвентаря__
```
// DELETE запрос
http://localhost:3030/gym/inventory/delete/:id
```
---
## Запросы для взаимодейсвия с тренерами
__Возможности API:__
* Просмотр тренеров
* Добавление нового тренера
* Редактирование тренера
* Удаление тренера

1. __Просмотр тренеров__
```
// GET запрос
http://localhost:3030/gym/trainers/
```
2. __Просмотр тренера по id__
```
// GET запрос по id
http://localhost:3030/gym/trainers/:id
```
3. __Добавление нового тренера__
```
// POST запрос
http://localhost:3030/gym/trainers/create

// Пример отправки POST запроса
const object = {
    name: string,
    age: number,
    specialization: string,
    wage: number
}
await fetch(`http://localhost:3030/gym/trainers/create`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
});
```
4. __Редактирование тренера__
```
// PUT запрос
http://localhost:3030/gym/trainers/update/:id

// Пример отправки PUT запроса
const object = {
    name: string,
    age: number,
    specialization: string,
    wage: number
}
await fetch(`http://localhost:3030/gym/trainers/update/:id`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
});
```
5. __Удаление тренера__
```
// DELETE запрос
http://localhost:3030/gym/trainers/delete/:id
```