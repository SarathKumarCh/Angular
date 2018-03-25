import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert("An UnExpected error occured");
        console.log(error);
    }
}