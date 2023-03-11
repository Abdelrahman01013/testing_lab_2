import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrvService } from '../srv.service';

import { SummtionComponent } from './summtion.component';

describe('SummtionComponent', () => {
  let component: SummtionComponent;
  let fixture: ComponentFixture<SummtionComponent>;
  let service: SrvService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummtionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SrvService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('run function', () => {
    const value=component.squar(2)
    expect(value).toEqual(8);
  });

  it('run function from api', () => {

    fixture.detectChanges();
    spyOn(service,"sayHallow")
    component.ngOnInit();
    expect(service.sayHallow).toHaveBeenCalled();

  });
});
