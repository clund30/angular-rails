import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
  {
    title: "My first doc",
    description: 'this is my first doc',
    file_url: 'http://google.com',
    updated_at: '02/01/18',
    image_url: 'http://google.com'
  },
  {
    title: "My Second doc",
    description: 'this is my first doc',
    file_url: 'http://google.com',
    updated_at: '02/01/18',
    image_url: 'http://google.com'
  },
  {
    title: "My Third doc",
    description: 'this is my first doc',
    file_url: 'http://google.com',
    updated_at: '02/01/18',
    image_url: 'http://google.com'
  }
  ]
}