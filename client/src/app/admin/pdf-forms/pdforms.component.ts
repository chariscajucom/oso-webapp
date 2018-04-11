import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { PdfFormsService } from '../../myservices/pdfforms.service';
import { saveAs } from 'file-saver';
const uri = 'http://localhost:8080/pdfforms/pdfUpload';
@Component({
  selector: 'admin-pdforms',
  templateUrl: './pdforms.component.html'
})
export class PDFormsComponent implements OnInit {

  uploader:FileUploader = new FileUploader({url:uri});
  attachmentList: any = [];

  constructor( private pdfService: PdfFormsService) {
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
    }
   }

   download(index){
    const filename = this.attachmentList[index].uploadname;
    this.pdfService.pdfDownload(filename).subscribe(
      data => saveAs(data, filename),
      error => console.error(error)
    );
   }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
  }

}
