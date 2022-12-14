import '../../less/userSettings.less'
import tmpl from './changePassword.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import { withStore } from '../../utils/Store';
import { Avatar } from '../../components/Avatar';
import { Title } from '../../components/Title';
import UserApiController from '../../controllers/UserApiController';
import { IChangePassword } from '../../api/UserApi';
import AuthApiController from '../../controllers/AuthApiController';

export class ChangePasswordPageCore extends Block {
    init() {
        AuthApiController.fetchUser()
    }
    protected componentDidUpdate(): boolean {
        this.children.avatar = new Avatar({
            userAvatar: 'https://ya-praktikum.tech/api/v2/resources' + this.props.avatar,
            altText: 'Ваш аватар'
        })
        this.children.title = new Title({
            value: this.props.login,
            class: "user__title"
        })
        this.children.button = new Button({
            class: 'form__button',
            value: 'Сохранить',
            events: {
                click: () => this.changePassword()
            }
        })
        this.children.backButton = new Button({
            class: 'back__button',
            events: {
                click: () => window.history.back()
            }
        })

        this.children.oldPasswordInput = new Input({
            name: 'oldPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        this.children.passwordInput = new Input({
            name: 'newPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        this.children.checkPasswordInput = new Input({
            name: 'checkPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        return true
    }
    public changePassword() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (!inputs.length || data.newPassword === data.checkPassword) {
            delete data.checkPassword
            UserApiController.changePassword(data as unknown as IChangePassword)
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const ChangePasswordPage = withUser(ChangePasswordPageCore)