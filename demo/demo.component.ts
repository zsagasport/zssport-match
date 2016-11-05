import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
     <nav class="navbar navbar-default">
          <div class="container-fluid">
              <h1>{{title}}</h1>
          </div>
      </nav>
      <div class="col-md-4">
             <div class="panel panel-default">
                <div class="panel-heading">
                     <h2>Matches type: 'default'</h2>
                </div>
                <div class="panel-body">
                    <zssport-match [matchId]="201617010801"></zssport-match>
                    <zssport-match [matchId]="201617010802"></zssport-match>
                    <zssport-match [matchId]="201617010810"></zssport-match>
                </div>
            </div>
        </div>
       <div class="col-md-4">
             <div class="panel panel-default">
                <div class="panel-heading">
                     <h2>Matches type: 'lined'</h2>
                </div>
                <div class="panel-body">
                    <zssport-match [matchId]="201617010801" [matchType]="'lined'"></zssport-match>
                    <zssport-match [matchId]="201617010802" [matchType]="'lined'"></zssport-match>
                    <zssport-match [matchId]="201617010810" [matchType]="'lined'"></zssport-match>
                </div>
            </div>
        </div>
  `,
  styles: [
  `
      .left {
          text-align: left;
      }

      .right {
          text-align: right;
      }

      .center {
          text-align: center;
      }

      .w-49 {
          width: 49%;
      }

      .w-90 {
          width: 90%;
      }
  `
  ]
})

export class Demo {
    title: string = 'Matches';
}
