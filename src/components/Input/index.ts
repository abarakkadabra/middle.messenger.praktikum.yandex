import Block from "../../utils/Block"
import tmpl from './input.hbs'

interface IInputProps {
    name?: string,
    placeholder?: string,
    classes: Array<string>,
    pattern: string,
    id?: string
}

export class Input extends Block<IInputProps> {
    constructor(props: IInputProps) {
        super(props)
        const self = this.element
        this.props.classes.forEach(function (value: string) {
            self?.classList.add(value)
        })
        self?.setAttribute('name', this.props.name)

        const checkContent = this.checkContent
        this.element?.addEventListener('blur', function (event) {
            const target = event.target as HTMLTextAreaElement
            checkContent(target, target.value, props.pattern)
        })
        this.element?.addEventListener('focus', function (event) {
            const target = event.target as HTMLTextAreaElement
            checkContent(target, target.value, props.pattern)
        })
    }
    public checkContent(target: HTMLTextAreaElement, value: string, pattern: string) {

        const reg = new RegExp(pattern)
        if (!reg.test(value) || value === '') {
            target.classList.add('wrong')
        }
        if (reg.test(value)) {
            target.classList.remove('wrong')
        }
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
