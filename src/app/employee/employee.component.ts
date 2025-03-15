import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];
// delete operation
  delete(i:number){
    this.employees.splice(i,1);

  }
  //sort operation
  sort(){
    this.employees.sort((a:any,b:any)=>a.package-b.package)
  }
  // filter operation
  role:string='';
  filter(){
    this.employees=this.employees.filter((employee:any)=>employee.role==this.role)
  }
  // search operation 
  term:string=''
  search(){
    this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.term))
  }
// map operation  
  map(){
    this.employees=this.employees.map((employee:any)=>{
      employee.package=employee.package+50000;
      return employee
    })

  }
  reduce(){
   let totalCost= this.employees.reduce((sum:any,employee:any)=>sum+employee.package,0)
     alert(totalCost)
  }

  // create 
  name:String='';
  experience:number=0;
  package:number=0;
  EmpRole:string='';
  create(){
    let employee={
      name:this.name,
      experience:this.experience,
      package:this.package,
      role:this.EmpRole

    };
    this.employees.unshift(employee)
  }

}
