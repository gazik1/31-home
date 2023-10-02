export class FormApp extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
  
    this.innerHTML = `<form action="">
    <style>
        input{
            display: block;
            padding:5px 0;
            margin: 5px 0;
        }
        input:invalid {
        border: red solid 2px;
         }

         
    </style>
    <input 
    type="text" 
    placeholder="Фамилия"
    required>
    <input 
    type="text" 
    placeholder="Имя"
    required>
    <input 
    type="text" 
    placeholder="Отчество"
    required>

    <input 
    type="tel" 
    placeholder="Номер телефона"
    minlength="3"
    maxlength="15"
    title="Можно только +"
    pattern="[0-9]+|(\+[0-9]+)"
    required>

    <input 
    type="email" 
    placeholder="Почта"
    required>

    <input 
    type="password" 
    placeholder="Пароль" 
    title="Хотя бы одна заглавная буква, одна цифра и один специальный символ и на английском языке"
    minlength="8"
    maxlength="15"
    pattern="^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]+$"
    required>

    <input 
    type="date" 
    placeholder="День рождения"
    required>

    <button 
    type="submit">Опубликовать</button>

    



</form>
`;
  }
  
}
