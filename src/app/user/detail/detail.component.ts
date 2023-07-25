import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // @ts-ignore
  public user: IUser;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
     const id = this.router.snapshot.params['id'];
     this.userService.loadUser(id).subscribe(user => {
      this.user = user;
     })
  }
}
