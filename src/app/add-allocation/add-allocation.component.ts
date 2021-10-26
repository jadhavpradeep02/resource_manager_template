import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllocationService } from '../services/allocation.service';
import { Router } from '@angular/router';

export class Allocation {
  constructor(
    public allocated_to: string,
    public item: string,
    public item_description: string,
    public project: string,
    public allocation_date: string,
    public po_no: string,
    public po_amount: string,
    public start_date: string,
    public end_date: string,
  ) { }
}

@Component({
  selector: 'app-add-allocation',
  templateUrl: './add-allocation.component.html',
  styleUrls: ['./add-allocation.component.scss']
})
export class AddAllocationComponent implements OnInit {

  @Output() allocationsdata = new EventEmitter<Allocation>();
  allocationData: any;
  allocationForm!: FormGroup;
  public obj: any = {};
  title: string = "All Allocations";

  constructor(private allocationService: AllocationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  cancel() {
  }

  addAllocation(){
  }
}
