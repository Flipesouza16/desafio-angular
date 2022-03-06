import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',

})
export class UtilsService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action = 'FECHAR', duration = 3000): void {
    this.snackBar.open(message, action, { duration });
  }
}
