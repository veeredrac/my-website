service :    it used for reusageability data 

what is API : 
requrest : there some methods  : 
                               get(getting data from APi ) , 
                               post (sending data from API ) ,
                               put(it using for updating data ) / patch(modifying particualar data from API) ,
                               delete(deleting or deleting  the data from API )    in API using this methods . 


               |                    |
               | ------------------ | <= request
               |                    |
               |  ----------------- | <= response
               |                    |
       (client)|                    | (servce)


       200+ status  code : resopnes succes 
       300+ status  code : derireact error 
       400+ status code  : client side error 
       500+ status code  : server side errors 


Rx JS librarry :  it will perform asyncrone operation 

 promise                                         
              (it static operation= one callback ) 


 objecerable   :    (flipkart operation = multiple callback and get back normation call backs , giving the operation in indivisual it is unicast )


 subject : live stream / flm is example { multiple callbacks and multi cast }


  flow for form 
              HTML ====> TS ===> service ====> API 
  flow for Table 
               API ===> service ====> TS ====> HTML 


service
API
Rx JS librarry

flow for form 
              HTML ====> TS ===> service ====> API 
  flow for Table 
               API ===> service ====> TS ====> HTML 

 get(getting data from APi ) , 
                               post (sending data from API ) ,
                               put(it using for updating data ) / patch(modifying particualar data from API) ,
                               delete(deleting or deleting  the data from API )    in API using this methods . 



  Possible Api calls :
1) all            get => get(URL)
2) specific       get => get(URL/id)
3) filtering      get => get(URL ? filter=term)
4) sorting        get => get(URL ?sortBy=columan&order)
5) pagination     get => get(URL) 



6) create       post=>  get(URL/id)
7) update       put=> get("URL/"+id ,data) 
8) deletedelete delete (URL /ID)


********************************************************

1) template Driven Fprms ---> [(ngModel)]
    => it control by html 
    => simple 
2) Reactive Forms    ---> 
     =>it control by typescript 
     => complex (multiple form adding based on requirement ) 
 different types  of Complex  Form in Reactive Form : 
 -----------------------------------------
   1) FormGroup 
   2) FormControl
   3) Nested FormGroup
   4) Dynamic Forms 
   5) Form Array
   6) validators 

   create a reactive Form Model is import in ur project 
   ReactiveDormModel

     1) FormGroup   : 
                        pulic vehivleForm:FormGroup = new FormGroup({
                          names:new FormControl(),
                          
                        })

guard : guard are used to proteted the user detalails using guard routers 

  commands for guard  : ng generate guard authentication 

   they are 5 types of guard :
     1. canActivate :check user is authentic or not check before load 
     2.CanActuvateChild   : 
     3.CanDeactivate :when getback to that page given a confirmation 
     4. CanLoad 
     5. CanMatch



     Communication :   in angular is component based application 
       there are 3 types of communication 
        1. parent - child @import 
        2. child - parent  @output and event emitor 
        3. siblining communication   ( we can pass the data from different components  )


    
    3. custom data : it is used to restric the user . missuase the data from end user . 
        
          step 1 : create interface is {
            ng generate interface user 
          }
          step 2: in interface declared the attribute is {
            interface User{
              name :string ,
              email:string,
              age:number 
            }
          }
          step 3 : inside the component initialize the user interface data {
            class welcome{
              user:User={
                name:'abc',
                email:'abc@gmail.com'
                age : 28
              }
            }
          }
          step 4 : to display the value in html welcome.html {
            <h1>{{user.name}}</h1>
             <h1>{{user.email}}</h1>
              <h1>{{user.age}}</h1>
          }
          

4. custom validatorn:   




5. custom api : dummy use the this custom api . 
create json file with static data and call that static data in service method 
build some functionality . 

6. interceptor : it used to token along with api call , it mainly use the private api
  -> we want to access the data every time requrest to the api insteaded of create interceptor we can access the multiple private api . 

*************  clone ******** 
clone : 

7. custom commands : to disign our own commands we use this custome commands. we want to apply the custom commands open package.json : {
   "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
     "veera": "ng serve",==> like that we want to create own commands 
  },
}

loading technique :
   


1) easer loading : 
-----------------------------------------------------------------
  ==>   create a new module use this commands : 
  ng g m about-us 
  create a components like {

take integrated terminal generate commands 
    ng g c about-ceo,
    ng c about-company 
  }
  => to link about-us module in angular application 
   step 1 : app.module.ts file {

    import the aboutModule ,
   }
   -------------------------------------------------------

   2) lazy loading : it used to click on perticular router link then , it will load it , otherwise it not working .
   createing lazy module components using this commands :{
    ng g m payment--routing 
   }
   step create 2 componts 
   1. card  
   2.upi 
   open payment module and giving the routing link and using path and component 

   -> then open routing module .ts file giving the routing {


    {
      path:'payment'
      loadingChildren:()=>('./payment/payment.module');
    }
   }
