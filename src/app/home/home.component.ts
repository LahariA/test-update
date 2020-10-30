import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
getAlert(){
  // swal({
  //   title: "Are you sure?",
  //   text: "Once deleted, you will not be able to recover this imaginary file!",
  //   icon: "warning",
 
  //   // buttons: true,
  //   dangerMode: true,
   
  // })
  // .then((willDelete) => {
  //   if (willDelete) {
  //     swal("Poof! Your imaginary file has been deleted!", {
  //       icon: "success",
  //     });
  //   } else {
  //     swal("Your imaginary file is safe!");
  //   }
  // });
  // swal("Here's a message!")
}
}
