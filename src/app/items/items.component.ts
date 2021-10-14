import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Output() itemsdata = new EventEmitter<Items>();
  itemData: any;
  itemsForm!: FormGroup;
  public obj: any = {};

  constructor(private itemsService: ItemsService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  openItem() {
  }

  export(){
  }

  deleterow(){
  }
}
