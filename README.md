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
          


