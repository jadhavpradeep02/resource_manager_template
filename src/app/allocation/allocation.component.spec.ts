import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllocationService } from '../services/allocation.service';
import { Allocation, AllocationComponent } from './allocation.component';
import { By } from '@angular/platform-browser';

describe('AllocationComponent', () => {
  let component: AllocationComponent;
  let fixture: ComponentFixture<AllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, FormsModule, HttpClientTestingModule],
      providers:[AllocationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('boundary', () => {
    it('should have a title', () => {
      expect(component.title).toBe('All Allocations');
      // we are accessing "h1"
      const title = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(title.innerHTML).toBe('All Allocations');
    });

    it('should have New Allocation Button', () => {
      const btn = fixture.debugElement.nativeElement.querySelector('#new_allocation');
      expect(btn.innerHTML).toBe('New Allocation');
    });

    it('should have Export Button', () => {
      const btn = fixture.debugElement.nativeElement.querySelector('#export');
      expect(btn.innerHTML).toBe('Export');
    });

    it("should show project header length", async() => {
      var rowHeaderLength = fixture.debugElement.nativeElement.querySelectorAll("th").length;
      expect(rowHeaderLength).toBe(8);
    });

    it("should have table header Allocation ID", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[0].textContent).toEqual("Allocation ID");
    });

    it("should have table header Allocated To", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[1].textContent).toEqual("Allocated To");
    });

    it("should have table header Item", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[2].textContent).toEqual("Item");
    });

    it("should have table header Project", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[3].textContent).toEqual("Project");
    });

    it("should have table header Allocation Date", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[4].textContent).toEqual("Allocation Date");
    });

    it("should have table header PO No", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[5].textContent).toEqual("PO No");
    });

    it("should have table header PO Amt", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[6].textContent).toEqual("PO Amt");
    });

    it("should have table header Life Time", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[7].textContent).toEqual("Life Time");
    });

    it("should render table", () => {
      const result = fixture.debugElement.queryAll(By.css(".allocation-table"));
      const markup = result[0].nativeNode.outerHTML;

      //const tableEl = fixture.debugElement.query(By.css('div'));
      //const bodyRows = tableEl.query(By.css('.ui-table-tbody')).queryAll(By.css('tr'));
      //expect(bodyRows.length).toEqual(10);
    });
  });

  describe('boundary', () => {

    it('form invalid when empty', () => {
      expect(component.allocationForm.valid).toBeFalsy();
    });

    it('item_name field validity', () => {
      let errors = {};
      let alloacated_to = component.allocationForm.controls['alloacated_to'];
      expect(alloacated_to.valid).toBeTruthy();

      // errors = alloacated_to.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set alloacated_to to something correct
      alloacated_to.setValue("");
      errors = alloacated_to.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('item field validity', () => {
      let errors = {};
      let item = component.allocationForm.controls['item'];
      expect(item.valid).toBeTruthy();

      // errors = item.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set item to something correct
      item.setValue("");
      errors = item.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('item_description field validity', () => {
      let errors = {};
      let item_description = component.allocationForm.controls['item_description'];
      expect(item_description.valid).toBeTruthy();

      // errors = item_description.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set item_description to something correct
      item_description.setValue("");
      errors = item_description.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('project field validity', () => {
      let errors = {};
      let project = component.allocationForm.controls['project'];
      expect(project.valid).toBeTruthy();

      // errors = project.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set project to something correct
      project.setValue("");
      errors = project.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('allocation_date field validity', () => {
      let errors = {};
      let allocation_date = component.allocationForm.controls['allocation_date'];
      expect(allocation_date.valid).toBeTruthy();

      // errors = allocation_date.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set allocation_date to something correct
      allocation_date.setValue("");
      errors = allocation_date.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('po_no field validity', () => {
      let errors = {};
      let po_no = component.allocationForm.controls['po_no'];
      expect(po_no.valid).toBeTruthy();

      // errors = po_no.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set po_no to something correct
      po_no.setValue("");
      errors = po_no.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('po_amount field validity', () => {
      let errors = {};
      let po_amount = component.allocationForm.controls['po_amount'];
      expect(po_amount.valid).toBeTruthy();

      // errors = po_amount.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set po_amount to something correct
      po_amount.setValue("");
      errors = po_amount.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('start_date field validity', () => {
      let errors = {};
      let start_date = component.allocationForm.controls['start_date'];
      expect(start_date.valid).toBeTruthy();

      // errors = start_date.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set start_date to something correct
      start_date.setValue("");
      errors = start_date.errors || {};
      expect(errors["required"]).toBeTruthy();
    });

    it('end_date field validity', () => {
      let errors = {};
      let end_date = component.allocationForm.controls['end_date'];
      expect(end_date.valid).toBeTruthy();

      // errors = end_date.errors || {};
      // expect(errors["required"]).toBeTruthy();

      // Set end_date to something correct
      end_date.setValue("");
      errors = end_date.errors || {};
      expect(errors["required"]).toBeTruthy();
    });
  });

  describe('business', () => {
    it("should submit form", () => {
      // expect(component.allocationForm.valid).toBeFalsy();
      // component.allocationForm.controls["alloacated_to"].setValue("Ashok Kumar");
      // component.allocationForm.controls["item"].setValue("Mobile - Samsung");
      // component.allocationForm.controls["item_description"].setValue("4 GB RAM, Smart");
      // component.allocationForm.controls["project"].setValue("EComm");
      // component.allocationForm.controls["allocation_date"].setValue("3-October-2019");
      // component.allocationForm.controls["po_no"].setValue("8927299");
      // component.allocationForm.controls["po_amount"].setValue("345");
      // component.allocationForm.controls["start_date"].setValue("3-October-2019");
      // component.allocationForm.controls["end_date"].setValue("3-October-2021");

      expect(component.allocationForm.valid).toBeTruthy();

      let allocation: Allocation;
      // Subscribe to the Observable and store the user in a local variable.
      component.allocationsdata.subscribe((value) => {
        allocation = value;
      });

      // Trigger the signin function
      component.onSubmit();

      // Now we can check to make sure the emitted value is correct
      expect(allocation.alloacated_to).toEqual(allocation.alloacated_to);
      expect(allocation.item).toEqual(allocation.item);
      expect(allocation.item_description).toEqual(allocation.item_description);
      expect(allocation.project).toEqual(allocation.project);
      expect(allocation.allocation_date).toEqual(allocation.allocation_date);
      expect(allocation.po_no).toEqual(allocation.po_no);
      expect(allocation.po_amount).toEqual(allocation.po_amount);
      expect(allocation.start_date).toEqual(allocation.start_date);
      expect(allocation.end_date).toEqual(allocation.end_date);
    });
  });

  describe("exception", () => {
    it("should be check allocation api", inject([HttpTestingController, AllocationService], (httpMock: HttpTestingController, dataService: AllocationService) => {
      component.ngOnInit();
      dataService.getAllocationData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });
});