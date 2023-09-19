(function stringExtension() {                           
    String.prototype.ensureStart = function (string) {     
        if (this.startsWith(string)) {                     
            return this.toString();                     
        }
        return string + this;                              
    };

    String.prototype.ensureEnd = function (string) {       
        if (this.endsWith(string)) {                        
            return this.toString();                     
        }
        return this + string;                              
    };

    String.prototype.isEmpty = function () {            
        return this.length === 0;                        
    };

    String.prototype.truncate = function (number) {          
        if (this.length <= number) {                          
            return this.toString();                     
        }

        if (number < 4) {                                     
            return '.'.repeat(number);                        
        } else {                                        
            let lastIndex = this.substring(0, number - 2).lastIndexOf(' ');  
            if (lastIndex !== -1) {                         
                return this.substring(0, lastIndex) + '...'; 
            } else {                                         
                return this.substring(0, number - 3) + '...';     
            }
        }
    };

    String.format = function (string, ...params) {      
        params.forEach((param, index) => {               
            string = string.replace(`{${index}}`, param);     
        });
        return string;                                  
    };
})()  