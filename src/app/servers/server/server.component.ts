import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

 
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //not a reactive way!
    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);

    //reactive way!!
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

  editServer() {
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }
}
