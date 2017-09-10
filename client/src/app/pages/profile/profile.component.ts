import {Component, Directive, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MdAccordion} from '@angular/material';
import {SkillService, ISkill} from '../../shared/skill/skill.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  skills$: Observable<ISkill[]>;
  skillLoading = true;
  skillSubscription: Subscription;

  constructor(
    private skillService: SkillService
  ) {
    this.skills$ = this.skillService.getAllSkill();
  }

  ngOnInit() {
    this.skillSubscription = this.skills$.subscribe((skills: ISkill[]) => {
      if (this.skillLoading) {
        this.skillLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.skillSubscription.unsubscribe();
  }

}
