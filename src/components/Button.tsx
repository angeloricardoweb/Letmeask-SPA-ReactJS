
import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss'

//vai enviar as propriedades/atributos do botao
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}


//vai enviar as propriedades/atributos do botao
// type ButtonProps = {
//     type: string;
// }
export function Button({isOutlined = false, ...props}: ButtonProps) {
    return (
        <button className={`button ${isOutlined? 'outlined' : ''}`} {...props}/>
            
    )
}
