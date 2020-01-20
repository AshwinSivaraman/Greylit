import {Component, OnInit} from '@angular/core';
import {AzureSearchService} from '../services/azure-search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


interface SearchResult {
  '@search.score': number;
  content: string;
  date: string;
  lastmodified: string;
  key: string;
  metadata_content_encoding: string;
  metadata_content_type: string;
  metadata_language: string;
  metadata_storage_name: string;
  metadata_storage_path: string;
  metadata_storage_content_type: string;
  metadata_storage_last_modified: string;
  metadata_storage_size: number;
  subject: string;
  url: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {

  searchForm: FormGroup;
  results: SearchResult[];

  constructor(private azureSearchService: AzureSearchService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    });
  }

  search() {
    const searchData = this.searchForm.getRawValue().search;
    this.azureSearchService.searchFor(searchData).subscribe(data => {
        const apiData: any = data;
        this.results = apiData.value as SearchResult[];
      },
      err => {
        console.log(err);
      }
    );
  }

  downloadFile(url) {
    const blobPath = 'https://greylitdocumentstorage.blob.core.windows.net/greylit-search-docs/';
    url = url.split('%').join('%25');
    window.open(blobPath + url, '_blank');
  }

  buttonText(fileType) {
    const fileLibrary = {
      'application/octet-stream': 'Download File',
      'application/msword': 'Download Microsoft Word Document',
      'application/pdf': 'View Adobe Reader Document',
      'application/vnd.ms-excel': 'Download Excel Document',
      'application/vnd.ms-powerpoint': 'Download PowerPoint Document',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'Download PowerPoint Document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Download Excel Document',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Download Microsoft Word Document',
      'application/x-mspublisher': 'Download Microsoft Publisher Document',
      'text/html': 'View Attached Web Page',
      'text/plain': 'View Plain Text Attachment'
    };

    let returnButtonName = 'Download File';

    if (fileType in fileLibrary) {
      returnButtonName = fileLibrary[fileType];
    }

    return returnButtonName;
  }

}
