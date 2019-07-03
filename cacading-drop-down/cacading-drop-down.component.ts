import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cacading-drop-down',
  templateUrl: './cacading-drop-down.component.html',
  styleUrls: ['./cacading-drop-down.component.scss']
})
export class CacadingDropDownComponent implements OnInit {
  CascadingForm: FormGroup;
  countrylist=[]
  states=[];
  cities=[];
  villages=[];
  onSelectCountry() {
    let index=this.countrylist.findIndex(x=>x.id==this.CascadingForm.value.country);
    if(index!=-1){
      this.states=this.countrylist[index].stateList;
    }
  }
  onSelectState(){
    let index=this.states.findIndex(x=>x.stateId==this.CascadingForm.value.state);
    if(index!=-1){
      this.cities=this.states[index].cities;
    }
  }
  onSelectCity(){
    let index=this.cities.findIndex(x=>x.cityId==this.CascadingForm.value.city);
    if(index!=-1){
      this.villages=this.cities[index].villages;
    }
  }
    constructor(private cascding:FormBuilder) { 
    this.getCountries();
  }
  ngOnInit() {
    this.CascadingForm=this.cascding.group({
      country:[null,Validators.required],
      state:[null,Validators.required],
      city:[null,Validators.required],
      village:[null,Validators.required]
    })
  }
 getCountries() {
  this.countrylist=[
    { id: 1, name: 'India',
    stateList:[
      {stateId:1,stateName:"Andhra Pradesh",
    cities:[
      {cityId:1,cityName:"Guntur",
    villages:[
        {VillageId:1,VillageName:"bapatla"},
        {VillageId:2,VillageName:"ponnur"}
      ]},
      {cityId:2,cityName:"vijayawada",
    villages:[
      {VillageId:1,VillageName:"bejawada"},
      {VillageId:2,VillageName:"gannavaram"}
    ]}
    ]},
      {stateId:2,stateName:"Telangana",
      cities:[
        {cityId:1,cityName:"Hyderabad",
      villages:[
        {VillageId:1,VillageName:"ramanagar"},
        {VillageId:2,VillageName:"RtcCross Road"}
      ]},
        {cityId:2,cityName:"Karimnagar",
      villages:[
        {VillageId:1,VillageName:"Bhadrachalam"},
        {VillageId:2,VillageName:"Siricilla"}
      ]}
      ]}
    ],
  },
    { id: 2, name: 'Canada',stateList:[
      {stateId:1,stateName:"Alberto",cities:[
        {cityId:1,cityName:"Toronto",
      villages:[
        {VillageId:1,VillageName:"Canada Village"},
        {VillageId:2,VillageName:"Village2"}
      ]},
        {cityId:2,cityName:"CanadienCity",
      villages:[
        {VillageId:1,VillageName:"NorthCanda"},
        {VillageId:2,VillageName:"Southcanda"}
      ]}
      ]},
      {stateId:2,stateName:"CanadaCity",cities:[
        {cityId:1,cityName:"CanadaState1",
      villages:[
        {VillageId:1,VillageName:"EastCanda"},
        {VillageId:2,VillageName:"SouthCanda"}
      ]},
        {cityId:2,cityName:"CanadaState2",
      villages:[
        {VillageId:1,VillageName:'CanadaVillage1'},
        {VillageId:2,VillageName:"CanadaVillage2"}
      ]}
      ]}
    ] },
    { id: 3, name: 'USA',stateList:[
      {stateId:1,stateName:"Newyork",
    cities:[
      {cityId:1,cityName:"Brezel",
    villages:[
      {VillageId:1,VillageName:"USA1"},
      {VillageId:2,VillageName:"USA2"}
    ]},
      {cityId:2,cityName:"sydney",
    VillageId:1,VillageName:"USA3"}
    ]},
      {stateId:2,stateName:"Victoria",
    cities:[
      {cityId:1,cityName:"NewyorkCity",
    villages:[
      {VillageId:1,VillageName:'NewYorkVillage1'},
      {VillageId:2,VillageName:"NewYorkVillage2"}
    ]},
      {cityId:2,cityName:"Mountario",
      villages:[
      {VillageId:1,VillageName:'MountarioVillage1'},
      {VillageId:2,VillageName:"MountarioVillage2"}
    ]}
    ]}
    ]},
  
   ]}

}
