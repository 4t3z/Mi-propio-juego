class Block{
    constructor(x,y,width,heigth){
        this.width = 50;
        this.heigth = 50;

        this.image = loadImage("Imagenes/bloque.jpg");
    }
    display(){
        push();

        imageMode(CENTER);
        image(this.image,x,y,50,50);
        
        pop();
    }
}