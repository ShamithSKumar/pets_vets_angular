import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  petsList:any = [];
  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: false,
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return cell.row.index + 1;
        }
      },
      petName: {
        title: 'Pet Name',
        filter: true
      },
      productBrandName: {
        title: 'Product Brand Name',
        filter: true
      },
      our_com_prod: {
        title: 'Our Company Product',
        filter: true
      },
      price: {
        title: 'Price',
        filter: true
      },
      // photo: {
      //   title: 'Photo',
      //   filter: false,
      //   type: 'html',
      //   valuePrepareFunction: (photo: string) => { return `<div style=" width:80px;height:80px;border-radius:50%;"><img width="70px" height="70px" alt="photo"  src="${this.imageBaseUrl + photo}" onerror="this.src='assets/images/user-solid.svg'" /></div>`; },
      // },
      // visaExp: {
      //   title: 'Visa Exp.',
      //   filter: true
      // },
      // emiratCardExp: {
      //   title: 'EC Exp.',
      //   filter: true
      // },


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
          name: 'view',
          type: 'html',
          title: '<i class="fas fa-binoculars" title="View"></i>'
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
  constructor() { }

  ngOnInit(): void {
    console.log("hhhhhhhhhhhhhhhhhhh")
  }
  onCustomAction(event:any){

  }
  routeToAdd(){
    
  }

}
