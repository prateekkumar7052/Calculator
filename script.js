
    let result = document.getElementById("result");
    function appendToResult(value) {
      result.value += value;
    }

    function calculateResult() {
      try {
        result.value = eval((result.value)||NULL);
      } catch (error) {
        result.value = error;
        setTimeout(()=>{
          result.value = '';
        } , 300);
      }
    }

    function clearResult() {
      result.value = '';
    }

    document.addEventListener("keydown",(e)=>{
        let key = e.key;
        
        switch(key){
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": appendToResult(key);
          break;
          case "+":
          case "-":
          case "*":
          case "/": 
          appendToResult(key);
          break;
          case "Backspace": clearResult();
          break; 
          case "Enter": calculateResult()
          break;
          default: break;


        }
    })
