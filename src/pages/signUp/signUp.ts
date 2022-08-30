import '../../less/form.less'
import tmpl from './signUp.hbs'

const context = {
    title: "Регистрация",
    inputs: {
        email: {
            id: "Почта",
            type: "email",
            name: "email",
            placeholder: "pochta@yandex.ru"
        },
        login: {
            id: "Логин",
            type: "text",
            name: "login",
            placeholder: "Логин"
        },
        first_name: {
            id: "Имя",
            type: "text",
            name: "first_name",
            placeholder: "Иван"
        },
        second_name: {
            id: "Фамилия",
            type: "text",
            name: "second_name",
            placeholder: "Иванов"
        },
        phone: {
            id: "Телефон",
            type: "phone",
            name: "phone",
            placeholder: "+7 (909) 967 30 30"
        },
        password: {
            id: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Пароль"
        },
        checkPassword: {
            id: "Пароль (ещё раз)",
            type: "password",
            name: "checkPassword",
            placeholder: "Пароль (ещё раз)"
        }
    },
    button__text: "Зарегистрироваться",
    footerNote: {
        text: "Войти",
        url: "../index/index.html"
    }
};

export const htmlSignUp = tmpl(context)