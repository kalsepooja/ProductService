import { NgModule } from "@angular/core";

import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
    declarations: [],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
    ]
})
export class MaterialModule{

}