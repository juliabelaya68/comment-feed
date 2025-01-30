import { fetchAndRenderComments } from "../index1.js"
import { registration, setName, setToken } from "./api.js"
import { renderLogin } from "./renderLogin.js"

export const renderRegistrstion =()=> {
    const container= document.querySelector('.container')

    const LoginHtml=`
    <section class="add-form">
    <h1>Форма регистрации</h1>
    <input 
    type="text"
    class="add-form-name"
    placeholder="Введите имя"
    id="name"
    required
    />
    <input
    type="text"
    class="add-form-name"
    placeholder="Введите логин"
    id="login"
    required>
    </input>
    <input
    type="password"
    class="add-form-name"
    placeholder="Введите пароль"
    id="password"
    required></input>

    <fieldset class="add-form-registry">
    <button class="add-form-button-main button-main" type="submit">
    Зарегестрироваться</button>
    <u class="add-form-button-link entry">
    Войти</u>
    </fieldset>
    </section>`

    container.innerHTML= LoginHtml

     document.querySelector(".entry").addEventListener("click", ()=>{
        renderLogin()
     })

    const nameEl= document.querySelector('#name')
    const loginEl= document.querySelector('#login')
    const passwordEl= document.querySelector('#password')
    const submitButtonEl= document.querySelector('.button-main')

    submitButtonEl.addEventListener("click",() => {
        registration(nameEl.value,loginEl.value,passwordEl.value)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setToken(data.user.token)
            setName(data.user.name)
            fetchAndRenderComments()
        })
    })


} 