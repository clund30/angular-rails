import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://cl-devcamp-portfolio.herokuapp.com/', 'Ruby on Rails', 150, 120, 15, 'caseylund21@gmail.com')
  proposalTwo: Proposal = new Proposal(95, 'Some Company', 'https://cl-devcamp-portfolio.herokuapp.com/', 'Ruby on Rails', 150, 120, 15, 'caseylund21@gmail.com')
  proposalThree: Proposal = new Proposal(120, 'Another Company', 'https://cl-devcamp-portfolio.herokuapp.com/', 'Ruby on Rails', 150, 120, 15, 'caseylund21@gmail.com')

  proposals: Proposal[] = [ 
    this.proposalOne,
    this.proposalTwo, 
    this.proposalThree ]
}