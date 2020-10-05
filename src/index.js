module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] === bracketsConfig[j][0]) { // Если скобка открывающая
          if (str[i] === bracketsConfig[j][1] && stack.length !== 0 && stack[stack.length - 1] === bracketsConfig[j][0]) { // Если она такая же как закрывающая и в стеке последняя скобка такая же, то найдена закрывающая скобка 
            stack.pop();
          } else {
            stack.push(str[i]);  // Найдена открывающая скобка
          }
          
        } else if (str[i] === bracketsConfig[j][1]) { // Если скобка закрывающая
           if (stack[stack.length - 1] === bracketsConfig[j][0]) { // Если в стеке есть такая же открывающая скобка
             stack.pop();
           } else if (stack[stack.length - 1] !== bracketsConfig[j][0]) { // Если последняя скобка в стеке не такая же открывающая
             return false;
           }
        }
      }
    }
  
    if (stack.length !== 0) {
      return false;
    }
  
    return true;
}
