import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Service } from 'src/app/core/services/services';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  usersList:any = [];
  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: false,
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return cell.row.index + 1;
        }
      },
      userName: {
        title: 'User Name',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      },
      phone: {
        title: 'Phone',
        filter: true
      },

    },
    attr: {
      class: 'table table-bordered'
    },
    pager:
    {
      perPage: 50
    },
    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          class: 'center',
          name: 'edit',
          type: 'html',
          title: '<i class="fas fa-edit" title="Edit"></i>'
        },
        {
          class: 'center',
          name: 'view',
          type: 'html',
          title: '<i class="fas fa-binoculars" title="View"></i>'
        },
        // {
        //   class: 'center',
        //   name: 'delete',
        //   type: 'html',
        //   title: '<i class="fas fa-trash-alt" title="Delete"></i>'
        // }

      ]
    }
  };
  updateForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    id: new FormControl('')
  })
  constructor(
    private services: Service
  ) { }

  ngOnInit(): void {
    this.getUserPetList();

  }
  getUserPetList(){
    this.usersList = [];
    this.services.getUsersList().subscribe((res: any) => {
      if (res.data.length > 0)
        this.usersList = res.data;
    })
  }
  onCustomAction(event:any){
    if (event.action === 'edit') {
      console.log("event.data : ", event.data)
      this.updateForm.patchValue({
        userName: event.data.userName,
        email: event.data.email,
        phone: event.data.phone,
        id: event.data.id,
      })
      document.getElementById('openModalButton')!.click();
    }
  }
  routeToAdd(){
    document.getElementById('openModalButton')!.click();
  }
  closeModal(){

  }
  onUpdate(){
    this.services.updateUser(this.updateForm.value).subscribe((res: any) => {
      
    })
  }

}
