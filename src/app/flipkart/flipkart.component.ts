import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products: any = [
    { ProductName: 'pen', Price: 40, Rating: 3.2, freeDelivery: 'true' },
    { ProductName: 'iphone', Price: 120000, Rating: 4.3, freeDelivery: 'true' },
    { ProductName: 'Cap', Price: 250, Rating: 4, freeDelivery: 'true' },
    { ProductName: 'Shirt', Price: 500, Rating: 5, freeDelivery: 'true' },
    { ProductName: 'ModelCase', Price: 2500, Rating: 3.3, freeDelivery: 'false' },
    { ProductName: 'Remote', Price: 770, Rating: 4.2, freeDelivery: 'false' },
    { ProductName: 'Watch', Price: 5000, Rating: 2.5, freeDelivery: 'true' },
    { ProductName: 'Bag', Price: 3000, Rating: 3, freeDelivery: 'true' },
    { ProductName: 'Laptop', Price: 55000, Rating: 4.8, freeDelivery: 'true' },
    { ProductName: 'Book', Price: 55, Rating: 2.9, freeDelivery: 'false' },
    { ProductName: 'Bike', Price: 170000, Rating: 4.1, freeDelivery: 'false' },
  ];
 
// searching task
term:string='';
search(){
  this.products=this.products.filter((product:any)=>product.ProductName.includes(this.term))
}


search1(){
  var b=true;
  this.products=this.products.filter((product:any)=>product.freeDelivery.includes(b))

}
check1(){
  this.products.sort((a:any,b:any)=>a.Price-b.Price)
}
check2(){
  this.products.sort((a:any,b:any)=>b.Price-a.Price);


}

check3(){
  this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
}

check4(){
  this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
}
apply1(){
 
  this.products=this.products.map((product:any)=>{
    product.Price=product.Price+product.Price*0.5
    return product;
  })
}
apply2(){
 var Str='Delivery charge'
  this.products=this.products.map((product:any)=>{
    product.Price=product.Price+product.Price+50

    return product;
  })
}

total(){
  let totalCost= this.products.reduce((sum:any,product:any)=>sum+product.Price,0)
    alert(totalCost)
 }


 totalCartItems(){
  let totalCartItems=0;
  for(const product of this.products) 
    {
      totalCartItems++;    
  }
  alert(totalCartItems)
 }

// insert 
name:string='';
price:number=0;
rating:number=0;
YES:boolean=true;
No:boolean=false;
freeDelivery1:boolean=true;
setFreedelivery(){
  this.freeDelivery1=true;

 }
 setFreedelivery1(){
  this.freeDelivery1=false;

 }
 insert(){
  
  let product={
    ProductName:this.name,
    Price:this.price,
    Rating:this.rating,
    freeDelivery:this.freeDelivery1

  }
  this.products.unshift(product)
 }
 bb1(i:number){
  this.products.splice(i,1);

}
}

