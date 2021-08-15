//The function is reversing what is inside pairs of ()'s inside a given string
//This is done by searching over an array (The Result Array) for a closing Parenthesis ')'
//then placing the contents into a separate stack to perform the reversal once a opening Parenthesis is found '('

function reverseInParentheses(inputString) {
    var resultArray = []
    var stack = []
    
    for(let i=0; i< inputString.length; i++)
    {
        resultArray.push(inputString[i])
        
        if(inputString[i] == ')')
        {
            resultArray.pop()
            var element = resultArray.pop()
            while(element != '(')
            {
                stack.push(element)
                element = resultArray.pop()
            }
        
            resultArray = [...resultArray, ...stack]
            stack = []
        }
    }
    
    return resultArray.join('')
    }
    