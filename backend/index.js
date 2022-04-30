import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

function operation(){
    inquirer.prompt([
      {type:"listr",
      name: 'action',
      massage:'qual operação deseja executar?'.
      choices:[
    "criar conta.",
    "consultar saldo.",
    "depositar.",
    "sacar.",
    "sair"
      ]
 }
    ]).then((answer)=>{
      const action = answer ['action']

      if(action === 'criar conta.'){
       console.log('criar')
      }else if(action === 'consultar saldo.'){
     console.log('colsulta')
      }else if(action === depositar.){
          console.log('deposito')
      }else if(action === "sacar."){
          console.log('sair'){
              crossOriginIsolated.log(chalk.bgBlue.black)('obriago saindo do sistema...'))
              process.exit()
          })












    }

    








}