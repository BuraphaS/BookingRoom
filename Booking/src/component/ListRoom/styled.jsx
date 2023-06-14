import styled from "styled-components"

export const Box = styled.body`
    
    margin: 0 auto;
    border : 1px solid red;
    width: 800px;
    height:100%;
    font-size:1.2rem;
    display : flex;
    justify-content : space-between;
    form{
        
    }
    label{
        display:block;

        margin-top:1rem;
        
    }
    input{
        border: 1px solid #01010;
        border-radius:10px;
        padding:0.3rem;
        
    }
    button{
        width:80px;
        height:35px;
        border-radius:7px;
        border:none;
        cursor:pointer;
        background-color:
    }
    
`

export const Tab = styled.table`
    table {
        
        width:100%;
        margin:0 auto;
        border-collapse: collapse;
        padding:0.5rem;
       
    }
    tr {
        border:1px solid black;    
       
    }
    tr:hover {
        background-color:#1111;  
       
    }
    tr h3:hover {
        background-color:#ffff;  
       
    }
    .topic{
        display:block;
        margin:0.6rem;
        
    }
    Button.btn1{
        background-color:#2196f3;
        color:#ffff;
        text-align:right;
        padding:0.4rem;
    }
    Button.btn1:hover{
        background-color:#5c80c8;
        color:#ffff;
    }
    Button.btn2{
        background-color:#ff9800;
        color:#ffff;
        margin:0 auto;
        display:flex;
        padding:0.4rem;
        width:100px;
    }
    Button.btn2:hover{
        background-color:#5c80c8;
        color:#ffff;
    }
    .tdr{
        
        margin:0 auto;
        width:130px;
        height:50px;
    }
    button.btnde{
        width:70%;
        border-radius:5px;
        border:0.5px solid #101010;
        height:40px;
        text-align: center;
        color: #101010;
        background-color:rgb(255, 152, 0);
        color:#ffffff;
        margin:0.5rem;
        cursor:pointer;
    }
    button.btnde:hover{
        background-color:#cc7a00;
    }
`

export const Table = styled.form`
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
display:block;

input[type=color]{
    heigth:50px;
    width:70px;
    margin: 15px;
}
input[type=text], select {
    width: 100%;
    padding: 10px;
    margin: 15px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 90%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 0 auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size:1rem;
    display:flex;
    justify-content:center;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
   
   
`
export const Tab2 = styled.section`

    tr:hover {
        background-color:#1111;
`
export const Button1 = styled.section`
.button1 {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width:100px;
    height:45px;
  }
  
  .button1:hover {
    box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`
export const Bbtn = styled.section`

text-align:right;
margin-right:2%;

        .button-73 {
        appearance: none;
        background-color: #008000;
        border-radius: 40em;
        border-style: none;
        box-shadow: #ADCFFF 0 -12px 6px inset;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,sans-serif;
        font-size: 0.2rem;
        font-weight: 700;
        letter-spacing: -.24px;
        margin: 2%;
        outline: none;
        padding: 1rem 1.3rem;
        quotes: auto;
        text-align: center;
        text-decoration: none;
        transition: all .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }

        .button-73:hover {
        background-color: #FFC229;
        color:#000000;
        box-shadow: #FF6314 0 -6px 8px inset;
        transform: scale(1.125);
        }

        .button-73:active {
        transform: scale(1.025);
        }

        @media (min-width: 768px) {
        .button-73 {
            font-size: 1.5rem;
            padding: .75rem 2rem;
        }
        }
`

export const Closebtn = styled.section`

button.button-24 {
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-right:15px;
}

button.button-24:hover,
button.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

button.button-24:active {
  opacity: .5;
}
`