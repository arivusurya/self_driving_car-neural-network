class Controls{
    constructor (){
        this.forwards=false
        this.right=false
        this.left=false
        this.back=false
        
        this.#addkeyboardlistener();
    }
    #addkeyboardlistener(){
        document.onkeydown=(event)=>{
            switch (event.key) {
                case "ArrowLeft" :
                    this.left=true
                    break;
                case "ArrowRight":
                    this.right=true
                    break;
                case "ArrowUp":
                    this.forwards=true
                    break
                case "ArrowDown" :
                    this.back=true
                    break 
            
        
            }
            console.table(this)
        }
        document.onkeyup=(event)=>{
            switch (event.key) {
                case "ArrowLeft" :
                    this.left=false
                    break;
                case "ArrowRight":
                    this.right=false
                    break;
                case "ArrowUp":
                    this.forwards=false
                    break
                case "ArrowDown" :
                    this.back=false
                    break 
            
        
            }
            console.table(this)
        }
    }

  
}
