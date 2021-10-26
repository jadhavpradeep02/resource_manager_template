import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../services/items.service';

export class Items {
  constructor(
    public item_name: string,
    public item_type: string,
    public item_description: string,
    public item_cost: string
  ) { }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() itemsdata = new EventEmitter<Items>();
  itemsForm!: FormGroup;
  itemData: any;
  public obj: any = {};

  constructor(private router: Router, private fb: FormBuilder, private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  cancel() {
  }

  addItem(){
  }

  onSubmit() {
  }
}
