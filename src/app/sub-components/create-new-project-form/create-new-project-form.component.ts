import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgFor} from '@angular/common';
import {FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';

interface material {
  value: string;
  viewValue: string;
}

interface materialGroup {
  disabled?: boolean;
  name: string;
  material: material[];
}

interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-new-project-form',
  templateUrl: './create-new-project-form.component.html',
  styleUrls: ['./create-new-project-form.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    MatInputModule,
  ],
})

export class CreateNewProjectFormComponent {
  selected = 'inch';
  materialControl = new FormControl('');
  materialGroups: materialGroup[] = [
    {
      name: 'Metal',
      material: [
        {value: 'Aluminum 2024', viewValue: 'Aluminum 2024'},
        {value: 'Aluminum 6061', viewValue: 'Aluminum 6061'},
        {value: 'Brass 260', viewValue: 'Brass 260'},
        {value: 'Brass 360', viewValue: 'Brass 360'},
        {value: 'Carbide C2', viewValue: 'Carbide C2'},
        {value: 'Carbon Fiber Laminate (Graphlite)', viewValue: 'Carbon Fiber Laminate (Graphlite)'},
        {value: 'Copper C110', viewValue: 'Copper C110'}, 
        {value: 'Mild Steel A36', viewValue: 'Mild Steel A36'},
        {value: 'Niobium Grade 1 Annealed', viewValue: 'Niobium Grade 1 Annealed'},
        {value: 'Stainless Steel 304', viewValue: 'Stainless Steel 304'},
        {value: 'Stainless Steel 316', viewValue: 'Stainless Steel 316'},
        {value: 'Stainless Steel Custom 465', viewValue: 'Stainless Steel Custom 465'},
        {value: 'Sterling Silver', viewValue: 'Sterling Silver'},
        {value: 'Titanium 6Al 4V', viewValue: 'Titanium 6Al 4V'},
        {value: 'Tool Steel D2 (RC 20)', viewValue: 'Tool Steel D2 (RC 20)'},
        {value: 'Tool Steel D2 (RC 38)', viewValue: 'Tool Steel D2 (RC 38)'},
        {value: 'Tool Steel D2 (RC 50)', viewValue: 'Tool Steel D2 (RC 50)'},
        {value: 'Tool Steel D2 (RC 60)', viewValue: 'Tool Steel D2 (RC 60)'},
        {value: 'Tool Steel M2 (RB 62.7)', viewValue:'Tool Steel M2 (RB 62.7)'}
      ],
    },
    {
      name: 'Plastic',
      material: [
        {value: 'Acetal', viewValue: 'Acetal'},
        {value: 'Acrylic Cast', viewValue: 'Acrylic Cast'},
        {value: 'Acrylic', viewValue: 'Acrylic'},
        {value: 'Fiberglass Reinforced Vinylester (FRP)', viewValue: 'Fiberglass Reinforced Vinylester (FRP)'},
        {value: 'Nylatron', viewValue:'Nylatron'},
        {value: 'Nylon Cast MD', viewValue: 'Nylon Cast MD'},
        {value: 'Nylon', viewValue: 'Nylon'},
        {value: 'Polycarbonate', viewValue: 'Polycarbonate'},
        {value: 'Polypropylene', viewValue: 'Polypropylene'},
        {value: 'PVC', viewValue: 'PVC'},
        {value: 'Rubber Neoprene 70 DURO', viewValue: 'Rubber Neoprene 70 DURO'},
        {value: 'UHMW', viewValue: 'UHMW'},
        {value: 'Polyethylene Pam', viewValue: 'Polyethylene Pam'},
        {value: 'RIGID PVC FOAMBOARD', viewValue: 'RIGID PVC FOAMBOAR'}
      ],
    },
    {
      name: 'Other',
      disabled: false,
      material: [
        {value: 'Garolite', viewValue: 'Garolite'}
      ],
    },
  ];
  units: Unit[] = [
    {value: 'inch', viewValue: 'inch'},
    {value: 'mm', viewValue: 'mm'},
    {value: 'gauge', viewValue: 'Gauge'},
  ];
}