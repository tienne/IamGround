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
  @ViewChild('techWrapper') techWrapper: MdAccordion;
  techs$: Observable<ISkill[]>;
  techLoading = true;
  techSubscription: Subscription;

  constructor(private skillService: SkillService) {
    this.techs$ = this.skillService.techs$;
  }

  ngOnInit() {
    this.techSubscription = this.techs$.subscribe((techs: ISkill[]) => {
      if (this.techLoading) {
        this.techLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.techSubscription.unsubscribe();
  }

}
