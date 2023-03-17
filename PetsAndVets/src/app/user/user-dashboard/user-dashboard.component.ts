import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Service } from '../../core/services/services';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  petsList: any = [];
  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: false,
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return cell.row.index + 1;
        }
      },
      name: {
        title: 'Pet Name',
        filter: true
      },
      petType: {
        title: 'Pet Type',
        filter: true
      },
      amount: {
        title: 'Amount',
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
        // {
        //   class: 'center',
        //   name: 'edit',
        //   type: 'html',
        //   title: '<span class="action-icons view-icon"><i class="las la-pen"></i></span>'
        // }
        {
          class: 'center',
          name: 'edit',
          type: 'html',
          title: '<i class="fas fa-edit" title="Edit"></i>'
        },

        {
          class: 'center',
          name: 'delete',
          type: 'html',
          title: '<i class="fas fa-trash-alt" title="Delete"></i>'
        }

      ]
    }
  };
  editForm: any = new FormGroup({
    name: new FormControl(''),
    petType: new FormControl(''),
    amount: new FormControl(''),
    userPetId: new FormControl(''),
  })
  addForm: any = new FormGroup({
    name: new FormControl(''),
    petType: new FormControl(''),
    amount: new FormControl('')
  })
  constructor(private services: Service) { }

  ngOnInit(): void {
    console.log("hhhhhhhhhhhhhhhhhhh")
    this.getUserPetList();

  }
  getUserPetList() {
    this.petsList = [];
    this.services.getPetsList().subscribe((res: any) => {
      if (res.data.length > 0)
        this.petsList = res.data;
      else
        this.petsList = [];
    })
  }
  onCustomAction(event: any) {
    if (event.action === 'edit') {
      document.getElementById('openModalButton1')!.click();
      this.editForm.patchValue({
        name: event.data.name,
        petType: event.data.petType,
        amount: event.data.amount,
        userPetId: event.data.userPetId,
      })

    }
    if (event.action === 'delete') {
      console.log('id', event.data.userPetId)
      this.services.deletePets(event.data.userPetId).subscribe((res: any) => {
        this.getUserPetList();
      })
    }

  }
  routeToAdd() {
    document.getElementById('openModalButton')!.click();
    
  }
  closeModal() {

  }
  update(){
    this.services.updatePets(this.editForm.value).subscribe((res: any) => {
      this.getUserPetList()
    })
  }

  saveModal() {
    this.services.addPets(this.addForm.value).subscribe((res: any) => {
      this.getUserPetList()
    })
  }

}
